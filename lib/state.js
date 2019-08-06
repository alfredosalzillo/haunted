import { hookSymbol, effectsSymbol } from './symbols.js';
import { setCurrent, clear } from './interface.js';

class State {
  constructor(renderer, update) {
    this.update = update;
    this.renderer = renderer;
    this[hookSymbol] = new Map();
    this[effectsSymbol] = [];
  }

  render() {
    setCurrent(this);
    let result = this.args ?
      this.renderer.apply(this.host, this.args) :
      this.renderer.call(this.host, this.host);
    clear();
    return result;
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

  teardown() {
    let hooks = this[hookSymbol];
    hooks.forEach((hook) => {
      if (typeof hook.teardown === 'function') {
        hook.teardown();
      }
    })
  }
}

export { State };