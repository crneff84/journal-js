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
  for (var i = 0; i < splitIntoWords.length; i++) {
    var charArray = splitIntoWords[i].split("");
    for (var j = 0; j < charArray.length; j++) {
      if (charArray[j] === "a" || charArray[j] === "e" || charArray[j] === "i" || charArray[j] === "o" || charArray[j] === "u") {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
  var charCount = [vowelCount, consonantCount];
  console.log(charCount);
  return charCount;
};

exports.entryModule = Entry;
