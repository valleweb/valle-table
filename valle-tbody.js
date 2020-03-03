import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

export default class ValleTBody extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: table-row-group;
        };
      </style>

      <slot></slot>
    `;
	};

  connectedCallback() {
    super.connectedCallback();

    this.setAttribute('role', 'rowgroup');
  };
};

customElements.define('valle-tbody', ValleTBody);
