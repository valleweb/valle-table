import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

export default class ValleTHead extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: table-header-group;
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

customElements.define('valle-thead', ValleTHead);
