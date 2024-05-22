//var key = document.getElementById("btn-a");

var sounds = new Array();
 

for (var i = 0; i < 9; i++) {
	
	
	sounds[i] = new Audio("Audio" + i + ".wav");
 
}


// an event to get the key would pressed (e.keyCode) and use it in the next code

window.addEventListener('keydown',function(e) {
												  
	var key = e.keycode;
	
	
	//function include all the class changes
	
	function keyChange() {
	 
		document.getElementById("btn-" + key).classList.add("playing");
	
		function removeClass() {
	
		document.getElementById("btn-" + key).classList.remove("playing");
	
		}
		
		setTimeout(removeClass, 100);
	 
	 
	 
 		}
	
	
	switch(key) {
			
		case 65:
			
			keyChange();
	
		sounds[0].play();
		sounds[0].currentTime = 0;
			
			break;
			
		case 83: 
			
			keyChange();
		
		sounds[1].play();
		sounds[1].currentTime = 0;
			
			break;
			
		case 68:
			
			keyChange();
		
		sounds[2].play();
		sounds[2].currentTime = 0;
			
			break;
			
		case 70:
			
			keyChange();
		
		sounds[3].play();
		sounds[3].currentTime = 0;
			
			break;
			
		case 71:
			
			keyChange();
		
		sounds[4].play();
		sounds[4].currentTime = 0;
			
			break;
			
		case 72:
			
			keyChange();
		
		sounds[5].play();
		sounds[5].currentTime = 0;
			
			break;
			
		case 74:
			
			keyChange();
		
		sounds[6].play();
		sounds[6].currentTime = 0;
			
			break;
			
		case 75:
			
			keyChange();
		
		sounds[7].play();
		sounds[7].currentTime = 0;
			
			break;
			
		case 76:
			
			keyChange();
		
		sounds[8].play();
		sounds[8].currentTime = 0;
			
			break;
  }
  });
	