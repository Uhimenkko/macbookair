///task 1
// const cat = {
//   weight : `30` ,
//   height : `25` ,
//   color : `white` ,
//   brand : `serval`
// }

///task 2 

// const persona = {}

// persona .Name = prompt('What is your name ? ') ;
// persona .surName = prompt ('What is your surname ?');
// persona .employer = prompt ("whom is you work ?");
// persona ['salary'] = prompt ('How much is your salary ?');

///task 3 
// const persona = {
//     name: 'Oleksii',
//     surname:"Pedenko"
// }

// const Personaj ={... persona}
// Personaj .newobj = prompt("input new obj");

// console.log (persona, Personaj);

/// task 4

// var body ={

//   children : [{
//     tagName : "div" ,
//       children :[{
//           tagName : "span" ,
//             children : [br ,"Enter a data please:" ] ,

//       }],

//       children : [{
//           tagName : "input" ,
//           attrs : {
//             type : "text",
//           },

//           attrs : {
//             id : "name",
//           },

//           children : [{
//             tagName : "input" ,
//             attrs : {
//               type : "text",
//             },

//             attrs : {
//               id : "surname",
//             },
//       }]
//     }],
//       tagName : "div" , 
//       children :[{
//           tagName : "button" , 
//           attrs :{
//               id : "ok",
//           } ,
//           children :[{
//               tagName : "ok",
//           }],
//           tagName : "button",
//           attrs:{
//               id : "cancel",
//           },
//           children :[{
//               tagName : "Cancel" , 
//           }]
//       }]


//   }],
// }

//task 5 
// const userInput = prompt("input id ");
// var body ={

//   children : [{
//     tagName : "div" ,
//     parent : "body" ,
//       children :[{
//           tagName : "span" ,
//           parent : "div" ,
//             children : [br ,"Enter a data please:" ] ,

//       }],

//       children : [{
//           tagName : "input" ,
//           parent : "div" ,
//           attrs : {
//             type : "text",
//           },

//           attrs : {
//             id : "name",
//           },

//           children : [{
//             tagName : "input" ,
//             parent : "div" ,
//             attrs : {
//               type : "text",
//             },

//             attrs : {
//               id : "surname",
//             },
//       }]
//     }],
//       tagName : "div" , 
//       parent : "body" ,
//       children :[{
//           tagName : "button" , 
//           parent : "div" ,
//           attrs :{
//               id : "ok",
//           } ,
//           children :[{
//               tagName : "ok",
//               parent : "button" ,
//           }],
//           tagName : "button",
//           parent : "div" ,
//           attrs:{
//               id : "cancel",
//           },
//           children :[{
//               tagName : "Cancel" , 
//               parent : "button" ,
//           }]
//       }]


//   }],
// }

/// task 6

// var body ={

//   children : [{
//     tagName : "div" ,
//     parent : "body" ,
//       children :[{
//           tagName : "span" ,
//           parent : "div" ,
//             children : [br ,"Enter a data please:" ] ,

//       }],

//       children : [{
//           tagName : "input" ,
//           parent : "div" ,
//           attrs : {
//             type : "text",
//           },

//           attrs : {
//             id : "name",
//           },

//           children : [{
//             tagName : "input" ,
//             parent : "div" ,
//             attrs : {
//               type : "text",
//             },

//             attrs : {
//               id : "surname",
//             },
//       }]
//     }],
//       tagName : "div" , 
//       parent : "body" ,
//       children :[{
//           tagName : "button" , 
//           parent : "div" ,
//           attrs :{
//               id : userInput || "ok",
//           } ,
//           children :[{
//               tagName : "ok",
//               parent : "button" ,
//           }],
//           tagName : "button",
//           parent : "div" ,
//           attrs:{
//               id : "cancel",
//           },
//           children :[{
//               tagName : "Cancel" , 
//               parent : "button" ,
//           }]
//       }]


//   }],
// }

/// task 7 

// let body = {

//   children : [{
//     tagName : "div" ,
//     parent : "body" ,
//       children :[{
//           tagName : "span" ,
//           parent : "div" ,
//             children : [`/br ,"Enter a data please:" `] ,

