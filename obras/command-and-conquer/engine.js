const STORAGE_KEYS = {
  progress: "ccn-progress-scene-01"
};

const STORY_PARTS = {
  "1": {
    title: "Parte 1 — A carta chega",
    startId: "intro-logo",
    endId: "scene-kitchen-postcard-06"
  },
  "2": {
    title: "Parte 2 — Centro Cultural",
    startId: "scene-cc-title",
    endId: "scene-06-aftertalk-56"
  },
  "3": {
    title: "Parte 3 — Armory no Bazar",
    startId: "scene-07-room-night-entry",
    endId: "scene-21-front-alone-11"
  },
  "4": {
    title: "Parte 4 — A carta vira posse",
    startId: "part4-title",
    endId: "part4-scene07-transition-black"
  }
};

const urlParams = new URLSearchParams(window.location.search);
const selectedPartId = urlParams.get("parte");
let activePart = null;
let partStartIndex = 0;
let partEndIndex = 0;

let currentStep = 0;
let activeBackground = "";
let activeCharacters = {};
let activeObjects = {};
let activeObjectOverlays = {};
let activePhone = null;
let isTyping = false;
let typingTimer = null;
let visibleText = "";

const stage = document.getElementById("stage");
const backgroundLayer = document.getElementById("backgroundLayer");
const objectLayer = document.getElementById("objectLayer");
const characterLayer = document.getElementById("characterLayer");
const effectLayer = document.getElementById("effectLayer");

const dialogBox = document.getElementById("dialogBox");
const speakerName = document.getElementById("speakerName");
const dialogText = document.getElementById("dialogText");
const prevTextBtn = document.getElementById("prevTextBtn");
const nextTextBtn = document.getElementById("nextTextBtn");

const historyPanel = document.getElementById("historyPanel");
const historyContent = document.getElementById("historyContent");
const toast = document.getElementById("toast");

const logoOverlay = document.getElementById("logoOverlay");
const introLogo = document.getElementById("introLogo");

const fullscreenBtn = document.getElementById("fullscreenBtn");
const jumpEndBtn = document.getElementById("jumpEndBtn");
const rotateOverlay = document.getElementById("rotateOverlay");
const partSelector = document.getElementById("partSelector");
const vnApp = document.getElementById("vnApp");
const partsBtn = document.getElementById("partsBtn");


const dialogueStyles = {
  JP: { color: "#d6a84f" },
  Rafael: { color: "#2fa66a" },
  Bruno: { color: "#e58a35" },
  Mateus: { color: "#6fa8dc" },
  Camila: { color: "#b35adf" },
  Robertinho: { color: "#c98c3a" },
  Lucas: { color: "#7ba7b8" },
  Isa: { color: "#c89dd8" },
  Amanda: { color: "#d970a7" },
  Gabriel: { color: "#d4873f" },
  Valdir: { color: "#c9a56a" },
  Marcos: { color: "#78c2ad" },
  Robert: { color: "#c98c3a" },
  thought: { color: "#9aa0a6" },
  unknown: { color: "#7f7f7f" }
};

const speakerCharacterMap = {
  JP: "jp",
  Rafael: "rafael",
  Bruno: "bruno",
  Mateus: "mateus",
  Camila: "camila",
  Robertinho: "robertinho",
  Robert: "robertinho",
  Isa: "isa",
  Amanda: "amanda",
  Gabriel: "gabriel",
  Valdir: "valdir"
};

const characterSpeakerMap = Object.entries(speakerCharacterMap).reduce((map, [speaker, characterId]) => {
  if (!map[characterId]) map[characterId] = speaker;
  return map;
}, {});

function normalizeSpeakerName(speaker = "") {
  return String(speaker)
    .replace(/\s*\([^)]*\)\s*/g, "")
    .trim();
}

function getDialogueStyleKey(step = {}) {
  if (step.type === "thought") return "thought";

  const speaker = normalizeSpeakerName(step.speaker);
  if (speaker && dialogueStyles[speaker]) return speaker;

  return "unknown";
}

