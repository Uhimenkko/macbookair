//task 1
// let Num = prompt("your number");
// const Num2 = parseInt(Num);
// if (isNaN(Num2)) {
//     alert("Please enter number")
// } else {
//     if (Num2 % 2 === 0) {
//         alert(Num2 + " This num parniy")
//     } else {
//         alert(Num2 + " not a parniy")
//     }
//task 2
// let text = prompt("Введіть текст:").toLowerCase();
// let badWords = ["хуй", "пизда", "негр", "дура", "член", "чёрт"];
// let foundBadWord = false;
// for (let i = 0; i < badWords.length; i++) {
//     if (text.indexOf(badWords[i]) !== -1) {
//         foundBadWord = true;
//         break;
//     }
// }
// if (foundBadWord) {
//     alert("Текст містить некоректне слово.");
// } else {
//     alert("Текст не містить некоректних слів.");
// }

//task 3
// let UserAsk = confirm("продолжнаем?") && "kaif" || "Ne kaif";
// alert(UserAsk);

//task 4
// let UserAsk = confirm("Волосатый мужик?");
// if (UserAsk) {
//     alert("Мужик")
// } else {
//     alert("Жинка")
// }

//task 5 
// let NumSize = prompt("Какой размер брюк подходит вам в Италии?");
// NumSize = parseInt(NumSize);
// if (NumSize <= 38) {
//     alert("You Size USA  XS");
// }
// else if (NumSize >= 39 && NumSize <= 40) {
//     alert("You Size USA  S");
// }
// else if (NumSize >= 41 && NumSize <= 42) {
//     alert("You Size USA  M");
// }
// else if (NumSize >= 43 && NumSize <= 44) {
//     alert("You Size USA  L");
// }
// else if (NumSize >= 45 && NumSize <= 46) {
//     alert("You Size USA  XL");
// }
// else if (NumSize >= 47 && NumSize <= 48) {
//     alert("You Size USA  XXL");
// }
// else {
//     alert("You Size USA  XXXL");
// }

//task 6
// let sex = confirm("You are man?") ? "man" : "woman";
// alert(sex);

//task 7
// let UserAge = prompt("How many old?") && "Thank so match" || "WARNING EROR#228";
// alert(UserAge);

//task 8
// let shoping = confirm("Шопиться?") && "Полетели" || "Ты бяка!!!";
// alert(shoping);

//task 9
// let shoping = confirm("Shoping?");
// if (shoping) {
//     alert("Supper")
// } else {
//     alert("Ti byaka!!")
// }

//task 10 Default or
// let UserName = prompt("What is your name?");
// let UserSurname = prompt("What is your Surname?") || "Ivanov";
// let UserSurname2 = prompt("What is your Otchestvo?");
// alert("Hello " + UserName + UserSurname + UserSurname2 + " how are you?")

//task 11 default if 
// let UserName = prompt("What is your Name?");
// let UserSurname = prompt("What is your Surname?");
// let UserSurname2 = prompt("What is your Otchestvo?");
// let User;
// if (!UserName){
//     UserName = "Ivan"
// }
// if(!UserSurname){
//     UserSurname = "Ivanov"
// }
// if(!UserSurname2){
//     UserSurname2 = "Ivanovish"
// }
// alert(UserName +" " + UserSurname +" "+ UserSurname2);

//task 12
//     const login = prompt('Введите логин:');
// if (login === 'admin') {
//     const password = prompt('Введите пароль:');
//     if (password === 'qwerty') {
//         alert('Добро пожаловать, admin!');
//     } else {
//         alert('Неверный пароль!');
//     }
// } else {
//     alert('Неверный логин!');
// }

//task 13 Besthenge
// let currency = prompt("Введіть назву валюти (наприклад, USD або EUR\,GBP\,PLN)");
// let buyOrSell = confirm("Ви хочете продати цю валюту? Натисніть 'Ok', якщо так, або 'Отмена', якщо ви хочете купити.");
// let rate;
// if (currency.toUpperCase() === "USD") {
//   rate = buyOrSell ? 40 : 39;
// } else if (currency.toUpperCase() === "EUR") {
//   rate = buyOrSell ? 43 : 42;
// } else if (currency.toUpperCase() === "GBP"){
//     rate = buyOrSell ? 44 : 45;
// } else if(currency.toUpperCase()=== "PLN"){
//     rate = buyOrSell ? 7 : 8
// }else{
//   alert("Ми не підтримуємо цю валюту.");
// }
// let amount = parseFloat(prompt("Введіть суму, яку ви хочете обміняти:"));
// if (!isNaN(amount)) {
//   let result = buyOrSell ? amount * rate : amount / rate;
//   alert(`Ви отримаєте ${result.toFixed(2)} ${buyOrSell ? "UAH" : currency}.`);
// } else {
//   alert("Введена невірна сума.");
// }
       
//task 14
// const userChoice = prompt("Виберіть: камінь, ножиці або папір.");
// const computerChoice = Math.random();
// let computerChoiceText;
// if (computerChoice < 0.34) {
//   computerChoiceText = "камінь";
// } else if (computerChoice <= 0.67) {
//   computerChoiceText = "ножиці";
// } else {
//   computerChoiceText = "папір";
// }
// alert("Ви вибрали " + userChoice + ", а комп'ютер вибрав " + computerChoiceText + ".");
// let result;
// if (userChoice === computerChoiceText) {
//   result = "Нічия!";
// } else if (userChoice === "камінь") {
//   if (computerChoiceText === "ножиці") {
//     result = "Ви перемогли!";
//   } else {
//     result = "Комп'ютер переміг!";
//   }
// } else if (userChoice === "ножиці") {
//   if (computerChoiceText === "папір") {
//     result = "Ви перемогли!";
//   } else {
//     result = "Комп'ютер переміг!";
//   }
// } else if (userChoice === "папір") {
//   if (computerChoiceText === "камінь") {
//     result = "Ви перемогли!";
//   } else {
//     result = "Комп'ютер переміг!";
//   }
// }
// alert(result);