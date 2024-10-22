/// Button theme HTML 
class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul>
                <li><a href="/" class="contrast title2__bold" style="text-decoration: none;" data-tooltip="Home" data-placement="right">
                    RAD CSS
                </a>
            </ul>
            <ul>
                <li><a class="contrast" href="/docs/getting-started/setup">Docs</a></li>
                <hr/>
                <li>
                    <div class="flex-row__flex-start">
                        <img class="github-mark" src="/github-mark.svg" alt="github-mark" />
                        <a class="contrast" data-icon="open_in_new" data-placement="right"
                            href="https://github.com/JDRadatti/rad-css">Github</a>
                    </div>
                </li>
                <li><theme-switcher></theme-switcher></li>
            </ul>
        </nav>
        `;
    }
}

customElements.define('rad-navbar', Navbar);
