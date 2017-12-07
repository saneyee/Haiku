import { Haiku } from './../js/haiku.js';

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let lineOne = $("#lineOne").val();
    let lineTwo = $("#lineTwo").val();
    let lineThree = $("#lineThree").val();

  let userInput = new Haiku(lineOne, lineTwo, lineThree);
  let resultLine = userInput.CheckLines();
  let resultSyllables = userInput.CheckSyllables();

  $("#output").text("Congrats! This is a Haiku.");

  if (resultLine == true && resultSyllables == true ) {
  } else {
    $("#output").text("I am sorry. This is not a proper Haiku. Better luck next time :)");
  }
  });
});
