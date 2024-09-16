export class BaseComponent extends HTMLElement {
  private appId: string;
  private primaryColor: string;
  constructor() {
    super();
    this.appId = this.getAttribute('app-id') ?? 'no-app-id'
    this.primaryColor = this.getAttribute('color')?? 'black';
  }
  connectedCallback() {
    const button = document.createElement("button");
    button.classList.add('btn', 'btn-primary');
    button.innerHTML = `${this.appId} Button`;
    this.createElementStyle();
    this.appendChild(button);
    button.addEventListener("click", () => {
      alert(`Hi from ${this.appId}`);
    });
  }

  disconnectedCallback() {
    this.removeElementStyle();
  }

  defineCustomElement() {
    customElements.define(this.appId, BaseComponent);
  }

  createElementStyle() {
    const styleTag = document.createElement("style");
    styleTag.id = this.appId + "-styles";
    document.head.appendChild(styleTag);
    const style = `@layer ${this.appId} {
            [app-id="${this.appId}"] {
                button {
                    background-color: ${this.primaryColor};
                    border: none;
                    --bs-btn-hover-color: black
                }
            }
        }`;
    styleTag.innerHTML = style;
  }

  removeElementStyle() {
    const style = document.getElementById(this.appId + "-styles");
    if (style) {
      style.remove();
    }
  }
}