function getDialogueStyle(step = {}) {
  return dialogueStyles[getDialogueStyleKey(step)] || dialogueStyles.unknown;
}

function getDisplayedSpeaker(step = {}) {
  const speaker = normalizeSpeakerName(step.speaker);

  if (step.type === "thought") {
    return speaker ? `${speaker} (pensamento)` : "Pensamento";
  }

  if (!speaker) return "";

  if (dialogueStyles[speaker]) return speaker;

  if (["???", "desconhecido", "unknown"].includes(speaker.toLowerCase())) {
    return "???";
  }

  return speaker;
}

function getActiveCharacterId(step = {}) {
  if (!step || shouldHideDialog(step)) return null;

  const styleKey = getDialogueStyleKey(step);
  const speaker = normalizeSpeakerName(step.speaker);

  if (styleKey === "unknown") return null;
  if (speakerCharacterMap[speaker]) return speakerCharacterMap[speaker];

  return null;
}

function stepSpeaksAsCharacter(step = {}, characterId = "") {
  if (!step || shouldHideDialog(step) || !characterId) return false;

  const speaker = normalizeSpeakerName(step.speaker);
  return speakerCharacterMap[speaker] === characterId;
}

function isFutureSceneBoundary(step = {}, currentBackground = "") {
  if (!step) return false;
  if (step.clearCharacters) return true;
  if (step.bg && currentBackground && step.bg !== currentBackground) return true;

  return false;
}

function hasFutureLineInCurrentScene(characterId, fromIndex) {
  if (!characterId) return false;

  const currentStepData = story[fromIndex];
  const currentActiveCharacterId = getActiveCharacterId(currentStepData);

  if (currentActiveCharacterId === characterId) return true;

  for (let i = fromIndex + 1; i <= partEndIndex; i += 1) {
    const futureStep = story[i];

    if (isFutureSceneBoundary(futureStep, activeBackground)) return false;
    if (stepSpeaksAsCharacter(futureStep, characterId)) return true;
  }

  return false;
}

function removeCharacter(characterId) {
  const characterEl = activeCharacters[characterId];
  if (!characterEl) return;

  characterEl.remove();
  delete activeCharacters[characterId];
}

function pruneCharactersWithoutFutureLines(fromIndex) {
  const step = story[fromIndex];

  if (!step || shouldHideDialog(step)) return;

  Object.keys(activeCharacters || {}).forEach(characterId => {
    if (!characterSpeakerMap[characterId]) return;

    if (!hasFutureLineInCurrentScene(characterId, fromIndex)) {
      removeCharacter(characterId);
    }
  });
}

function resetDialogueVisuals() {
  if (dialogBox) {
    dialogBox.classList.remove(
      "dialogue-style-character",
      "dialogue-style-thought",
      "dialogue-style-unknown"
    );
    dialogBox.style.removeProperty("--dialog-accent");
  }

  Object.values(activeCharacters || {}).forEach(characterEl => {
    characterEl.classList.remove("dialogue-active", "dialogue-inactive", "dialogue-neutral");
  });
}

function applyDialogueVisuals(step = {}) {
  resetDialogueVisuals();

  if (!dialogBox || shouldHideDialog(step)) return;

  const styleKey = getDialogueStyleKey(step);
  const style = getDialogueStyle(step);
  const activeCharacterId = getActiveCharacterId(step);

  dialogBox.style.setProperty("--dialog-accent", style.color);

  if (styleKey === "thought") {
    dialogBox.classList.add("dialogue-style-thought");
  } else if (styleKey === "unknown") {
    dialogBox.classList.add("dialogue-style-unknown");
  } else {
    dialogBox.classList.add("dialogue-style-character");
  }

  Object.values(activeCharacters || {}).forEach(characterEl => {
    const isActive = activeCharacterId && characterEl.dataset.id === activeCharacterId;

    if (isActive) {
      characterEl.classList.add("dialogue-active");
      return;
    }

    if (activeCharacterId) {
      characterEl.classList.add("dialogue-inactive");
    } else if (styleKey === "unknown") {
      characterEl.classList.add("dialogue-neutral");
    }
  });
}

