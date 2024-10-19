const header = document.querySelectorAll('h1');
const headers = document.querySelectorAll('h2');

var headersListElements = '';
for (let i = 0; i < headers.length; i++) {
    headersListElements += '<li><a href="#' + headers[i].id + '">' + headers[i].innerHTML + '</a></li>';
}

class TOC extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <details open>
                    <summary class="hide-arrows" disabled>Table of Contents</summary>
                    <ul>` + headersListElements + ` </ul>
                </details>
            </nav>
        `;
    }
}

customElements.define('kiss-toc', TOC);
