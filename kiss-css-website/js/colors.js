let colors = [
    "bg-primary",
    "bg-onprimary",
    "bg-primarycontainer",
    "bg-onprimarycontainer",
    "bg-secondary",
    "bg-onsecondary",
    "bg-secondarycontainer",
    "bg-onsecondarycontainer",
    "bg-tertiary",
    "bg-ontertiary",
    "bg-tertiarycontainer",
    "bg-ontertiarycontainer",
    "bg-error",
    "bg-onerror",
    "bg-errorcontainer",
    "bg-onerrorcontainer",
    "bg-background",
    "bg-onbackground",
    "bg-surface",
    "bg-onsurface",
    "bg-surfacevariant",
    "bg-onsurfacevariant",
    "bg-outline",
    "bg-outlinevariant",
    "bg-inversesurface",
    "bg-inverseonsurface",
    "bg-inverseprimary",
    "bg-success",
    "bg-successcontainer",
    "bg-onsuccess",
    "bg-onsuccesscontainer",
    "bg-warning",
    "bg-warningcontainer",
    "bg-onwarning",
    "bg-onwarningcontainer",
    "bg-info",
    "bg-infocontainer",
    "bg-oninfo",
    "bg-oninfocontainer",
    "bg-primaryfixed",
    "bg-primaryfixeddim",
    "bg-onprimaryfixed",
    "bg-onprimaryfixedvariant",
    "bg-secondaryfixed",
    "bg-secondaryfixeddim",
    "bg-onsecondaryfixed",
    "bg-onsecondaryfixedvariant",
    "bg-tertiaryfixed",
    "bg-tertiaryfixeddim",
    "bg-ontertiaryfixed",
    "bg-ontertiaryfixedvariant",
    "bg-surfacedim",
    "bg-surfacebright",
    "bg-surfacecontainerlowest",
    "bg-surfacecontainerlow",
    "bg-surfacecontainer",
    "bg-surfacecontainerhigh",
    "bg-surfacecontainerhighest",
    "bg-shadow",
    "bg-scrim",
]
var innerColors = ''
for (let i in colors) {
    innerColors += `
<article class=\"${colors[i]}\ state-layer m-bottom__md"> 
    ${colors[i]}
</article>
`
}
innerColors += "</div>"

document.querySelector('#colors').innerHTML = innerColors

/* Pick Theme */
const select = document.querySelector('#theme-select');
select.addEventListener("change", (event) => {
    const selectedValue = event.target.value.toLowerCase();
    const classes = document.body.classList.value.split(" ");
    classes.pop();
    document.body.className = classes.join(" ")
    document.body.classList.add(selectedValue);
});

