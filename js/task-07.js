const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');


fontSizeControl.addEventListener('input', function () {
    textElement.style.fontSize = `${fontSizeControl.value}px`;
});