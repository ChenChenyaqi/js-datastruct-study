// let str1 = "abcd123gedabcde";
// let str2 = "123geda";
// console.log(str1.includes(str2));

let a = 'a';
let b = 'b';

console.log(a.charCodeAt(), 'A'.charCodeAt());  // 97 65

let str = '吉a';
console.log(str.length);
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.codePointAt(0));
console.log(str.codePointAt(1));

let str2 = '𠮷a';
console.log(str2.length);
console.log(str2.charCodeAt(0));
console.log(str2.charCodeAt(1));
console.log(str2.charCodeAt(2));
console.log(str2.codePointAt(0));
console.log(str2.codePointAt(1));
console.log(str2.codePointAt(2));