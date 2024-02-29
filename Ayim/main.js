var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const audio = new Audio();
audio.src ="https://www.fesliyanstudios.com/play-mp3/5493";



function ontext(){
    this.innerHTML="Main attractions on the map";
}
function outtext(){
    this.innerHTML="Map of Kazakhstan with major cities and some sights";
}
document.onkeypress = function(event){
    console.log(event.key);
}
$(document).ready(function(){
  $(".butt").click(function(){
    $("p").toggle();
  });
});

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
