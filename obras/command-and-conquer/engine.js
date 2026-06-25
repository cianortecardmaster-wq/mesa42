const STORAGE_KEYS = {
  progress: "ccn-progress-scene-01"
};

let currentStep = 0;
let activeBackground = "";
let activeCharacters = {};
let activeObjects = {};
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
const rotateOverlay = document.getElementById("rotateOverlay");

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
  objectLayer.innerHTML = "";

  if (effectLayer) {
    effectLayer.innerHTML = "";
  }
}

function renderStep(index, options = {}) {
  const { forceFullText = false } = options;

  currentStep = Math.max(0, Math.min(index, story.length - 1));

  clearTimers();
  resetVisualState();

  for (let i = 0; i <= currentStep; i += 1) {
    applyVisualState(story[i], i === currentStep);
  }

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
  clearObjects(step);
  clearEffects(step);
  setObjects(step);
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
}

function clearObjects(step) {
  if (!step.clearObjects) return;

  objectLayer.innerHTML = "";
  activeObjects = {};
}

function clearEffects(step) {
  if (!step.clearEffects || !effectLayer) return;

  effectLayer.innerHTML = "";
  activePhone = null;
}

function setObjects(step) {
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
    objEl.classList.add("visible");
  });
}

function setPhone(step) {
  if (!step.phone || !effectLayer) return;

  let phoneEl = activePhone;

  if (!phoneEl) {
    phoneEl = document.createElement("div");
    phoneEl.className = "phone-overlay";
    phoneEl.innerHTML = `
      <img class="phone-frame" alt="Celular com conversa" />
      <div class="phone-chat-layer"></div>
    `;
    effectLayer.appendChild(phoneEl);
    activePhone = phoneEl;
  }

  const frame = phoneEl.querySelector(".phone-frame");
  const chatLayer = phoneEl.querySelector(".phone-chat-layer");

  frame.src = step.phone.src;
  chatLayer.innerHTML = "";

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
    chatLayer.appendChild(bubble);
  });

  phoneEl.classList.add("visible");
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
  visibleText = "";

  if (shouldHideDialog(step)) {
    dialogBox.classList.add("hidden");
    speakerName.textContent = "";
    dialogText.textContent = "";
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

  speakerName.textContent = step.speaker || "";
  speakerName.classList.toggle("empty", !step.speaker);

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
    .slice(0, currentStep + 1)
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
  if (prevTextBtn) prevTextBtn.disabled = currentStep <= 0;
  if (nextTextBtn) nextTextBtn.disabled = currentStep >= story.length - 1;
}

function next() {
  if (historyPanel && !historyPanel.classList.contains("hidden")) return;

  if (isTyping) {
    finishTyping();
    return;
  }

  if (currentStep < story.length - 1) {
    renderStep(currentStep + 1);
  }
}

function prev() {
  if (historyPanel && !historyPanel.classList.contains("hidden")) return;

  if (currentStep > 0) {
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

fullscreenBtn?.addEventListener("click", event => {
  event.stopPropagation();
  toggleFullscreen();
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
});

applyMobileLayoutMode();
updateFullscreenButton();
renderStep(0);
