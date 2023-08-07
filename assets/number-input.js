import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"

export class NumberInput extends LitElement {
  input

  static get properties() {
    return {
      "initial-value": { type: Number },
    }
  }

  static styles = [
    css`
      :host {
        display: inline-flex;
        margin-right: 0.1em;
      }
      input {
        min-width: 1.5ch;
        max-width: 5ch;
        border: 0;
        border-radius: 0.4em;

        font-family: var(--code-font);
        text-align: center;
        cursor: pointer;
        background-color: color-mix(
          in srgb,
          white 40%,
          var(--primary-color) 100%
        );
        transition: background-color 200ms;
      }

      input:hover {
        background-color: color-mix(
          in srgb,
          white 20%,
          var(--primary-color) 100%
        );
      }

      input:focus {
        outline: solid 2px var(--primary-color);
      }

      /* Remove arrows */
      input::-webkit-inner-spin-button,
      input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
      }
    `,
  ]

  firstUpdated() {
    const input = this.shadowRoot.querySelector("input")
    this.input = input

    function updateInputWidth() {
      input.style.width = input.value.length + "ch"
    }

    updateInputWidth()
    input.addEventListener("input", updateInputWidth)

    document.documentElement.style.setProperty(
      `--${this.id}`,
      `unset`
    )
  }

  render() {
    return html`
      <input
        type="number"
        step="0.1"
        value=${this["initial-value"] ?? 1}
        @input=${this.setRootProperty}
      />
    `
  }

  setRootProperty() {
    document.documentElement.style.setProperty(
      `--${this.id}`,
      `${this.input.value}em`
    )
  }
}
customElements.define("number-input", NumberInput)
