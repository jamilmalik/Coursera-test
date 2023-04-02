/*This code uses a for loop to iterate over the names array, gets the first letter of each name, 
and then uses the helloSpeaker and byeSpeaker libraries to determine whether to say "Hello" or "Goodbye" 
to each name. If the first letter of the name is "J" or "j", it uses the byeSpeaker library to say "Goodbye"
to the name. Otherwise, it uses the helloSpeaker library to say "Hello" to the name. */


// Wrap the entire code inside an IIFE to avoid polluting the global scope
(function () {

  // Define the speakers and their respective speak methods
  var helloSpeaker = {
    speak: function (name) {
      console.log("Hello " + name);
    }
  };

  var byeSpeaker = {
    speak: function (name) {
      console.log("Goodbye " + name);
    }
  };

  // Define the array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the names array and say either 'Hello' or "Good Bye"
  for (var i = 0; i < names.length; i++) {

    // Get the first letter of the current name and convert it to lowercase
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Determine which speaker to use based on the first letter of the name
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();








