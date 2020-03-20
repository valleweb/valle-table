import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

export default class ValleTh extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: table-cell;
          vertical-align: middle;
          border-top: 1px solid rgba(0,0,0,.12);
          height: 48px;
          padding: 12px 18px;
          box-sizing: border-box;
          text-align: right;
          font-size: var(--valle-th-text-size, 13px);
          color: var(--valle-th-text-color, rgba(0,0,0,.54));
        }
      </style>

      <slot></slot>
    `;
  };

  connectedCallback() {
    super.connectedCallback();

    this.setAttribute('role', 'columnheader');
  };
};

customElements.define('valle-th', ValleTh);
