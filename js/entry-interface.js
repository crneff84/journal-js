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
});
