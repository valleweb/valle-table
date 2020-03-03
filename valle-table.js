import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

export default class ValleTable extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: table;
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

    this.setAttribute('role', 'grid');
    this.setAttribute('aria-labelledby', this.label);

  };
};

customElements.define('valle-table', ValleTable);
