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
                <li><a class="contrast" href="/docs/getting-started/about">Docs</a></li>
                <hr/>
                <li>
                    <div class="flex-row__flex-start">
                        <img class="github-mark" src="/github-mark.svg" alt="github-mark" />
                        <a class="contrast" data-icon="open_in_new" data-placement="right"
                            href="https://github.com/JDRadatti/kiss-css">Github</a>
                    </div>
                </li>
            </ul>
        </nav>
        `;
    }
}

customElements.define('kiss-navbar', Navbar);
