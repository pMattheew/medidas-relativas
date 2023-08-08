import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"

export class Lab extends LitElement {
  static styles = [
    css`
      :host {
        height: 100%;
        display: block;
        padding-inline: 2em;
        outline: solid 1em var(--darker-primary-color);
        border-radius: 2em;

        color: black;
        background-color: var(--primary-color);
        overflow-y: scroll;
        overflow-x: clip;
      }

      h1,
      h2,
      h3 {
        font-family: var(--title-font);

        .title-icon {
          margin-right: 0.25em;
        }
      }

      p {
        margin-top: 0;
        text-align: justify;
      }

      li {
        padding-left: 1em;

        &::marker {
          font-weight: 700;
        }
      }

      pre,
      code {
        font-family: var(--code-font);
      }

      code {
        padding-inline: 0.3em;
        font-size: 1rem;
        background-color: var(--darker-primary-color);
      }

      pre {
        color: rgba(0, 0, 0, 75%)
      }

      :host > h1 {
        padding-block: 2em;
        margin-block: 0;

        font-size: 2rem;
        letter-spacing: 0.05em;
        text-align: center;
      }

      .example-grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        place-content: center;
        gap: 1em;

        margin-bottom: 1em;
        padding-block: 1em;
      }

      .stylesheet {
        align-self: flex-start;
        margin: 0;
        padding: 2em;
        border-radius: 2em;
        background-color: var(--darker-primary-color);
      }

      .example {
        box-sizing: border-box;
        max-width: 35rem;
        background-color: color-mix(
          in srgb,
          white 40%,
          var(--accent-color) 100%
        );

        & p {
          text-align: justify;
        }
      }

      .example.em {
        border: solid 1em var(--accent-color);
        border-radius: 2em;
        padding-inline: 2em;
        
        font-size: var(--size, 1em);

        & h1 {
          font-size: 2em;
        }

        & h3 {
          font-size: 1em;
        }

        & p {
          font-size: 1em;
        }
      }

      .example.rem {
        display: none;

        border: solid 1rem var(--accent-color);
        border-radius: 2rem;
        padding-inline: 2rem;

        & h1 {
          font-size: 2rem;
        }

        & h2 {
          font-size: 1.5rem;
        }

        & h3 {
          font-size: 1rem;
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
      <ol>
        <li>
          Aumente o <code>font-size</code> do <code>.example.em</code> e veja o
          que acontece.
        </li>
      </ol>
      <div class="example-grid">
        <pre class="stylesheet">
.example.em {
  font-size: <number-input id="size"></number-input>em
}
        </pre
        >
        <article class="example em">
          <h1>em</h1>
          <h2>Todo font-size nesta coluna utilizam <em>em</em>.</h2>
          <h3>Unidade de medida relativa ao pai</h3>
          <p>
            Sou a unidade "em" do CSS. Meu tamanho se baseia no elemento pai,
            ajustando-se automaticamente se a fonte do pai mudar. Isso é útil
            para ajustes finos e proporcionais, mas cuidado com aninhamentos
            excessivos, pois posso amplificar mudanças inesperadas.
          </p>
        </article>
        <article class="example rem">
          <h1>rem</h1>
          <h2>Todo font-size nesta coluna utilizam <em>rem</em>.</h2>
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

/*

<!-- <p>Os laboratórios estarão distribuídos da seguinte maneira: ao lado esquerdo teremos um simples artigo utilizando todas as medidas com <code>em</code>, e do lado direito outro com todas as medidas em <code>rem</code>:</p> -->

<!-- 
<p>
  A unidade <code>em</code> sempre irá olhar para o
  <code>font-size</code> de seu elemento pai para se referênciar. Como
  geralmente em projetos novos não temos nenhum estilo definido, portanto
  nenhum <code>font-size</code>, o valor de <code>1em</code> irá equivaler
  a <code>16px</code> do elemento raíz (<code>&lt;html&gt;</code>), pois
  ele sim possui um <code>font-size</code> predefinido, e podemos dizer
  que <em>todos</em> os navegadores definem em <code>16px</code> por
  padrão.
</p> --> 

*/