function findStoryIndexById(id, fallback = 0) {
  if (!id) return fallback;

  const index = story.findIndex(step => step.id === id);
  return index >= 0 ? index : fallback;
}

function setupStoryPart() {
  const part = STORY_PARTS[selectedPartId];

  if (!part) {
    document.title = "História #001 — Command and Conquer";
    document.documentElement.classList.add("chapters-document");
    document.body.classList.add("chapters-page");
    partSelector?.classList.remove("part-selection-hidden");
    vnApp?.classList.add("vn-app-hidden");
    return false;
  }

  activePart = part;
  partStartIndex = findStoryIndexById(part.startId, 0);
  partEndIndex = part.endId ? findStoryIndexById(part.endId, story.length - 1) : story.length - 1;

  if (partEndIndex < partStartIndex) {
    partEndIndex = story.length - 1;
  }

  currentStep = partStartIndex;
  document.title = `${part.title} — Command and Conquer`;
  document.documentElement.classList.remove("chapters-document");
  document.body.classList.remove("chapters-page");
  partSelector?.classList.add("part-selection-hidden");
  vnApp?.classList.remove("vn-app-hidden");
  jumpEndBtn?.setAttribute("aria-label", `Ir para o final de ${part.title}`);
  return true;
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 900px)").matches;
}

function isPortraitViewport() {
  return window.innerHeight > window.innerWidth;
}

function applyMobileLayoutMode() {
  document.body.classList.remove("mobile-portrait-mode");
  document.body.classList.add("mobile-landscape-mode");

  if (!isMobileViewport()) {
    rotateOverlay?.classList.add("hidden");
    return;
  }

  if (isPortraitViewport()) {
    rotateOverlay?.classList.remove("hidden");
  } else {
    rotateOverlay?.classList.add("hidden");
  }
}

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove("hidden");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 1800);
}

function updateFullscreenButton() {
  if (!fullscreenBtn) return;

  if (!isMobileViewport()) {
    fullscreenBtn.style.display = "none";
    return;
  }

  fullscreenBtn.style.display = "block";
  fullscreenBtn.textContent = document.fullscreenElement ? "Sair" : "Tela cheia";
}

async function toggleFullscreen() {
  if (!document.fullscreenEnabled || !document.documentElement.requestFullscreen) {
    showToast("Tela cheia indisponível neste navegador.");
    return;
  }

  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (error) {
    showToast("Toque novamente ou use o menu do navegador.");
  }

  updateFullscreenButton();
  applyMobileLayoutMode();
}

function clearTimers() {
  clearTimeout(typingTimer);
  typingTimer = null;
  isTyping = false;
}

function resetVisualState() {
  activeBackground = "";
  activeCharacters = {};
  activeObjects = {};
  activePhone = null;

  backgroundLayer.style.backgroundImage = "";

  stage.classList.remove("camera-center", "camera-desk");
  stage.classList.add("camera-center");

  characterLayer.innerHTML = "";
  clearObjectOverlays();
  objectLayer.innerHTML = "";

  if (effectLayer) {
    effectLayer.innerHTML = "";
  }
}

function renderStep(index, options = {}) {
  const { forceFullText = false } = options;

  currentStep = Math.max(partStartIndex, Math.min(index, partEndIndex));

  clearTimers();
  resetVisualState();

  for (let i = partStartIndex; i <= currentStep; i += 1) {
    applyVisualState(story[i], i === currentStep);
  }

  pruneCharactersWithoutFutureLines(currentStep);
  renderDialog(story[currentStep], forceFullText);
  updateHistory();
  updateNavButtons();
}

