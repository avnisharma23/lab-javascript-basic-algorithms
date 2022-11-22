//console.log("I'm ready!");

//Iteration 1: Names and Input
let hacker1 = "Ibrahim"; 
//console.log(`The Driver's name is ${hacker1}`);

let hacker2 = "Smith";
//console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let  hacker1Length = hacker1.length;
let  hacker2Length = hacker2.length;
if(hacker1Length > hacker2Length)
{
  // console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
}
else if(hacker2Length > hacker1Length)
{
    //console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
}
else 
{
   //console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}

// Iteration 3: Loops
let driverName ="";
for(let i =0;i < hacker1.length;i++)
{
    driverName = driverName + hacker1[i] + " ";
}
    //console.log(driverName.toUpperCase());


let navigatorName = "";
for (var i = hacker2.length - 1; i >= 0; i--)
{
    navigatorName += hacker2[i];
}
//console.log(navigatorName);

if(hacker1.toLowerCase() < hacker2.toLowerCase())
{
   // console.log("The driver's name goes first");
}
else if(hacker1.toLowerCase() > hacker2.toLowerCase())
{
    //console.log("Yo, the navigator goes first definitely.");
}
else
{
    //console.log("What?! You both have the same name?");
}

// Bonus 1
let paraLoremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis sit amet erat ut pretium. Cras metus neque, commodo vitae nisi eu, iaculis blandit quam. Sed euismod semper risus. Pellentesque non lectus eu nunc semper vulputate in sit amet mi. Nunc enim magna, tempor vitae bibendum vitae, bibendum sed mauris. Mauris id dolor tincidunt, lobortis sapien eu, ullamcorper ipsum. Duis facilisis cursus vestibulum. Nunc porta egestas massa, in scelerisque tellus bibendum id. Maecenas scelerisque velit vitae tellus varius, sed maximus diam lacinia. Maecenas eu tellus luctus, lobortis ligula et, interdum eros. Maecenas cursus, lorem a gravida vulputate, nunc nunc volutpat velit, nec hendrerit tellus mauris ac ex. Curabitur sit amet metus sapien. Nulla dictum tempor odio quis laoreet.In euismod purus vel nisi congue volutpat. Nulla egestas, ex at vehicula sagittis, enim libero tincidunt arcu, eget tempus metus dui eget tortor. Aliquam erat volutpat. Curabitur placerat nisl quis commodo vehicula. Praesent fermentum sollicitudin ipsum, id congue nisl. Pellentesque magna velit, ullamcorper ac maximus vitae, dictum molestie felis. Donec dictum risus sed nisi pharetra, quis condimentum est dignissim. In non volutpat tellus, a vulputate est. Morbi ac facilisis diam. Suspendisse nec diam vitae dui dignissim consectetur sed nec ante. Pellentesque vulputate tortor quis nulla scelerisque mollis. Morbi eu est sem.Maecenas mauris odio, facilisis ac enim sed, malesuada cursus dui. Proin condimentum ipsum lacus, vel suscipit nunc imperdiet ac. Suspendisse feugiat commodo condimentum. Nulla lectus nunc, auctor quis aliquam quis, elementum ut orci. Praesent eu risus justo. Ut blandit sapien consectetur turpis placerat posuere. Aliquam id quam in diam semper pulvinar. Ut et leo ligula. Nullam viverra lorem non justo suscipit, quis ornare libero eleifend.";
let countWords = paraLoremipsum.split(" ").length;
//console.log(`The ${countWords} words in the string.`); // number of words in the 3 paragraph

let para = paraLoremipsum.split(" ");
let word = "et";
let count = 0;
for (let i = 0 ; i < para.length ; i++)
{
    if(word == para[i])
        count++;
}
//console.log(`The ${count} times the Latin word et appears.`);

//Bonus 2

let phraseToCheck = "put it up";
let re = /[^A-Za-z0-9]/g;        // removes all punctuations,symbols,spaces
phraseToCheck = phraseToCheck.toLowerCase().replace(re, ''); // everthing in lowercase 
if (phraseToCheck == phraseToCheck.split('').reverse().join('')) 
{
    console.log(phraseToCheck + ' is palindrome.');
}
else 
{
    console.log(phraseToCheck + ' is not palindrome.');
}