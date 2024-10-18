var header = document.querySelector('hgroup h1');
if (header == null) {
    header = document.querySelector('main h1');
}

const menuData = [
    {
        summary: 'Building Blocks',
        links: [
            "/docs/base/button",
            "/docs/base/color",
            "/docs/base/icon",
            "/docs/base/layout",
            "/docs/base/link",
            "/docs/base/spacing",
            "/docs/base/state-layer",
            "/docs/base/typography",
        ],
    },
    {
        summary: 'Components',
        links: [
            "/docs/components/accordian",
            "/docs/components/card",
            "/docs/components/dropdown",
            "/docs/components/navigation",
            "/docs/components/tooltip",
        ],
    },

    {
        summary: 'Forms',
        links: [
            "/docs/forms/checkbox",
            "/docs/forms/radio",
            "/docs/forms/input",
            "/docs/forms/textarea",
            "/docs/forms/range",
            "/docs/forms/select",
            "/docs/forms/switch",
        ],
    },
];


/* Dynamically create the nav menu*/
var navElements = ""
for (const element of menuData) {

    var listElements = ""
    var current = ""
    for (const link of element.links) {
        let label = link.substring(link.lastIndexOf("/") + 1);
        label = label.charAt(0).toUpperCase() + label.slice(1);

        if (header.innerHTML == label) {
            listElements += "<li><a href=" + link + " aria-current='page'>" + label + "</a></li>";
            current=" open"
        } else {
            listElements += "<li><a href=" + link + ">" + label + "</a></li>";
        }

    }

    navElements += `
        <details ` + current + `>
            <summary>` + element.summary + `</summary>
            <ul>` + listElements + `
            </ul>
        </details>
`
}

class DocsMenu extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '<nav>' + navElements + '</nav>';
    }
}

customElements.define('kiss-docs-menu', DocsMenu);
