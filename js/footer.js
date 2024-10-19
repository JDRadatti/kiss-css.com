class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div style="opacity: 80%;">
            <hr/>
            Released under the GNU General Public License v3.0
            <hr/>
        <div>
        `;
    }
}

customElements.define('kiss-footer', Footer);
