// var Haiku = require('./../js/haiku.js').haikuModule;

$(function(){
$(".formOne").submit(function(event){
  event.preventDefault();

  var userInput = $("#input").val();
  var match = /\r|\n/.exec(userInput);
  if(match > 2){
    alert("Not a Haiku");
  }
  else {
    // var romanNumerical = new Roman();
    // var output = romanNumerical.convertToRoman(userInput);
    // $("#output").text(output);
    alert("Its a Haiku");
  };

});
});
