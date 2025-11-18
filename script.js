function upDate(previewPic) {
    const display = document.getElementById('image');
    display.innerHTML = previewPic.alt;
    display.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    const display = document.getElementById('image');
    display.style.backgroundImage = "none";
    display.innerHTML = "Hover over an image below to display here.";
}

// Add tabindex attributes on page load
function addTabIndex() {
    console.log("Adding tabindex attributes for keyboard focus");
    const previews = document.querySelectorAll('.preview');
    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute('tabindex', '0');
    }
}

