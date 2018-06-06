var letters = {
};

function charPosition(string) {

  var string = string.split(" ").join('').toLowerCase();


  for (var i = 0; i < string.length; i++) {
        if (!letters.hasOwnProperty(string[i])) {
        letters[string[i]] = [i];
      } else {
        letters[string[i]].push(i);
      }
     }
return letters
}

console.log(charPosition("lighthouse in the house"));