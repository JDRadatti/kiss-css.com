class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <hr/>
        Released under the GNU General Public License v3.0
        <hr/>
        `;
    }
}

customElements.define('kiss-footer', Footer);
