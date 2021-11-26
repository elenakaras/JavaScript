// 1. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, 
// состоящую из указанного количества символов.

// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//     return str.slice;
// };
    
// console.log(str.slice(0, 5));




// 2. Вставить тире между словами строки
// Напишите функцию insert_dash(str), 
// которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. 
// При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";

// function insert_dash(str) {
//     return str.replace(" ", "-");
// }


// console.log(insert_dash(str));


// 3. Сделать первую букву строки прописной

// Напишите функцию, которая принимает строку в качестве аргумента 
// и преобразует регистр первого символа строки из нижнего регистра в верхний.

// var str = "string not starting with capital";  
 
// function cursive_letter(str) {
//     return str[0].toUpperCase() + str.slice(1);
// };

// console.log(str[0].toUpperCase() + str.slice(1));








// 6. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, 
// очищенную от всех не буквенно-цифровых символов.


// var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  
 
// function remove_char(str) {
//    return str.replace(/[^\w\s!?]/g,'');
// };

// console.log(remove_char(str));






// 8. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// let str1 = "Hello WorlD";
// let str2 = "HeLLo WoRlD";

// function comparison(str1, str2) {
//    return str1.toLowerCase()===str2.toLowerCase();
// };
//  console.log(comparison(str1, str2));



// 9. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), 
// которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// let str1 = "Hello, world";
// let str2 = "world";

// function insensitive_search(str1, str2) {
//     return str1.indexOf(str2, [0]);
// };

// console.log(str1.indexOf("world",[0]));










// 12. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.

// let str = "Каждый охотник желает знать";

// function repeatStr(str, n) { 
//     return str.repeat(n);
// };

// console.log(str.repeat(7))





















// 16. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str.
//  По умолчанию подстрока вставляется в начало строки.

// let str = "Астрономия — Наука о небесных телах"
// let substr = "это "
// let pos = 11

// function insert(str, substr, pos) {
//     return str.slice(0,13)+substr.slice(0,4)+str.slice(-23);
    
// };

// console.log(insert(str, substr, pos));




// 17. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, 
// если она длиннее указанного количества символов n. 
// Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// let str = "Я с нетерпением жду наступления субботы";
// let n = 27;
// let symb = "..."

// function limitStr(str, n, symb=0) {
//     return str.substr(0, n - symb.length) + symb;
// };

// console.log(limitStr(str, n, symb));


// 18. Поделить строку на фрагменты

// let str = "Каждый охотник желает знать"
// let n = 4; 

// function cutString(str, n) {
//     return str.split(" ", n);
// };

// console.log (cutString(str, n));











// 20. Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// var str = "    Max is a good      boy     "; 

// function strip(str) {
//     return str.trim();
    
// };

// console.log(strip(str));



// 21. Удалить лишние слова из строки  ??????????????????????????????????????????????????????????????????????
// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// var str = "Сила тяжести приложена к центру масс тела"; 
// var n = 5
// function cutString(str, n) {
//     return str.replace("к", "центру", "масс")
// };
// console.log(cutString(str, n));
