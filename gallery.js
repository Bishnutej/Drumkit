// gallery.js

function upDate(previewPic) {
    
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    
    
    imageDiv.innerHTML = previewPic.alt;
  }
  
  function unDo() {
   
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')"; // Assuming the original URL is empty
    
   
    imageDiv.innerHTML = "preview here.";
  }
  