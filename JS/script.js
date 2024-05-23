// Mapping of keys to sound filenames
const keySoundMap = {
	65: '0.wav',// A
	83: '1.wav',// S
	68: '2.wav',// D
	70: '3.wav',// F
	71: '4.wav',// G
	72: '5.wav',// H
	74: '6.wav',// J
	75: '7.wav',// K
	76: '8.wav',// L
  };
  
  // Function to load sounds into an array
  function loadSounds(basePath, keySoundMap) {
	const sounds = {};
	for (const [key, soundFile] of Object.entries(keySoundMap)) {
	  sounds[key] = new Audio(`${basePath}/${soundFile}`);
	}
	return sounds;
  }
  
  // Load sounds from the 'sounds' folder
  const sounds = loadSounds('Sounds', keySoundMap);
  
  // Function to play sound and handle visual feedback
  function playSound(keyCode) {
	const sound = Sounds[keyCode];
	if (sound) {
	  sound.currentTime = 0; // Rewind to start
	  sound.play();
  
	  // Add visual feedback
	  const button = document.getElementById(`btn-${keyCode}`);
	  if (button) {
		button.classList.add('playing');
		setTimeout(() => button.classList.remove('playing'), 100);
	  }
	}
  }
  
  // Event listener for keydown
  window.addEventListener('keydown', function(e) {
	playSound(e.keyCode);
  });
  // Event listeners for mouse clicks
document.querySelectorAll('.box').forEach(box => {
	box.addEventListener('click', () => {
	  const keyCode = box.getAttribute('data-key');
	  playSound(Number(keyCode));
	});
  });
  
