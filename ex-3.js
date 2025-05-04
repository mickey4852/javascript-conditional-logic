//Exercise 3
// Ternary Operator
let lightBulbStatus = "On";

//Start coding here

lightBulbStatus === "On" 
? (console.log("Light bulb is On."))
: lightBulbStatus === "Off"
? (console.log("Light bulb is Off."))
: lightBulbStatus === "Broken"
? (console.log("Light bulb is Broken."))
: (console.log("Please choose the correct input (On/Off/Broken)"));
