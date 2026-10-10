const interactiveActions = {
  tree: () => {
    unlockAchievement("friendship-start");
    addInventory("heart");
    showToast("A árvore da memória floresceu ♥");
    audioEngine.pulseSequence(SOUND_BANK.success, { delay: 0.08, gain: 0.09 });
    if (!state.letterOpened) {
      document.getElementById("letterModal").classList.add("show");
      state.letterOpened = true;
      saveState();
    }
  },

  richNest: () => {
    document.getElementById("richNestModal").classList.add("show");
    unlockAchievement("returning-home");
  },

  rabbitSanctuary: () => {
    document.getElementById("rabbitSanctuaryModal").classList.add("show");
    unlockAchievement("hidden-bunny");
  },

  investigation: () => {
    document.getElementById("investigationModal").classList.add("show");
    unlockAchievement("declaration");
  },

  mine: () => {
    document.getElementById("mineModal").classList.add("show");
  },

  wishes: () => {
    showToast("Uma estrela cadente passa pelo céu. O desejo de vocês está no ar ✨");
    unlockAchievement("love-story");
    addInventory("diamond");
  }
};

function setupWorldInteractions() {
  const interactiveEls = document.querySelectorAll("[data-interactive='true']");
  interactiveEls.forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.id;
      if (interactiveActions[id]) {
        interactiveActions[id]();
      }
    });
  });
}

function renderAchievements() {
  const list = document.getElementById("achievementsList");
  if (!list) return;

  list.innerHTML = APP_CONFIG.achievements.map((achievement) => {
    const unlocked = isAchievementUnlocked(achievement.id);
    return `
      <div class="achievement-item ${unlocked ? "unlocked" : "locked"}">
        <div class="achievement-icon">${achievement.icon}</div>
        <div>
          <h3>${achievement.title}</h3>
          <p>${achievement.description}</p>
        </div>
      </div>
    `;
  }).join("");
}

function renderInventory() {
  const grid = document.getElementById("inventoryGrid");
  if (!grid) return;

  const items = state.inventory.map(itemId => getInventoryLabel(itemId));
  grid.innerHTML = items.map(item => `
    <div class="inventory-item">
      <span>${item.icon}</span>
      <span>${item.name}</span>
    </div>
  `).join("");
}

function renderInvestigationBoard() {
  const notes = document.getElementById("investigationNotes");
  const puzzles = document.getElementById("investigationPuzzles");
  if (!notes || !puzzles) return;

  notes.innerHTML = APP_CONFIG.investigationNotes.map(note => `<div class="investigation-note">${note}</div>`).join("");
  puzzles.innerHTML = APP_CONFIG.puzzles.map((item, index) => `
    <div class="puzzle-item">
      <span>${index + 1}. ${item.question}</span>
      <input type="text" data-answer="${item.answer.toLowerCase()}" placeholder="Descubra a resposta" />
    </div>
  `).join("");

  puzzles.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", (event) => {
      const userValue = event.target.value.trim().toLowerCase();
      const correctAnswer = event.target.dataset.answer.toLowerCase();

      if (!userValue) return;
      if (userValue === correctAnswer) {
        event.target.parentElement.classList.add("success");
        showToast("Pista decifrada! O mistério sorri ao amor de vocês.");
        audioEngine.pulseSequence(SOUND_BANK.success, { delay: 0.08, gain: 0.08 });
      } else {
        event.target.style.borderColor = "#f87171";
      }
    });
  });
}

function renderRabbitCards() {
  const area = document.getElementById("rabbitInteractionArea");
  if (!area) return;

  area.innerHTML = APP_CONFIG.rabbits.map(rabbit => `
    <button class="rabbit-card" data-rabbit-id="${rabbit.id}">
      <span class="rabbit-emoji">${rabbit.emoji}</span>
      <strong>${rabbit.name}</strong>
      <small>${rabbit.trait}</small>
    </button>
  `).join("");

  area.querySelectorAll(".rabbit-card").forEach((card) => {
    card.addEventListener("click", () => {
      const rabbitId = Number(card.dataset.rabbitId);
      state.rabbits[rabbitId] = true;
      saveState();
      const info = document.getElementById("rabbitInfo");
      const rabbit = APP_CONFIG.rabbits.find(item => item.id === rabbitId);
      info.textContent = `${rabbit.name}: ${rabbit.trait}`;
      showToast(`${rabbit.name} está pulando de felicidade!`);
      audioEngine.pulseSequence(SOUND_BANK.heart, { delay: 0.09, gain: 0.06 });
      unlockAchievement("hidden-bunny");
    });
  });
}

function renderMineBlocks() {
  const grid = document.getElementById("mineBlocksGrid");
  if (!grid) return;

  grid.innerHTML = APP_CONFIG.mineBlocks.map((block, index) => {
    const mined = state.minedBlocks.includes(block.id);
    return `
      <button class="mine-block ${mined ? "mined" : ""}" data-block-id="${block.id}" data-index="${index}">
        <span>${block.icon}</span>
        <small>${block.name}</small>
      </button>
    `;
  }).join("");

  grid.querySelectorAll(".mine-block").forEach((blockBtn) => {
    blockBtn.addEventListener("click", () => {
      const blockId = blockBtn.dataset.blockId;
      if (state.minedBlocks.includes(blockId)) return;

      state.minedBlocks.push(blockId);
      saveState();
      blockBtn.classList.add("mined");

      if (blockId === "diamond") {
        unlockAchievement("mine-diamond");
        showToast("O Grande Diamante apareceu! O tesouro mais lindo foi encontrado.");
      } else {
        showToast(`${APP_CONFIG.mineBlocks.find(item => item.id === blockId).name} coletado!`);
      }

      audioEngine.pulseSequence(SOUND_BANK.mine, { delay: 0.05, gain: 0.09, type: "square" });
      addInventory(blockId === "diamond" ? "diamond" : "apple");
      renderInventory();
    });
  });
}

