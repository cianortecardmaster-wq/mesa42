const STORAGE_KEYS = {
  progress: "ccn-progress-scene-01",
  layout: "ccn-layout-mode"
};

let currentStep = 0;
let activeBackground = "";
let activeCharacters = {};
let activeObjects = {};
let activeCamera = "center";
let isTyping = false;
let typingTimer = null;
let autoMode = false;
let autoAdvanceTimer = null;
let visibleText = "";

const stage = document.getElementById("stage");
const backgroundLayer = document.getElementById("backgroundLayer");
const objectLayer = document.getElementById("objectLayer");
const characterLayer = document.getElementById("characterLayer");

const dialogBox = document.getElementById("dialogBox");
const speakerName = document.getElementById("speakerName");
const dialogText = document.getElementById("dialogText");
const prevTextBtn = document.getElementById("prevTextBtn");
const nextTextBtn = document.getElementById("nextTextBtn");

const historyBtn = document.getElementById("historyBtn");
const autoBtn = document.getElementById("autoBtn");
const skipBtn = document.getElementById("skipBtn");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const restartBtn = document.getElementById("restartBtn");

const historyPanel = document.getElementById("historyPanel");
const historyContent = document.getElementById("historyContent");
const toast = document.getElementById("toast");

const logoOverlay = document.getElementById("logoOverlay");
const introLogo = document.getElementById("introLogo");

const orientationToggle = document.getElementById("orientationToggle");
const rotateOverlay = document.getElementById("rotateOverlay");
const usePortraitBtn = document.getElementById("usePortraitBtn");

let mobileLayoutMode = localStorage.getItem(STORAGE_KEYS.layout) || "landscape";

function isMobileViewport() {
  return window.matchMedia("(max-width: 900px)").matches;
}

function isPortraitViewport() {
  return window.innerHeight > window.innerWidth;
}

function applyMobileLayoutMode() {
  document.body.classList.remove("mobile-landscape-mode", "mobile-portrait-mode");

  if (!isMobileViewport()) {
    rotateOverlay.classList.add("hidden");
    return;
  }

  if (mobileLayoutMode === "portrait") {
    document.body.classList.add("mobile-portrait-mode");
    rotateOverlay.classList.add("hidden");
    orientationToggle.textContent = "Horizontal";
    return;
  }

  document.body.classList.add("mobile-landscape-mode");
  orientationToggle.textContent = "Vertical";

  if (isPortraitViewport()) {
    rotateOverlay.classList.remove("hidden");
  } else {
    rotateOverlay.classList.add("hidden");
  }
}

function toggleMobileLayoutMode() {
  mobileLayoutMode = mobileLayoutMode === "landscape" ? "portrait" : "landscape";
  localStorage.setItem(STORAGE_KEYS.layout, mobileLayoutMode);
  applyMobileLayoutMode();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 1800);
}

function clearTimers() {
  clearTimeout(typingTimer);
  clearTimeout(autoAdvanceTimer);
  typingTimer = null;
  autoAdvanceTimer = null;
  isTyping = false;
}

function resetVisualState() {
  activeBackground = "";
  activeCharacters = {};
  activeObjects = {};
  activeCamera = "center";

  backgroundLayer.style.backgroundImage = "";
  stage.classList.remove("camera-center", "camera-desk");
  stage.classList.add("camera-center");

  characterLayer.innerHTML = "";
  objectLayer.innerHTML = "";
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
  setObjects(step);
  hideObjects(step);
}

function setLogo(step, isCurrentStep) {
  if (step.type === "logo" && isCurrentStep) {
    introLogo.src = step.logo;
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
  activeCamera = step.camera;
  stage.classList.remove("camera-center", "camera-desk");
  stage.classList.add(`camera-${activeCamera}`);
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
    characterLayer.appendChild(characterEl);
    activeCharacters[data.id] = characterEl;
  }

  characterEl.src = data.src;
  characterEl.className = `character ${data.position || "left"}`;
  characterEl.classList.add("visible");
}

function clearObjects(step) {
  if (!step.clearObjects) return;
  objectLayer.innerHTML = "";
  activeObjects = {};
}

