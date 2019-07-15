import { hookSymbol, effectsSymbol } from './symbols.js';

class State {
  constructor(update) {
    this.update = update;
    this[hookSymbol] = new Map();
    this[effectsSymbol] = [];
  }

  runEffects() {
    let effects = this[effectsSymbol];
    if(effects) {
      setCurrent(this);
      for(let effect of effects) {
        effect.call(this);
      }
      clear();
    }
  }
}

export { State };