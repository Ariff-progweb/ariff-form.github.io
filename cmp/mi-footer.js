class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; 2020 Razo Becerra Leonardo Ariff`;
  }
}
customElements.define("mi-footer", MiFooter);
