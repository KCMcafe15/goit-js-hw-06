    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0')}`;
    }

    function createBoxes(amount) {
        const boxesContainer = document.getElementById('boxes');
        let boxSize = 30;

        for (let i = 0; i < amount; i++) {
            const box = document.createElement('div');
            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;
            box.style.backgroundColor = getRandomHexColor();

            boxesContainer.appendChild(box);
            boxSize += 10;
        }
    }

    function destroyBoxes() {
        const boxesContainer = document.getElementById('boxes');
        boxesContainer.innerHTML = '';
    }

    // Get elements and add event listeners
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const inputNumber = document.querySelector('input[type="number"]');

    createButton.addEventListener('click', function () {
        const amount = parseInt(inputNumber.value, 10);
        createBoxes(amount);
    });

    destroyButton.addEventListener('click', destroyBoxes);