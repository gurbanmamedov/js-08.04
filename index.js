// 1 - Напишите рекурсивную функцию для вычисления суммы цифр заданного числа.

// function sumOfDigits(number) {
//   if (number < 10) {
//     return number;
//   } else {
//     return (number % 10) + sumOfDigits(Math.floor(number / 10));
//   }
// }

// const number = 12345;
// const sum = sumOfDigits(number);
// console.log(`Сумма цифр числа ${number} равна ${sum}`);

// 2 - Подсчет количества цифр в числе:
// Напишите рекурсивную функцию для подсчета количества цифр в заданном числе.

// function countDigits(number) {
//   if (number < 10) {
//     return 1;
//   } else {
//     return 1 + countDigits(Math.floor(number / 10));
//   }
// }

// const number = 12345;
// const count = countDigits(number);
// console.log(`Количество цифр в числе ${number} равно ${count}`);

// 3 - Проверка палиндрома:
// Напишите рекурсивную функцию, которая проверяет, является ли заданная строка палиндромом (читается одинаково как слева направо, так и справа налево).

// function isPalindrome(str) {
//   str = str.toLowerCase();

//   let formattedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       formattedStr += str[i];
//     }
//   }

//   return formattedStr === formattedStr.split("").reverse().join("");
// }

// const someString = "A man a plan a canal Panama";
// console.log(
//   `"${someString}" является палиндромом: ${isPalindrome(someString)}`
// );
