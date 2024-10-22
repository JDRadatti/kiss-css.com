const header = document.querySelectorAll('h1');
const headers = Array.from(document.querySelectorAll('h2'));

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
                    <ul id="nav-ul">` + headersListElements + ` </ul>
                </details>
            </nav>
        `;
    }
}

customElements.define('rad-toc', TOC);


///// Create dynamic TOC //// 
const listElements = document.querySelectorAll('#nav-ul li');
const idToTOC = {}
for (let i = 0; i < listElements.length; i++) {
    idToTOC[headers[i].id] = listElements[i];
}

// headers [<h2 id=""></h2>]
console.log(headers);
// listELements(in TOC) [<li><a href="#id"></a></a>]
// entry [IntersectionObserverEntry]
// entry.target [headers[x]]

// Set up variables for TOC 
var previousHeader = undefined;
var headerIndex = 0; // ID of current heading in headers array

window.addEventListener(
    "load",
    () => {
        createObservers();
    },
    false,
);

function createObservers() {
    let observer;
    observer = new IntersectionObserver(handleIntersect);
    for (let i = 0; i < headers.length; i++) {
        observer.observe(headers[i]);
    }
}



function handleIntersect(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target != previousHeader) {

            // Unset area-current from previous header
            if (previousHeader !== undefined) {
                idToTOC[previousHeader.id].children[0].ariaCurrent = "false";
            }

            // Set aria-current to true for current header and keep track of it.
            previousHeader = entry.target;
            console.log(previousHeader);
            idToTOC[entry.target.id].children[0].ariaCurrent = "true";
            console.log(idToTOC[entry.target.id]);
            headerIndex = headers.indexOf(previousHeader);
        }

        if (entry.target === previousHeader && !entry.isIntersecting && entry.boundingClientRect.top > 0) {
            // Current header is too low in the viewport, so we need to find the next header up
            // and set it as the current header.
            if (headerIndex - 1 >= 0) {
                headerIndex -= 1;

                // Remove aria-current from current header
                if (previousHeader !== undefined) {
                    idToTOC[previousHeader.id].children[0].ariaCurrent = "false";
                }

                // Add aria-current to new header
                previousHeader = headers[headerIndex];
                idToTOC[previousHeader.id].children[0].ariaCurrent = "true";
            }

        }

    });
}
