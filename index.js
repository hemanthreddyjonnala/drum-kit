
// mouse click drum
for (var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click",handleFunctionMouse);
}

function handleFunctionMouse() {
 var buttonInnerHtml = this.innerHTML;
 makeSound(buttonInnerHtml);
 buttonAnimation(buttonInnerHtml);
}


//key board click drums

document.addEventListener("keydown", handleFunctionKey);

function handleFunctionKey() {
  makeSound(event.key);
  buttonAnimation(event.key);
}


// playing drums either keyboard or mouse click
function makeSound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 's':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case 'd':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'j':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'k':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case 'l':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default: console.log(key);

}
}


function buttonAnimation(key) {
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function() { activeButton.classList.remove("pressed"); }, 100);
}
