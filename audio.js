const audioEngine = {
  ctx: null,
  masterGain: null,
  musicInterval: null,
  notes: [261.63, 329.63, 392.0, 523.25, 392.0, 329.63],
  step: 0,
  initialized: false,

  init() {
    if (this.initialized) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = state.volume || 0.5;
    this.masterGain.connect(this.ctx.destination);
    this.initialized = true;

    this.startAmbientLoop();
  },

  startAmbientLoop() {
    if (!this.ctx || !this.masterGain) return;
    if (this.musicInterval) clearInterval(this.musicInterval);

    this.musicInterval = setInterval(() => {
      if (!state.audioEnabled) return;
      const note = this.notes[this.step % this.notes.length];
      this.playTone(note, 0.16, "sine", 0.08);
      this.step += 1;
    }, 500);
  },

  setVolume(value) {
    if (!this.masterGain) return;
    this.masterGain.gain.value = Math.max(0, Math.min(1, value));
    state.volume = value;
    saveState();
  },

  toggle() {
    state.audioEnabled = !state.audioEnabled;
    if (state.audioEnabled) {
      this.init();
      this.startAmbientLoop();
    }
    saveState();
    return state.audioEnabled;
  },

  playTone(frequency, duration = 0.2, type = "sine", gainValue = 0.1) {
    if (!this.ctx || !this.masterGain || !state.audioEnabled) return;

    const oscillator = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.value = gainValue;

    oscillator.connect(gain);
    gain.connect(this.masterGain);

    const now = this.ctx.currentTime;
    oscillator.start(now);
    oscillator.stop(now + duration);

    gain.gain.setValueAtTime(gainValue, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  },

  pulseSequence(seq, args = {}) {
    seq.forEach((note, index) => {
      const delay = index * (args.delay || 0.08);
      setTimeout(() => this.playTone(note, args.duration || 0.12, args.type || "triangle", args.gain || 0.09), delay * 1000);
    });
  }
};

window.audioEngine = audioEngine;
