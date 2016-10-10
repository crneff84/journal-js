function Entry() {

}

Entry.prototype.numberOfWords = function(entry) {
  var numberOfWords = entry.split(" ");
  return numberOfWords.length;
};

Entry.prototype.letterCount = function(entry) {
  var vowelCount = 0;
  var consonantCount = 0;
  var splitIntoWords = entry.split(" ");
  console.log(splitIntoWords);
  for (var i = 0; i < splitIntoWords.length; i++) {
    var charArray = splitIntoWords[i].split("");
    console.log(charArray);
    for (var j = 0; j < charArray.length; j++) {
      if (charArray[j] === "a" || charArray[j] === "e" || charArray[j] === "i" || charArray[j] === "o" || charArray[j] === "u") {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
  return vowelCount;
};

exports.entryModule = Entry;