function bindModalControls() {
  document.querySelectorAll(".modal-close").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".modal").classList.remove("show");
    });
  });

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) modal.classList.remove("show");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal.show").forEach((modal) => modal.classList.remove("show"));
    }
  });
}

function renderLetter() {
  const letterBody = document.getElementById("letterBody");
  if (!letterBody) return;

  letterBody.innerHTML = APP_CONFIG.letter.paragraphs.map(item => `<p>${item}</p>`).join("");
  document.getElementById("letterSignature").textContent = APP_CONFIG.letter.signature;
}

function setupButtons() {
  const btnAudio = document.getElementById("btnAudio");
  const btnPhoto = document.getElementById("btnPhoto");
  const btnAchievements = document.getElementById("btnAchievements");
  const btnInventory = document.getElementById("btnInventory");
  const btnLetter = document.getElementById("btnLetter");
  const btnSettings = document.getElementById("btnSettings");

  btnAudio.addEventListener("click", () => {
    const enabled = audioEngine.toggle();
    btnAudio.textContent = enabled ? "🔊" : "🔇";
    showToast(enabled ? "Áudio ativado" : "Áudio desativado");
  });

  btnPhoto.addEventListener("click", () => {
    document.body.classList.toggle("photo-mode");
    showToast(document.body.classList.contains("photo-mode") ? "Modo foto ativado" : "Modo foto desligado");
  });

  btnAchievements.addEventListener("click", () => {
    document.getElementById("achievementsModal").classList.add("show");
    renderAchievements();
  });

  btnInventory.addEventListener("click", () => {
    document.getElementById("inventoryModal").classList.add("show");
    renderInventory();
  });

  btnLetter.addEventListener("click", () => {
    document.getElementById("letterModal").classList.add("show");
    renderLetter();
  });

  btnSettings.addEventListener("click", () => {
    document.getElementById("settingsModal").classList.add("show");
  });

  document.getElementById("btnResetProgress").addEventListener("click", () => {
    resetProgress();
  });

  document.getElementById("settingVolume").addEventListener("input", (event) => {
    const value = Number(event.target.value) / 100;
    audioEngine.setVolume(value);
  });

  document.getElementById("settingReducedMotion").addEventListener("change", (event) => {
    state.reducedMotion = event.target.checked;
    document.body.classList.toggle("reduced-motion", state.reducedMotion);
    saveState();
  });

  document.getElementById("settingHighContrast").addEventListener("change", (event) => {
    state.highContrast = event.target.checked;
    document.body.classList.toggle("high-contrast", state.highContrast);
    saveState();
  });
}

function bindRichNestActions() {
  document.querySelectorAll(".nest-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      const fill = document.querySelector(".affection-fill");

      if (action === "feed") {
        state.affection += 12;
        showToast("Maçã dourada entregue ao Richarlyson ✨");
      }

      if (action === "carrot") {
        state.affection += 16;
        showToast("Cenoura pixelada recebida com pulinhos 😄");
      }

      if (action === "pet") {
        state.affection += 18;
        showToast("Um carinho bem dado. O coração ficou mais quentinho.");
      }

      if (action === "talk") {
        state.affection += 10;
        showToast("O Richarlyson sorriu e te pareceu feliz.");
      }

      const affectionPercent = Math.min(100, state.affection);
      fill.style.width = `${affectionPercent}%`;
      saveState();
      audioEngine.pulseSequence(SOUND_BANK.heart, { delay: 0.08, gain: 0.08 });
    });
  });
}

function initWorld() {
  renderLetter();
  renderAchievements();
  renderInventory();
  renderInvestigationBoard();
  renderRabbitCards();
  renderMineBlocks();
  bindModalControls();
  bindRichNestActions();
  setupButtons();
  setupWorldInteractions();

  document.getElementById("settingReducedMotion").checked = state.reducedMotion;
  document.getElementById("settingHighContrast").checked = state.highContrast;
  document.getElementById("settingVolume").value = Math.round((state.volume || 0.5) * 100);
  document.body.classList.toggle("reduced-motion", state.reducedMotion);
  document.body.classList.toggle("high-contrast", state.highContrast);

  if (state.audioEnabled) {
    audioEngine.init();
  }

  const skyBackground = document.getElementById("skyBackground");
  const dayCycle = ["day", "dusk", "night"];
  let cycleIndex = 0;

  setInterval(() => {
    cycleIndex = (cycleIndex + 1) % dayCycle.length;
    const scene = dayCycle[cycleIndex];
    const mood = APP_CONFIG.mood[scene === "day" ? "day" : scene === "dusk" ? "dusk" : "night"];
    skyBackground.style.background = mood.sky;
    setLastScene(scene);
  }, 18000);
}

window.addEventListener("pointermove", (event) => {
  window.pointer = { x: event.clientX, y: event.clientY };
});

window.addEventListener("DOMContentLoaded", initWorld);
