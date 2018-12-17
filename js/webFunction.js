//const CharacterChanger = require('./app.js');

var lightBox = document.getElementById('lightBox');
function openLightBox() {
  lightBox.style.display = "flex";
};

window.onclick = (event)=>{
  if (event.target == lightBox){
      lightBox.style.display = "none";
  }
};

function closeLightBox(e) {
	lightBox.style.display = "none";
	ps = e;
  };
  
