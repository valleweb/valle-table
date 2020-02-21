import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

export default class ValleTd extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: table-cell;
          vertical-align: middle;
          height: 48px;
          border-top: 1px solid rgba(0,0,0,.12);
          padding: 12px 18px;
          box-sizing: border-box;
          text-align: right;
          font-weight: 300;
          font-size: var(--valle-td-text-size, 13px);
          color: var(--valle-td-text-color, rgba(0,0,0,.54));
        };
      </style>

      <slot></slot>
    `;
  };

  static get properties() {
		return {
			label: {
        type: String,
        value: ''
      }
		};
  };

  connectedCallback() {
    super.connectedCallback();

    this.setAttribute('role', 'gridcell');
    this.setAttribute('tabindex', '-1');
    this.setAttribute('aria-labelledby', this.label);
  };
};

customElements.define('valle-td', ValleTd);
