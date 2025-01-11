function greeting(name) {

    console.log("Hello, " + (name || "Unknown") + "!"); 
  
  }



function processUserInput(callback) {

    callback(); // Yahaan koi argument pass nahi ho raha 

}



// Process without passing any argument to callback 

processUserInput(greeting);  // Output: Hello, Unknown! 



// Process with passing an argument 

processUserInput(function () {

    greeting("Prajjal");

}); 