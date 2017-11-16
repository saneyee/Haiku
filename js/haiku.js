export class Haiku {
  constructor() {
}

//method
var splitArray=user.split(" ");

  var vowelArray = ["a","e","i","o","u"];
let letters = [];
let pushWord =[];

splitArray.forEach(function(word) {

    var splitWord = word.split("");

  	splitWord.forEach(function(splitted){
        pushWord.push(splitted);
    })

    });

    pushWord.forEach(function(letter){

      for(i=0; i < vowelArray.length; i++) {
        if(letter == vowelArray[i]){

          letters.push(letter);
        }
      }
     })
     alert(letters);


}
