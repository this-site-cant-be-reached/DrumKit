var cantidad = document.querySelectorAll(".drum").length;
var arrayBoolean = [];

var boolean = false;
for(var i=0;i<cantidad;i++){

      // arrayBoolean[i]=false;

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
   var buttonInnerHTML = this.innerHTML;
   
   changeLetterColor(buttonInnerHTML);

   makeSound(buttonInnerHTML);

   buttonAnimation(buttonInnerHTML);

//  if(arrayBoolean[i] == false){
//     arrayBoolean[i]=true;   
//     this.style.color = '#fff';
//  }else{
//     arrayBoolean[i]=false;   
//     this.style.color = '#DA0463';
//  }
   

});


}

//Function KeyPressed (Deprecated now is KeyDown xD)

document.addEventListener("keydown",function(event){

      changeLetterColor(event.key);
  
   makeSound(event.key);
   buttonAnimation(event.key);
});



function makeSound(key){
 
   switch(key){
    case "w" :      var audio = new Audio('sounds/tom-1.mp3');
                    audio.play();
    break;
    case "a" :      var audio = new Audio('sounds/tom-2.mp3');
                    audio.play();
    break;
    case "s" :      var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
    break;
    case "d" :      var audio = new Audio('sounds/tom-4.mp3');
                    audio.play();
    break;
    case "j" :      var audio = new Audio('sounds/snare.mp3');
                    audio.play();
    break;
    case "k" :       var audio = new Audio('sounds/crash.mp3');
                     audio.play();
    break;
    case "l" :       var audio = new Audio('sounds/kick-bass.mp3');
                     audio.play();
    break;
    default: alert("No esta seteada la funcion para esta letra desconocida xD");
  }


  }


function changeLetterColor(passedKey){
   if(document.querySelector("."+passedKey,".drum") != null){
  var letter = document.querySelector("."+passedKey,".drum");
  var color =letter.style.color;
  console.log(color);
   if(color != "white"){
    letter.style.color="white";
    
    }else{
   letter.style.color="#DA0463";
   
    }
   }
   
}


  function buttonAnimation(currentKey){
     if(document.querySelector("."+currentKey) != null){
      var activeButton = document.querySelector("."+currentKey);
      activeButton.classList.add("pressed"); 

      setTimeout(function(){
             activeButton.classList.remove("pressed");

      }, 100);
      
   }
  }