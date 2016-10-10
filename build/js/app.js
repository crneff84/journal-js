(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var entryInput = $('#entry').val();
    var newEntry = new Entry();
    var output = newEntry.numberOfWords(entryInput);
    $('#results').append("<p> Number of Words: " + output + "</p>");
  });

  $('#journal').submit(function(event) {
    event.preventDefault();
    var stringInput = $('#entry').val();
    var entryInput = stringInput.toLowerCase();
    var newEntry = new Entry();
    var output = newEntry.letterCount(entryInput);
    $('#results').append("<p> Number of Vowels: " + output[0] + "</p>");
    $('#results').append("<p> Number of Consonants: " + output[1] + "</p>");
  });

  $('#journal').submit(function(event) {
    event.preventDefault();
    var entryInput = $('#entry').val();
    var newEntry = new Entry();
    var output = newEntry.getTeaser(entryInput);
    $('#results').append("<p> Teaser: " + output + "</p>");
  });
});

},{"./../js/entry.js":2}],2:[function(require,module,exports){
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

Entry.prototype.getTeaser = function(entry) {
  var wordCount = entry.split(" ");
  var teaser = [];
  for (var i = 0; i < 8; i++) {
    teaser.push(wordCount[i]);
  }
  var result = teaser.join(" ");
  return result;
};

exports.entryModule = Entry;

},{}]},{},[1]);
