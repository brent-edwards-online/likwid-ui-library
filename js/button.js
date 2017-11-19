class LikwidButton extends HTMLButtonElement {
  constructor(){
    super();
  }
}

window.customElements.define("likwid-button", LikwidButton, { extends: "button" });