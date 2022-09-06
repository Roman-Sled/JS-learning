"use strict";

/*

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  if (ADMIN_PASSWORD === password) { 
  return ("Welcome!") ;}
  return ("Access denied, wrong password!");

 }


checkPassword('jqueismyjam');
console.log(checkPassword);




function checkStorage(available, ordered) {
  // Change code below this line
  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
    return "The order is accepted, our manager will contact you";
  

  
  // Change code above this line
}


 let massage = "false  ffff adaw";  
 let cutMas = massage.split(" ");
 console.log(massage);
 console.log (cutMas.length);




 function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
const wordNumber = message.split
const = wordNumber.length;



  // Change code above this line
}
*/

/*const aa = ['dsd', 'adw', 'ertt']
let string;
  // Change code below this line
string=aa.join(' ');
console.log (string);

const ann = ['Ten', 'secrets', 'of', 'JavaScript'];
//console.log (ann.toLowerCase(),join('-'));
console.log (ann.join('-').toLowerCase());




function slugify(title) {
  // Change code below this line
  console.log (title.split(' ').join('-').toLowerCase())
 return title.split(' ').join('-').toLowerCase()


  // Change code above this line
}

slugify ("Ten secrets of JavaScript");
//let a= 'dagh gdha yu';
//console.log (a.split(''));



const oldClients = ['1231234', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients) ; // Change this line
console.log (allClients);



let fgf = "hdhjddjhd"
let ads=fgf.length
console.log (typeof oldClients[0])





function makeArray(firstArray, secondArray, maxLength) {
// Change code below this line
  const doubleArray =firstArray.concat (secondArray);
  if (doubleArray.length<maxLength); {
  console.log(doubleArray.length , typeof maxLength); 
  }
  
}

makeArray (["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);  




function makeArray(firstArray, secondArray, makeArray) {
  const doubleArray = firstArray.concat(secondArray);
  if (doubleArray.length<=makeArray) {
    return doubleArray;
  }
  return doubleArray.slice(0, makeArray);
}

makeArray (["Mango", "Poly", "Houston"], ["Ajax"], 4); 



function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let i = 0 ; i < order.length; i +=1) {
  total += Number(order[i])
  
}
  // Change code above this line
  return total;
}


calculateTotalPrice([12, 85, 37, 4])




function longWord(string) {
  let toArray= string.split(' ');
  let mostLongWord=toArray[0];
 
 console.log(mostLongWord);
  for (const length of toArray) {
    if (length > mostLongWord.length){
      mostLongWord=length
    }
  }
  return mostLongWord;
}

//console.log (longWord('o ttt cccc ppppp dd'))
longWord('o ttt cccc ppppp dd')  

//const a= ['adad','dadaaa',4];
//console.log(a.length)  */
/*
function createArrayOfNumbers(min, max) {
  const numbers = ['a'];
  Array.from(numbers);
  console.log(numbers)
  // Change code below this line
  let difference =max-min;
for (let i=min ; i> max ; i+=1 ) {
  if (i !== difference) {
    numbers=numbers.push(min+i);

  }
}



  // Change code above this line
  return numbers;
}


createArrayOfNumbers(1, 3)

*/

/*
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (let i=min; i<=max ; i +=1) {
  numbers.push(i);
  console.log(numbers);
}


  // Change code above this line
  return numbers;
}

createArrayOfNumbers(1, 10);

*/
/*
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (const value of order) {
    total += value;
  }
  // Change code above this line
  return total;
}
calculateTotalPrice([12, 85, 37, 4])


const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}


function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];
  for (const hightsArray of numbers)
  if (hightsArray>value) {
    filteredNumbers.push(hightsArray);
  }
  return filteredNumbers;
  // Change code above this line
}

filterArray([12, 24, 8, 41, 76], 20)



function includes(array, value) {
  // Change code below this line
  for ( let i=0 ; i<array.length; i +=1) {
    if (array[i]===value) {
      break; return true;
      
      }
      return false;
    }
  }
  // Change code above this line


  includes([1, 2, 3, 4, 5], 3) //повертає true

  */


  function calculateTotal(number) {
    // Change code below this line
    let sumNumb = 0;
    for (let i=0; i<=number; i +=1) {
      sumNumb +=i ;
    }
    return sumNumb
     // Change code above this line
   }

   calculateTotal(7)