function applyVisualState(step, isCurrentStep) {
  if (!step) return;

  setLogo(step, isCurrentStep);
  setBackground(step);
  setCamera(step);
  clearCharacters(step);
  setCharacter(step);
  setCharacters(step);
  clearObjects(step);
  clearEffects(step);
  setScreenText(step);
  setObjects(step, isCurrentStep);
  setPhone(step);
  hideObjects(step);
}

function setLogo(step, isCurrentStep) {
  if (!logoOverlay || !introLogo) return;

  if (step.type === "logo" && isCurrentStep) {
    introLogo.src = step.logo || "assets/ui/logo-command-and-conquer.png";
    logoOverlay.classList.remove("hidden");
  } else {
    logoOverlay.classList.add("hidden");
  }
}

function setBackground(step) {
  if (!step.bg) return;

  if (step.bg !== activeBackground) {
    backgroundLayer.style.backgroundImage = `url("${step.bg}")`;
    activeBackground = step.bg;
  }
}

function setCamera(step) {
  if (!step.camera) return;

  stage.classList.remove("camera-center", "camera-desk");
  stage.classList.add(`camera-${step.camera}`);
}

function clearCharacters(step) {
  if (!step.clearCharacters) return;

  characterLayer.innerHTML = "";
  activeCharacters = {};
}

function setCharacter(step) {
  if (!step.character) return;

  const data = step.character;
  let characterEl = activeCharacters[data.id];

  if (!characterEl) {
    characterEl = document.createElement("img");
    characterEl.classList.add("character");
    characterEl.dataset.id = data.id;
    characterEl.alt = data.id || "";
    characterLayer.appendChild(characterEl);
    activeCharacters[data.id] = characterEl;
  }

  characterEl.src = data.src;
  characterEl.className = `character ${data.position || "left"} visible`;

  if (data.effect) {
    data.effect.split(" ").forEach(className => characterEl.classList.add(className));
  }
}

function setCharacters(step) {
  if (!step.characters) return;

  step.characters.forEach(character => {
    setCharacter({ character });
  });
}

function clearObjectOverlays() {
  Object.values(activeObjectOverlays || {}).forEach(el => {
    if (el && el.remove) el.remove();
  });
  activeObjectOverlays = {};
}

function clearObjects(step) {
  if (!step.clearObjects) return;

  clearObjectOverlays();
  objectLayer.innerHTML = "";
  activeObjects = {};
}

function clearEffects(step) {
  if (!step.clearEffects || !effectLayer) return;

  effectLayer.innerHTML = "";
  activePhone = null;
}

function setScreenText(step) {
  if (!step.screenText || !effectLayer) return;

  const screenTextEl = document.createElement("div");
  screenTextEl.className = `screen-text-overlay ${step.screenTextClass || ""}`.trim();
  screenTextEl.textContent = step.screenText;
  effectLayer.appendChild(screenTextEl);
}


function syncObjectOverlay(targetEl, overlayEl) {
  if (!targetEl || !overlayEl || !objectLayer) return;

  const layerRect = objectLayer.getBoundingClientRect();
  const rect = targetEl.getBoundingClientRect();

  overlayEl.style.left = `${rect.left - layerRect.left}px`;
  overlayEl.style.top = `${rect.top - layerRect.top}px`;
  overlayEl.style.width = `${rect.width}px`;
  overlayEl.style.height = `${rect.height}px`;
}

function ensureObjectOverlay(obj, targetEl, isCurrentStep = false) {
  if (!obj.overlayEffect || !objectLayer || !isCurrentStep) return;

  let overlayEl = activeObjectOverlays[obj.id];

  if (!overlayEl) {
    overlayEl = document.createElement("div");
    overlayEl.className = "vn-object-overlay";
    overlayEl.dataset.id = obj.id;
    objectLayer.appendChild(overlayEl);
    activeObjectOverlays[obj.id] = overlayEl;
  }

  overlayEl.className = `vn-object-overlay ${obj.overlayEffect}`.trim();

  const updateOverlay = () => syncObjectOverlay(targetEl, overlayEl);
  requestAnimationFrame(updateOverlay);

  if (!targetEl.complete) {
    targetEl.addEventListener("load", updateOverlay, { once: true });
  }
}

