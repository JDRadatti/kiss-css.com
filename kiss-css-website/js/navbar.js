/// Button theme HTML 
class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul>
                <li><a href="/" class="contrast title2__bold" style="text-decoration: none;" data-tooltip="Home">
                    KISS CSS
                </a>
            </ul>
            <ul>
                <li><a class="contrast" href="/docs/components/dropdown">Docs</a>
            </ul>
        </nav>
        `;
    }
}

customElements.define('kiss-navbar', Navbar);
