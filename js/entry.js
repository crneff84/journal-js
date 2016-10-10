function Entry() {

}

Entry.prototype.numberOfWords = function(entry) {
  var numberOfWords = entry.split(" ");
  return numberOfWords.length;
};
