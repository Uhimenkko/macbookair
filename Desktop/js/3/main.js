// task 1

// let nameUser = prompt("what is your name ?");
// alert ("Greeteng my dear " + nameUser);

//task 2

// let UserStr =prompt ("Input your string here ");
// let Zamena = UserStr.replace(',' , ' blin, ');
// alert ("thit is your answer " + Zamena);

// task 3
// let strUser = prompt("input your word here");
// let modifiedString = strUser.charAt(0).toUpperCase() + strUser.slice(1).toLowerCase();
// alert (modifiedString);

//task 4

// let sentence = prompt("input your text ");
// let wordCount = countWords(sentence);
// function countWords(sentence) {
//   sentence = sentence.trim();
//   let words = sentence.split(" ");
//   return words.length;
// }
// alert (`Количество слов: ${wordCount}`);

//task 5
// let firstName = (prompt("what is your name ?").trim());
// let secondName = (prompt("what is your surname?").trim());
// let thirdName = (prompt("what is your otchestvo?").trim());

// thirdName = thirdName.charAt(0).toUpperCase() + thirdName.slice(1).toLowerCase();
// firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
// secondName = secondName.charAt(0).toUpperCase() + secondName.slice(1).toLowerCase();

// let FullName =` ${firstName}  ${secondName}  ${thirdName}`;
// alert(`hellow  ${FullName}`);

//task 6
// let str = "Було жарко. Василь пив пиво вприкуску з креветками";
// let words = str.split(' ');
// for (let i = 0; i < words.length; i++) {
//   if (words[i] === 'пиво') {
//     words[i] = 'чай';
//   }
// }
// let newStr = words.join(' ');
// alert("" + newStr);

//task 7
// let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
// let tagStart = str.indexOf("<");
// let tagEnd = str.indexOf(">");
// let tag = str.slice(tagStart, tagEnd + 1);
// let newStr = str.slice(0, tagStart) + str.slice(tagEnd + 1);
// console.log(tag);
// console.log(newStr);

//task 8
// let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
// let tagStart = str.indexOf("<");
// let tagEnd = str.indexOf(">");
// let tag = str.slice(tagStart, tagEnd + 1).toUpperCase();
// let newStr = str.slice(0, tagStart) + tag + str.slice(tagEnd + 1);

// console.log(newStr);
//task 9
// let  inputString = prompt('Введіть рядок, дозволяється використовувати \n для нового рядка:');
// let multiLineString = inputString.split('\n').join('\n');
// console.log(multiLineString);

//task 10 YouTube :C
// let userLink = prompt('Введите ссылку видео').trim();
// const regExYoutube = /http(?:s?)://(?:www.)?youtu(?:be.com/watch?v=|.be/)([\w-_])(&(amp;)?‌ [\w?‌ =])?/
// let result = userLink.match(regExYoutube)[1];
// document.write(<iframe width="560" height="315" src="https://www.youtube.com/embed/${result}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>);

// document.write(<iframe width="330" height="200%")
//     document.write(src="https://www.youtube.com/embed/$%7BvideoId%7D%22)
//     document.write( frameborder="0" allowfullscreen> )
//     document.write(</iframe>);