function setObjects(step, isCurrentStep = false) {
  if (!step.objects) return;

  step.objects.forEach(obj => {
    let objEl = activeObjects[obj.id];

    if (!objEl) {
      objEl = document.createElement("img");
      objEl.classList.add("vn-object");
      objEl.dataset.id = obj.id;
      objEl.alt = obj.id || "";
      objectLayer.appendChild(objEl);
      activeObjects[obj.id] = objEl;
    }

    objEl.src = obj.src;
    objEl.style.left = `${obj.x}%`;
    objEl.style.top = `${obj.y}%`;
    objEl.style.width = `${obj.w}%`;
    objEl.className = "vn-object visible";

    if (obj.effect) {
      obj.effect.split(" ").forEach(className => objEl.classList.add(className));
    }

    if (obj.overlayEffect) {
      ensureObjectOverlay(obj, objEl, isCurrentStep);
    } else if (activeObjectOverlays[obj.id]) {
      activeObjectOverlays[obj.id].remove();
      delete activeObjectOverlays[obj.id];
    }
  });
}

function setPhone(step) {
  if (!step.phone || !effectLayer) return;

  let phoneEl = effectLayer.querySelector(".phone-overlay");
  let messagesEl = effectLayer.querySelector(".phone-messages-overlay");

  if (!phoneEl) {
    phoneEl = document.createElement("div");
    phoneEl.className = "phone-overlay";
    phoneEl.innerHTML = `<img class="phone-frame" alt="Celular com conversa" />`;
    effectLayer.appendChild(phoneEl);
  }

  if (!messagesEl) {
    messagesEl = document.createElement("div");
    messagesEl.className = "phone-messages-overlay";
    effectLayer.appendChild(messagesEl);
  }

  const frame = phoneEl.querySelector(".phone-frame");
  frame.src = step.phone.src;

  messagesEl.innerHTML = "";

  const messages = step.phone.messages || [];

  messages.forEach(message => {
    const bubble = document.createElement("div");
    bubble.className = `phone-message ${message.side === "me" ? "phone-message-me" : "phone-message-other"}`;

    const from = document.createElement("div");
    from.className = "phone-message-from";
    from.textContent = message.from || "";

    const text = document.createElement("div");
    text.className = "phone-message-text";
    text.textContent = message.text || "";

    bubble.appendChild(from);
    bubble.appendChild(text);
    messagesEl.appendChild(bubble);
  });

  phoneEl.classList.add("visible");
  messagesEl.classList.add("visible");
}

function hideObjects(step) {
  if (!step.hideObjects) return;

  step.hideObjects.forEach(id => {
    const objEl = activeObjects[id];
    if (objEl) objEl.classList.remove("visible");
  });
}

function shouldHideDialog(step) {
  return Boolean(step.hideDialog || step.type === "visual" || step.type === "logo");
}

function renderDialog(step, forceFullText = false) {
  dialogBox.className = "dialog-box";
  resetDialogueVisuals();

  if (step.mode) {
    dialogBox.classList.add(`mode-${step.mode}`);
  }
  visibleText = "";

  if (shouldHideDialog(step)) {
    dialogBox.classList.add("hidden");
    speakerName.textContent = "";
    dialogText.textContent = "";
    applyDialogueVisuals(step);
    return;
  }

  dialogBox.classList.remove("hidden");

  if (step.type === "thought") {
    dialogBox.classList.add("mode-thought");
  }

  if (step.type === "dialogue") {
    dialogBox.classList.add("mode-dialogue");
  }

  if (step.emphasis) {
    dialogBox.classList.add("mode-emphasis");
  }

  const displayedSpeaker = getDisplayedSpeaker(step);
  speakerName.textContent = displayedSpeaker;
  speakerName.classList.toggle("empty", !displayedSpeaker);
  applyDialogueVisuals(step);

  if (forceFullText) {
    dialogText.textContent = step.text || "";
    visibleText = step.text || "";
    return;
  }

  typeText(step.text || "");
}

