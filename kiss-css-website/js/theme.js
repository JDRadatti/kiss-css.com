function calculateSettingAsThemeString(localStorageTheme, systemSettingDark) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString(localStorageTheme, systemSettingDark);
var newCta = "Change to light theme";

/// Button theme HTML 
class ThemeSwitcher extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                <button id="theme"
                    data-theme-picker 
                    data-theme="${currentThemeSetting}" 
                    aria-label="${newCta}"
                    data-tooltip="${newCta}"
                    data-placement="left"
                    class="bg-onsecondary">
                    <div class="data-icon">light_mode</div>
                </button>
        `;
    }
}

customElements.define('theme-switcher', ThemeSwitcher);



// Theme switcher event listener
const button = document.querySelector("#theme");
if (button !== null) {
    button.addEventListener("click", () => {
        const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

        // update the button text
        newCta = newTheme === "dark" ? "Change to light theme" : "Change to dark theme";

        // use an aria-label if you are omitting text on the button
        // and using sun/moon icons, for example
        button.setAttribute("aria-label", newCta);
        button.setAttribute("data-tooltip", newCta);
        button.children[0].innerHTML = currentThemeSetting + "_mode";

        // update theme attribute on HTML to switch theme in CSS
        document.documentElement.setAttribute("data-theme", newTheme);

        // update in local storage
        localStorage.setItem("theme", newTheme);

        // update the currentThemeSetting in memory
        currentThemeSetting = newTheme;
    });
}
