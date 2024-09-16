import { defineCustomElement, injectElementStyle } from "./counter.ts";

defineCustomElement();

// Ensure document is loaded before trying to attach event listeners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("apply-styles")?.addEventListener("click", injectElementStyle);
});
