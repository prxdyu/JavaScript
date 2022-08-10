// finding the n of buttons
var a=document.querySelectorAll(".drum").length;

// targetting the buttons
var buttons=document.querySelectorAll(".drum");

// adding the eventlistener to every buttons using for loop
for(var i=0;i<a;i++)
    {
        buttons[i].addEventListener("click",EventHandler)
    }

function EventHandler()
    {
      var obj = new Audio("sounds/snare.mp3");
      obj.play();

    }