function typeText(text) {
  dialogText.textContent = "";
  visibleText = "";

  if (!text) {
    isTyping = false;
    return;
  }

  let index = 0;
  const speed = 22;
  isTyping = true;

  function tick() {
    visibleText += text.charAt(index);
    dialogText.textContent = visibleText;
    index += 1;

    if (index < text.length) {
      typingTimer = setTimeout(tick, speed);
    } else {
      isTyping = false;
      typingTimer = null;
    }
  }

  tick();
}

function finishTyping() {
  const step = story[currentStep];

  clearTimeout(typingTimer);
  typingTimer = null;
  isTyping = false;

  dialogText.textContent = step.text || "";
  visibleText = step.text || "";
}

function updateHistory() {
  if (!historyContent) return;

  const entries = story
    .slice(partStartIndex, currentStep + 1)
    .filter(step => !shouldHideDialog(step) && step.text)
    .map(step => ({
      speaker: step.speaker || "",
      text: step.text || ""
    }));

  historyContent.innerHTML = entries.map(entry => `
    <div class="history-entry">
      <div class="history-speaker">${escapeHtml(entry.speaker)}</div>
      <div class="history-text">${escapeHtml(entry.text)}</div>
    </div>
  `).join("");
}

function updateNavButtons() {
  if (prevTextBtn) prevTextBtn.disabled = currentStep <= partStartIndex;
  if (nextTextBtn) nextTextBtn.disabled = currentStep >= partEndIndex;
}

function next() {
  if (historyPanel && !historyPanel.classList.contains("hidden")) return;

  if (isTyping) {
    finishTyping();
    return;
  }

  if (currentStep < partEndIndex) {
    renderStep(currentStep + 1);
  }
}

function prev() {
  if (historyPanel && !historyPanel.classList.contains("hidden")) return;

  if (currentStep > partStartIndex) {
    renderStep(currentStep - 1, { forceFullText: true });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

stage.addEventListener("click", event => {
  if (event.target.closest("button")) return;
  next();
});

prevTextBtn?.addEventListener("click", event => {
  event.stopPropagation();
  prev();
});

nextTextBtn?.addEventListener("click", event => {
  event.stopPropagation();
  next();
});

jumpEndBtn?.addEventListener("click", event => {
  event.stopPropagation();
  renderStep(partEndIndex, { forceFullText: true });
});

fullscreenBtn?.addEventListener("click", event => {
  event.stopPropagation();
  toggleFullscreen();
});

partsBtn?.addEventListener("click", event => {
  event.stopPropagation();
  window.location.href = "index.html";
});

rotateOverlay?.addEventListener("click", event => {
  event.stopPropagation();
});

historyPanel?.addEventListener("click", event => {
  if (event.target === historyPanel) {
    historyPanel.classList.add("hidden");
  }
});

document.querySelectorAll("[data-close-panel]").forEach(button => {
  button.addEventListener("click", event => {
    event.stopPropagation();
    const panelId = button.getAttribute("data-close-panel");
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.add("hidden");
  });
});

window.addEventListener("resize", () => {
  applyMobileLayoutMode();
  updateFullscreenButton();
});

window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    applyMobileLayoutMode();
    updateFullscreenButton();
  }, 250);
});

document.addEventListener("fullscreenchange", updateFullscreenButton);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && historyPanel && !historyPanel.classList.contains("hidden")) {
    historyPanel.classList.add("hidden");
    return;
  }

  if (["Enter", " ", "ArrowRight"].includes(event.key)) {
    event.preventDefault();
    next();
  }

  if (["ArrowLeft", "Backspace"].includes(event.key)) {
    event.preventDefault();
    prev();
  }

  if (event.key === "End") {
    event.preventDefault();
    renderStep(partEndIndex, { forceFullText: true });
  }
});

if (setupStoryPart()) {
  applyMobileLayoutMode();
  updateFullscreenButton();
  renderStep(partStartIndex);
}
