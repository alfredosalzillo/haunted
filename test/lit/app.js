import { LitElement, html } from 'https://unpkg.com/lit-element@2.2.0/lit-element.js?module';

class MyElement extends LitElement {

  render() {
    return html`
      <p>A paragraph</p>
    `;
  }
}

customElements.define('my-element', MyElement);
