import { html } from 'https://unpkg.com/lit-element@2.2.0/lit-element.js?module';
import { useState } from '../../haunted.js';
import Base from './make-base.js';

function App() {
  const [count, setCount] = useState(0);

  return html`
    <p>A paragraph</p>
    <button type="button" @click=${() => setCount(count + 1)}>Increment</button>
    <p><strong>Count:</strong> ${count}</p>
  `;
}

const MyElement = Base(App);

customElements.define('my-element', MyElement);
