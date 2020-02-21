import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

export default class ValleTr extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: table-row;
        };
      </style>

      <slot></slot>
    `;
  };

  connectedCallback() {
    super.connectedCallback();

    this.setAttribute('role', 'row');
  };
};

customElements.define('valle-tr', ValleTr);
