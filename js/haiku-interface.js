import { Haiku } from './../js/haiku.js';

$(function(){
$(".formOne").submit(function(event){
  event.preventDefault();

  var userInput = $("#input").val().toUpperCase();
  let match;
  const lineCheck = userInput.match(/\r|\n/g);
  if (lineCheck === null)
  {
    match = 0;
  } else {
    match = lineCheck.length;
  }

  if(match === 2){

    var haikuChecker = new Haiku();
    var output=haikuChecker.checkHaiku(userInput);
    $("#output").text("It is a Haiku!!!");
    }
  else {
    alert("Not a Haiku");
  };

});
});
