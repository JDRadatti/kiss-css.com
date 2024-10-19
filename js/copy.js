async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

function updateTooltipOnCopy(button) {
    console.log(button);
    try {
        button.setAttribute("data-tooltip", "Copied!");
        setTimeout(() => {
            button.setAttribute("data-tooltip", "Copy");
        }, 3000);
    } catch (err) {
        console.error('Failed to set tooltip: ', err);
    }
}

const copyElements = document.querySelectorAll('[role="copy"]');
for (var i = 0, len = copyElements.length; i < len; i++) {
    const copyButton = copyElements[i].querySelector("button");
    const textToCopy = copyElements[i].querySelector("code").textContent;
    copyButton.addEventListener('click', () => {
        copyText(textToCopy);
        updateTooltipOnCopy(copyButton);
    });
}
