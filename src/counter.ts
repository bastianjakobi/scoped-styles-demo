export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

class MyCustomElement extends HTMLElement {
  connectedCallback() {
    const button = document.createElement("button");
    button.innerHTML = "count is 0";
    this.appendChild(button);
    setupCounter(button);
  }
}

export const defineCustomElement = () =>
  customElements.define("my-custom-element", MyCustomElement);

export const injectElementStyle = () => {
  const styleTag = document.getElementById("app-styles");
  if (styleTag) {
    styleTag.innerHTML += `
      @layer my-custom-element {
        my-custom-element {
          button {
            background-color: #28a745;
            border: 4px dashed #333;
          }
        }
      }
    `;
  }
};
