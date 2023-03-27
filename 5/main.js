
// // task 1 Confirms

// let answers = [confirm(), confirm(), confirm()];

// alert(answers);

// // task2  Prompts

// let arr = [prompt(), prompt(), prompt()];

// alert(arr);

// // task 3 Item acces

// let array = [1, 2, 3, 4, 5];
// let index = prompt("Enter index:");
// if (index === "length") {
//alert(array.length);
// } else {
// alert(array[index]);
// }

// // task 4 Item change

// let arr = [0,1,2,3,4,5,6];

// let index = prompt("Введіть індекс у масиві:", "");
// let value = prompt("Введіть значення для цього індексу:", "");

// arr[index] = value;

// alert(arr);

// // task 5 Multiply table 

// const arrTabl = [
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4, 5],
//     [0, 2, 4, 6, 8, 10],
//     [0, 3, 6, 9, 12, 15],
//     [0, 4, 8, 12, 16, 20]
//     [0, 5, 10, 15, 20, 25]
//   ];


// // task 6 Multiply table slice 
// const n = 10; 
// const table = new Array(n).fill(null).map(() => new Array(n).fill(null)); 


// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     table[i][j] = (i + 1) * (j + 1);
//   }
// }
// const newTable = table.map(row => row.filter(num => num !== 0));

// console.log(newTable);

// // task 7 IndexOf Word ---

// let word = prompt("Напишите пару слов");
// let needWord = prompt("Напишите какое слово вам нужно");
// const needWord2 = word.split();
// const index = needWord2.indexOf(needWord);
// if (index !== -1) {
//     alert(`слово ${needWord} есть в ${index + 1}-м словом у рядку ${word}`)
// } else {
//     alert(`нету слова ${needWord} в рядку ${word}`)
// }

// // task 8 Reverse


// const arr = [];
// for (let i = 0; i < 5; i++) {
//     const input = prompt("Введіть елемент:");
//     arr.push(input);
// }

// const reversedArr = [];
// while (arr.length > 0) {
//     const element = arr.pop();
//     reversedArr.push(element);
// }

// alert("Початковий масив:" + arr);
// alert("Масив в зворотньому напрямку:" + reversedArr);

// // task 9 Reverse 2


// const arr = [];
// for (let i = 0; i < 5; i++) {
//     const input = prompt("Введіть елемент:");
//     arr.shift(input);
// }

// const reversedArr = [];
// while (arr.length > 0) {
//     const element = arr.pop();
//     reversedArr.unshift(element);
// }

// alert("Початковий масив:", arr);
// alert("Масив в зворотньому напрямку:", reversedArr);

// // task 10 Copy
// var arrcopy= [... arrTabl];
// var copy= arrTabl.slice();


// //task 11 Deep copy
// let a = [...arrTabl]


// //task 12 Array Equals
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 === arr2);

// //task 14 Flat ---

// //task 15 Destruct
// let UserText = prompt("YourText");
// let [a , , , ,b, , , , c] = UserText;
// alert("1-ya " +a +" 5-ya " +b +" 9-ya " +c)

// //task 16 Destruct default
// const UserText = prompt("Your Text:");
// const [, second, , fourth, fifth] = UserText || '!!!!!';

// alert(`Друга літера: ${second}`);
// alert(`Четверта літера: ${fourth}`);
// alert(`П'ята літера: ${fifth}`);


// //task 17 Multiply table rest

// //task 18 For Alert
// let a = ["John", "Paul", "George", "Ringo"];
// for (const name of a) {
//     alert(name);
// }


// //task 18 For Select Option
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";

// for (const currency of currencies){
//   str += `<option>${currency}</option>`;
// }

// str += "</select>";
// document.write(str);


// //task 19 For Table Horizontal
// const names = ["John", "Paul", "George", "Ringo"];
// let   str = "<table>";

// for (const name of names){
//     str += "<tr>";
//     str += `<td>${name}</td>`;
//     str += "</tr>";
// }
// str+= "</table>"
// document.write(str) //document.write отобразит ваш HTML на странице

//task 20 For Table Vertical

// const names = ["John", "Paul", "George", "Ringo"]
// let   str = "<table>"
// for (const name of names){
//   str += "<tr><td>" + name + "</td></tr>"
// }
// str+= "</table>"
// document.write(str)//document.write відобразить ваш HTML на сторінці

//task 21 For Table Vertical
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<table>";

// for (let i = 0; i < 4; i++) {
//   str += "<tr>";

//   for (let j = 0; j < 3; j++) {
//     str += `<td>${currencies[i][j]}</td>`;
//   }

//   str += "</tr>";
// }

// str += "</table>";
// document.write(str);

// //task 22 For Table Letters
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<table>";

// for (let i = 0; i < 4; i++) {
//   str += "<tr>";

//   for (let j = 0; j < 3; j++) {
//     str += `<td>${currencies[i][j]}</td>`;
//   }

//   str += "</tr>";
// }

// str += "</table>";
// document.write(str);

// //task 23 For Multiply Table
// document.write("<table>");
// for (let i = 0; i <= 5; i++) {
//   document.write("<tr class='" + (i % 2 === 0 ? "even" : "odd") + "'>");
//   for (let j = 0; j <= 5; j++) {
//     document.write("<td>" + (i * j) + "</td>");
//   }
//   document.write("</tr>");
// }
// document.write("</table>");


// //task 24 Function Capitalize
// let userText = prompt("Pleas enter you text");
// const capsText = userText.map(x => x.toUpperCase());
// alert(capsText);

// //task 25 Filter Lexics
// const forbiddenWords = ['bad', 'word', 'not_allowed'];
// const inputString = prompt('Введіть рядок слів, розділених пробілами:');
// const wordsArray = inputString.split(' ');

// function checkWord(word) {
//     return !forbiddenWords.includes(word);
// }
// const filteredArray = wordsArray.filter(checkWord);
// const resultString = filteredArray.join(' ');
// alert(resultString);

// //task 26 Beep Lexics2
// function censorWords(inputStr, bannedWords) {
//     const words = inputStr.split(" ");
//     const censoredWords = words.map((word) => {
//       if (bannedWords.includes(word)) {
//         return "BEEP";
//       } else {
//         return word;
//       }
//     });
//     return censoredWords.join(" ");
//   }
//     const inputStr = prompt("Введіть рядок:");
//   const bannedWords = ["заборонене_слово_1", "заборонене_слово_2", "заборонене_слово_3"];
//   const result = censorWords(inputStr, bannedWords);
//   alert(result);

// //task 27 Reduce HTML
// const currencies = ["USD", "EUR", "GBP", "UAH"];

// const str = currencies.reduce((accumulator, currentValue) => {
//   return accumulator + `<option>${currentValue}</option>`;
// }, "<select>") + "</select>";

// alert(str);

// // task 28 For Brackets Hell Check
// const line = prompt();
// const bracketsStack = [];
// let i = 0;
// for (const character of line) {
//   if (character === "[" || character === "{" || character === "(") {
//     bracketsStack.push(character); 
//   } else if (character === "]" || character === "}" || character === ")") {
//     const lastBracket = bracketsStack.pop();
//     if (
//       (character === "]" && lastBracket !== "[") ||
//       (character === "}" && lastBracket !== "{") ||
//       (character === ")" && lastBracket !== "(")
//     ) {
//       console.log(`Помилка на позиції ${i}`);
//       break;
//     }
//   }
//   i++;
// }
// if (bracketsStack.length === 0) {
//   console.log("Ви ввели правильний рядок дужок!");
// }


  


