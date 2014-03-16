// JavaScript Document

// James McGorty

// Project: Expressions - Wacky


// Volume of a cylinder which is PIr2H



var wackyNames = ["Guiddy", "Reid", "Rod", "Stew", "Jennifer"];



var enteredNum = prompt("Please number to get your name", 2);



if (isNaN(enteredNum))
	
	enteredNum = 0;

else
	
	enteredNum = parseInt(enteredNum);




var index = enteredNum % wackyNames.length;



document.write("Your name is " + wackyNames[index]);



console.log("The name is " + wackyNames[index]);

