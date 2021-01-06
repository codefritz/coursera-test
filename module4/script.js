(function(window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var idx in names) {
    var name = names[idx];
    var firstLetter = name.charAt(0).toLocaleLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})(window);
