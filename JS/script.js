document.addEventListener('DOMContentLoaded', function() {
    // Array to hold audio files
    const sounds = [
        new Audio('Sounds/0.wav'),
        new Audio('Sounds/1.wav'),
        new Audio('Sounds/2.wav'),
        new Audio('Sounds/3.wav'),
        new Audio('Sounds/4.wav'),
        new Audio('Sounds/5.wav'),
        new Audio('Sounds/6.wav'),
        new Audio('Sounds/7.wav'),
        new Audio('Sounds/8.mp3')
    ];

    // Key codes for corresponding sounds
    const keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76];

    // Function to play sound and add 'playing' class
    function playSound(e) {
        const key = e.keyCode;
        const index = keyCodes.indexOf(key);
        if (index === -1) return;  // If key is not mapped, do nothing

        const audio = sounds[index];
        audio.currentTime = 0;  // Rewind to the start
        audio.play();

        const box = document.getElementById(`btn-${key}`);
        box.classList.add('playing');
        setTimeout(() => {
            box.classList.remove('playing');
        }, 100);
    }

    // Event listener for keydown
    window.addEventListener('keydown', playSound);

    // Event listener for click
    document.querySelectorAll('.box').forEach((box, index) => {
        box.addEventListener('click', () => {
            const audio = sounds[index];
            audio.currentTime = 0;  // Rewind to the start
            audio.play();

            box.classList.add('playing');
            setTimeout(() => {
                box.classList.remove('playing');
            }, 100);
        });
    });
});