//       }],

//       children : [{
//           tagName : "input" ,
//           parent : "div" ,
//           attrs : {
//             type : "text",
//           },

//           attrs : {
//             id : "name",
//           },

//           children : [{
//             tagName : "input" ,
//             parent : "div" ,
//             attrs : {
//               type : "text",
//             },

//             attrs : {
//               id : "surname",
//             },
//       }]
//     }],
//       tagName : "div" , 
//       parent : "body" ,
//       children :[{
//           tagName : "button" , 
//           parent : "div" ,
//           attrs :{
//               id : "ok",
//           } ,
//           children :[{
//               tagName : "ok",
//               parent : "button" ,
//           }],
//           tagName : "button",
//           parent : "div" ,
//           attrs:{
//               id : "cancel",
//           },
//           children :[{
//               tagName : "Cancel" , 
//               parent : "button" ,
//           }]
//       }]


//   }],


  

// }
// const {
//   children: [
//     { children: [span] },
//     { children: [btnOk, btnCancel] }
//   ]
// }= htmlTree ;

// console.log(span.textContent);
// console.log(btnCancel.textContent);
// const [, secondInput] = document.querySelectorAll('input');
// console.log(secondInput.id);

///task 8 
// let arr = [1,2,3,4,5, "a", "b", "c"];


// let [even1, odd1, even2, odd2, odd3, ...letters] = arr.filter(item => typeof item !== 'number' || !isNaN(item));

// console.log(even1, even2); // 1, 3
// console.log(odd1, odd2, odd3); // 2, 4, 5
// console.log(letters); // ["a", "b", "c"]

///task 9 

// let arr = [1, "abc"];
// arr.push("a", "b", "c");

// let [number, s1, s2, s3] = arr;

// console.log(number); // 1
// console.log(s1); // "a"
// console.log(s2); // "b"
// console.log(s3); // "c"

/// task 10

// let obj = {name: 'Ivan',
// surname: 'Petrov',
// children: [{name: 'Maria'}, {name: 'Nikolay'}]}

///const { children: [{ name: name1 }, { name: name2 }] } = obj;

// console.log(name1); // 'Maria'
// console.log(name2); // 'Nikolay'

/// task 11
// let arr = [1,2,3,4, 5,6,7,10]

// const [a, b, ...rest] = arr;
// const length = arr.length;

// console.log(a); // 1
// console.log(b); // 2
// console.log(length); // 8

//task 12 

// const cat = {
//     weight : `30` ,
//     height : `25` ,
//     color : `white` ,
//     brand : `serval`
//   }

// const cat = {
//   weight: `30`,
//   height: `25`,
//   color: `white`,
//   brand: `serval`
// }

// const { brand, ...newCat } = cat;

// console.log(cat); // { weight: '30', height: '25', color: 'white', brand: 'serval' }
// console.log(newCat); // { weight: '30', height: '25', color: 'white' }

//task 13

// function getExchangeRates(baseCurrency) {
//   const url = `https://open.er-api.com/v6/latest/${baseCurrency}`;
//   return fetch(url).then(res => res.json());
// }

// function convertCurrency(inputCurrency, outputCurrency, inputAmount, rates) {
//   const baseRate = rates[inputCurrency];
//   const outputRate = rates[outputCurrency];
//   const outputAmount = inputAmount * outputRate / baseRate;
//   return outputAmount;
// }

// function calculateExchange() {
//   const inputCurrency = prompt("Введіть вхідну валюту").toUpperCase();
//   const outputCurrency = prompt("Введіть валюту, в яку відбувається конвертація").toUpperCase();
//   const inputAmount = parseFloat(prompt("Введіть суму в вхідній валюті"));
//   if (isNaN(inputAmount)) {
//     alert("Неправильний формат вхідної суми");
//     return;
//   }
//   getExchangeRates(inputCurrency).then(rates => {
//     const outputAmount = convertCurrency(inputCurrency, outputCurrency, inputAmount, rates.rates);
//     alert(`${inputAmount} ${inputCurrency} = ${outputAmount} ${outputCurrency}`);
//   }).catch(error => {
//     alert("Не вдалося отримати курси валют з сервера");
//     console.error(error);
//   });
// }

