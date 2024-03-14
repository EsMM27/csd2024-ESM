$("document").ready(function(){
    
console.log("Script is executing!");
var names = [];

// Pushing names onto the array
names.push("Alice");
names.push("Bob");
names.push("Charlie");
names.pop("Charlie");
names.pop("Bob");

var HTMLoutput = ""; // Initialize HTML output variable

// Loop through the names array and construct HTML output
for (var i = 0; i < names.length; i++) {
    HTMLoutput+=`${names[i]} <br>`; // Add each name followed by a line break
}

// Set HTML content of the myDiv element
$("#myDiv").html(HTMLoutput);

})