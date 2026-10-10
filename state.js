const STORAGE_KEY = "our-little-world-state-v1";

const defaultState = {
  audioEnabled: true,
  volume: 0.5,
  reducedMotion: false,
  highContrast: false,
  discovered: {
    friendshipStart: true,
    returningHome: false,
    declaration: false,
    loveStory: false,
    mineDiamond: false,
    hiddenBunny: false
  },
  affection: 0,
  inventory: ["apple"],
  minedBlocks: [],
  rabbits: {
    1: false,
    2: false,
    3: false,
    4: false
  },
  letterOpened: false,
  settings: {
    photoMode: false,
    lastScene: "day"
  }
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return structuredClone(defaultState);
    }
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      discovered: { ...defaultState.discovered, ...(parsed.discovered || {}) },
      rabbits: { ...defaultState.rabbits, ...(parsed.rabbits || {}) },
      settings: { ...defaultState.settings, ...(parsed.settings || {}) },
      inventory: Array.isArray(parsed.inventory) ? parsed.inventory : defaultState.inventory,
      minedBlocks: Array.isArray(parsed.minedBlocks) ? parsed.minedBlocks : defaultState.minedBlocks
    };
  } catch (error) {
    console.warn("State load failed, using defaults.", error);
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setState(partial) {
  state = { ...state, ...partial };
  saveState();
}

function addInventory(itemId) {
  if (!state.inventory.includes(itemId)) {
    state.inventory.push(itemId);
    saveState();
  }
}

function markDiscovered(id) {
  state.discovered[id] = true;
  saveState();
}

function unlockAchievement(id) {
  if (!state.discovered[id]) {
    markDiscovered(id);
    showToast(`Advancement Made! ${getAchievementTitle(id)}`);
    if (window.audioEngine && state.audioEnabled) {
      audioEngine.playTone(392, 0.12, "triangle");
    }
  }
}

function getAchievementTitle(id) {
  const item = APP_CONFIG.achievements.find(achievement => achievement.id === id);
  return item ? item.title : "Nova conquista";
}

function getAchievementById(id) {
  return APP_CONFIG.achievements.find(item => item.id === id);
}

function isAchievementUnlocked(id) {
  return !!state.discovered[id];
}

function getInventoryLabel(itemId) {
  const item = APP_CONFIG.inventory.find(entry => entry.id === itemId);
  return item ? item : { id: itemId, name: "Item especial", icon: "✨" };
}

function setLastScene(scene) {
  state.settings.lastScene = scene;
  saveState();
}

function resetProgress() {
  state = structuredClone(defaultState);
  saveState();
  location.reload();
}

function showToast(message) {
  const toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("visible");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

window.state = state;
window.loadState = loadState;
window.saveState = saveState;
window.resetProgress = resetProgress;
window.showToast = showToast;
window.unlockAchievement = unlockAchievement;
window.addInventory = addInventory;
window.getAchievementTitle = getAchievementTitle;
window.getInventoryLabel = getInventoryLabel;