function setObjects(step) {
  if (!step.objects) return;
  step.objects.forEach(obj => {
    let objEl = activeObjects[obj.id];

    if (!objEl) {
      objEl = document.createElement("img");
      objEl.classList.add("vn-object");
      objEl.dataset.id = obj.id;
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
    scheduleAutoAdvanceForVisual();
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
    scheduleAutoAdvance();
    return;
  }

  let index = 0;
  const speed = 24;
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
      scheduleAutoAdvance();
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
  scheduleAutoAdvance();
}

function scheduleAutoAdvance() {
  clearTimeout(autoAdvanceTimer);
  if (!autoMode) return;
  autoAdvanceTimer = setTimeout(() => {
    next();
  }, 1200);
}

function scheduleAutoAdvanceForVisual() {
  clearTimeout(autoAdvanceTimer);
  if (!autoMode) return;
  autoAdvanceTimer = setTimeout(() => {
    next();
  }, 650);
}

function openPanel(panel) {
  panel.classList.remove("hidden");
}

function closePanel(panel) {
  panel.classList.add("hidden");
}

function updateHistory() {
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
  prevTextBtn.disabled = currentStep <= 0;
  nextTextBtn.disabled = currentStep >= story.length - 1;
  autoBtn.classList.toggle("active", autoMode);
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEYS.progress, String(currentStep));
  showToast("Progresso salvo.");
}

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEYS.progress);
  if (saved === null) {
    showToast("Nenhum progresso salvo.");
    return;
  }
  const index = Number(saved);
  if (Number.isNaN(index)) {
    showToast("Progresso salvo inválido.");
    return;
  }
  renderStep(index, { forceFullText: true });
  showToast("Progresso carregado.");
}

function restartStory() {
  renderStep(0, { forceFullText: true });
  showToast("História reiniciada.");
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

function skipForward() {
  if (currentStep < story.length - 1) {
    renderStep(Math.min(currentStep + 3, story.length - 1), { forceFullText: true });
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

prevTextBtn.addEventListener("click", event => {
  event.stopPropagation();
  prev();
});

nextTextBtn.addEventListener("click", event => {
  event.stopPropagation();
  next();
});

historyBtn.addEventListener("click", event => {
  event.stopPropagation();
  updateHistory();
  openPanel(historyPanel);
});

autoBtn.addEventListener("click", event => {
  event.stopPropagation();
  autoMode = !autoMode;
  updateNavButtons();
  if (!autoMode) {
    clearTimeout(autoAdvanceTimer);
  } else if (!isTyping) {
    if (shouldHideDialog(story[currentStep])) {
      scheduleAutoAdvanceForVisual();
    } else {
      scheduleAutoAdvance();
    }
  }
});

skipBtn.addEventListener("click", event => {
  event.stopPropagation();
  skipForward();
});

saveBtn.addEventListener("click", event => {
  event.stopPropagation();
  saveProgress();
});

loadBtn.addEventListener("click", event => {
  event.stopPropagation();
  loadProgress();
});

restartBtn.addEventListener("click", event => {
  event.stopPropagation();
  restartStory();
});

document.querySelectorAll("[data-close-panel]").forEach(button => {
  button.addEventListener("click", event => {
    event.stopPropagation();
    const panelId = button.getAttribute("data-close-panel");
    const panel = document.getElementById(panelId);
    if (panel) closePanel(panel);
  });
});

historyPanel.addEventListener("click", event => {
  if (event.target === historyPanel) closePanel(historyPanel);
});

orientationToggle.addEventListener("click", event => {
  event.stopPropagation();
  toggleMobileLayoutMode();
});

usePortraitBtn.addEventListener("click", event => {
  event.stopPropagation();
  mobileLayoutMode = "portrait";
  localStorage.setItem(STORAGE_KEYS.layout, mobileLayoutMode);
  applyMobileLayoutMode();
});

rotateOverlay.addEventListener("click", event => {
  event.stopPropagation();
});

window.addEventListener("resize", applyMobileLayoutMode);
window.addEventListener("orientationchange", applyMobileLayoutMode);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !historyPanel.classList.contains("hidden")) {
    closePanel(historyPanel);
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

  if (event.key.toLowerCase() === "h") {
    event.preventDefault();
    updateHistory();
    openPanel(historyPanel);
  }
});

applyMobileLayoutMode();
renderStep(0);
