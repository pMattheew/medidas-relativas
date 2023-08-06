import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"

export class Lab extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        margin-top: 4em;
        padding-bottom: 2em;
        outline: solid 1em
          color-mix(in srgb, black 20%, var(--primary-color) 100%);
        border-radius: 2em;
        color: black;
        background-color: var(--primary-color);
      }

      h1, h2, h3 {
        font-family: var(--title-font);
      }

      :host > h1 {
        padding-block: 4rem;
        margin-block: 0;
        
        font-size: 2rem;
        letter-spacing: 0.05em;
        text-align: center;

        .title-icon {
          margin-right: 0.25em;
        }
      }

      :host > div {
        display: flex;
        justify-content: space-around;
      }

      .example {
        flex: 0.4;
        background-color: color-mix(
          in srgb,
          white 40%,
          var(--accent-color) 100%
        );

        & p {
          text-align: justify;
        }
      }

      .em-unit {
        border: solid 1em var(--accent-color);
        border-radius: 2em;
        padding-inline: 2em;

        & h1 {
          font-size: 2em;
        }

        & p {
          font-size: 1em;
        }
      }

      .rem-unit {
        border: solid 1rem var(--accent-color);
        border-radius: 2rem;
        padding-inline: 2rem;

        & h2 {
          font-size: 1.5rem;
        }

        & h3 {
          font-size: 1.17rem;
        }

        & p {
          font-size: 1rem;
        }
      }
    `,
  ]

  render() {
    return html`
      <h1><span class="title-icon">👨🏾‍💻</span>Hands-on: "em" e "rem"</h1>
      <div>
        <article class="example em-unit">
          <h1>em</h1>
          <h2>
            Todo <span>font-size</span> nesta coluna utilizam <em>em</em>.
          </h2>
          <h3>Unidade de medida relativa ao pai</h3>
          <p>
            Sou a unidade "em" do CSS. Meu tamanho se baseia no elemento pai,
            ajustando-se automaticamente se a fonte do pai mudar. Isso é útil
            para ajustes finos e proporcionais, mas cuidado com aninhamentos
            excessivos, pois posso amplificar mudanças inesperadas.
          </p>
        </article>
        <article class="example rem-unit">
          <h1>rem</h1>
          <h2>
            Todo <span>font-size</span> nesta coluna utilizam <em>rem</em>.
          </h2>
          <h3>Unidade de medida relativa à raiz</h3>
          <p>
            Eu sou o "rem" do CSS. Minha dimensão está ligada à fonte da raiz do
            documento. Isso garante consistência em todo o layout, pois não sou
            afetado por mudanças de tamanho de fonte em elementos pai. Minha
            abordagem é ótima para estruturas de página coesas e dimensionamento
            previsível.
          </p>
        </article>
      </div>
    `
  }
}
customElements.define("app-lab", Lab)
