import { LitElement, html } from 'https://unpkg.com/lit-element@2.2.0/lit-element.js?module';
import Base from './make-base.js';

function App() {
  return html`
    <p>A paragraph</p>
  `;
}

const MyElement = Base(App);

customElements.define('my-element', MyElement);
