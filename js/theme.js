/// Button theme HTML 
class ThemeSwitcher extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                <button id="theme"
                    data-theme-picker 
                    aria-label=""
                    data-tooltip=""
                    data-placement="left"
                    class="bg-onsecondary text">
                    <div class="data-icon">light_mode</div>
                </button>
        `;
    }
}

customElements.define('theme-switcher', ThemeSwitcher);

// Get the currently selected theme
function calculateSettingAsThemeString(localStorageTheme, systemSettingDark) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

// Switch to the opposite theme 
// theme: light or dark
function toggleTheme(theme) {
    setTheme(theme === "dark" ? "light" : "dark");
}

// theme: light or dark
function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    currentThemeSetting = theme;
    updateButton(button, theme);
}

// button: HTMLElement
// cta: desired aria-label and tooltip
function updateButton(button, theme) {
    var cta = theme === "dark" ? "Change to light theme" : "Change to dark theme";
    button.setAttribute("aria-label", cta);
    button.setAttribute("data-tooltip", cta);
    button.children[0].innerHTML = currentThemeSetting + "_mode";
}

// Setup variables
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentThemeSetting = calculateSettingAsThemeString(localStorageTheme, systemSettingDark);
const button = document.querySelector("#theme");

// Set current theme on page load
if (currentThemeSetting == "light" || currentThemeSetting == "dark") {
    setTheme(currentThemeSetting)
}

// Theme switcher event listener
if (button !== null) {
    button.addEventListener("click", () => {
        toggleTheme(currentThemeSetting)
    });
}