// document.getElementById("calculate-btn").addEventListener("click", calculateExchange);

/// task 14 
// HTML in 

///task 15 


/// task 16 
// const car = {
//   "Name": "chevrolet chevelle malibu",
//   "Cylinders": 8,
//   "Displacement": 307,
//   "Horsepower": 130,
//   "Weight_in_lbs": 3504,
//   "Origin": "USA",
//   "in_production": false
// };

// const form = document.createElement('form');

// for (const key in car) {
//   const label = document.createElement('label');
//   const input = document.createElement('input');
//   label.textContent = key + ': ';
//   input.type = typeof car[key] === 'boolean' ? 'checkbox' : typeof car[key];
//   input.name = key.toLowerCase();
//   input.value = car[key];
//   input.checked = car[key];
//   label.appendChild(input);
//   form.appendChild(label);
// }

// document.body.appendChild(form);

/// task 17 

// const persons = [
//   {
//   name: 'Марія',
//   fatherName: 'Іванівна',
//   surname: 'Іванова',
//   sex: 'female'
//   },
//   {
//   name: 'Миколай',
//   fatherName: 'Іванович',
//   surname: 'Іванов',
//   age: 15
//   },
//   {
//   name: 'Петро',
//   fatherName: 'Іванович',
//   surname: 'Іванов',
//   married: true
//   },
//   ];
  
 
//   const columns = [];
//   persons.forEach((person) => {
//   Object.keys(person).forEach((key) => {
//   if (!columns.includes(key)) {
//   columns.push(key);
//   }
//   });
//   });
  
  
//   const table = document.createElement('table');
//   const tr = document.createElement('tr');
//   columns.forEach((column) => {
//   const th = document.createElement('th');
//   th.textContent = column;
//   tr.appendChild(th);
//   });
//   table.appendChild(tr);
  
 
//   persons.forEach((person) => {
//   const tr = document.createElement('tr');
//   columns.forEach((column) => {
//   const td = document.createElement('td');
//   td.textContent = person[column] || '';
//   tr.appendChild(td);
//   });
//   table.appendChild(tr);
//   });
  
//   document.body.appendChild(table);
  

  
//   const cars = [
//   {
//   "Name": "chevrolet chevelle malibu",
//   "Cylinders": 8,
//   "Displacement": 307,
//   "Horsepower": 130,
//   "Weight_in_lbs": 3504,
//   "Origin": "USA"
//   },
//   {
//   "Name": "buick skylark 320",
//   "Miles_per_Gallon": 15,
//   "Cylinders": 8,
//   "Displacement": 350,
//   "Horsepower": 165,
//   "Weight_in_lbs": 3693,
//   "Acceleration": 11.5,
//   "Year": "1970-01-01",
//   },
//   {
//   "Miles_per_Gallon": 18,
//   "Cylinders": 8,
//   "Displacement": 318,
//   "Horsepower": 150,
//   "Weight_in_lbs": 3436,
//   "Year": "1970-01-01",
//   "Origin": "USA"
//   },
//   {
//   "Name": "amc rebel sst",
//   "Miles_per_Gallon": 16,
//   "Cylinders": 8,
//   "Displacement": 304,
//   "Horsepower": 150,
//   "Year": "1970-01-01",
//   "Origin": "USA"
//   },
//   ];
  
  
//   const columns = [];
//   cars.forEach((car) => {
//   Object.keys(car).forEach((key) => {
//   if (!columns.includes(key)) {
//   columns.push(key);
//   }
//   });
//   });
  
 
//   const table = document.createElement('table');
//   const tr = document.createElement('tr');
//   columns.forEach((column) => {
//   const th = document.createElement('th');
//   th.textContent = column;
//   tr.appendChild(th);
//   });
//   table.appendChild(tr);
  
 
//   cars.forEach((car) => {
//   const tr } 
