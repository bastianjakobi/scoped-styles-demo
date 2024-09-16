import { BaseComponent } from "./base-component.ts";

customElements.define("app-component", BaseComponent);

document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.getElementById("app-container");

  document.getElementById("show-a")?.addEventListener("click", () => {
    appContainer!.innerHTML = `
    <h3 class="mt-0 text-muted">App A</h3>
    <app-component app-id="app-a" color="red"></app-component>
    `;
  });

  document.getElementById("show-b")?.addEventListener("click", () => {
    appContainer!.innerHTML = `
    <h3 class="mt-0 text-muted">App B</h3>
    <app-component app-id="app-b" color="green"></app-component>
    `;
  });

});
