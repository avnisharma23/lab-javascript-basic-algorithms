console.log("I'm ready!");

//Iteration 1: Names and Input
let hacker1 = "Ibrahim"; 
console.log(`The Driver's name is ${hacker1}`);

let hacker2 = "Smith";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let  hacker1Length = hacker1.length;
let  hacker2Length = hacker2.length;
if(hacker1Length > hacker2Length)
{
   console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
}
else if(hacker2Length > hacker1Length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
}
else 
{
   console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}

// Iteration 3: Loops
let driverName ="";
for(let i =0;i < hacker1.length;i++)
{
    driverName = driverName + hacker1[i] + " ";
}
    console.log(driverName.toUpperCase());


let navigatorName = "";
for (var i = hacker2.length - 1; i >= 0; i--)
{
    navigatorName += hacker2[i];
}
console.log(navigatorName);

if(hacker1.toLowerCase() < hacker2.toLowerCase())
{
    console.log("The driver's name goes first");
}
else if(hacker1.toLowerCase() > hacker2.toLowerCase())
{
console.log("Yo, the navigator goes first definitely.");
}
else
{
    console.log("What?! You both have the same name?");
}
