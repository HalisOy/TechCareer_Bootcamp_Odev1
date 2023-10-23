// ÖDEV // kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase());
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith())
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

let userData = prompt("Lütfen bir yazı yazınız.");
//S-1
let userLength = userData.length;
//S-2
let userTrimLength = userData.trim().length;
//S-3
let userLowerCase = userData.toLowerCase();
//S-4
let userUpperCase = userData.toUpperCase();
//S-5
let userReplaceData = userData.replace(
  userData.substring(0, userData.indexOf(" ")),
  "javascript"
);
//S-6
let userStartWith = userData.startsWith("javascript");
//S-7
let userEndWith = userData.endsWith("javascript");
//S-8
let userFirstLetter = userData.charAt(0);
//S-9
let userConcat = userData.concat(" -ben js öğreniyorum");
//S-10
let userSubstring = userData.substring(0, 4);

console.log(userLength);
console.log(userTrimLength);
console.log(userLowerCase);
console.log(userUpperCase);
console.log(userReplaceData);
console.log(userStartWith);
console.log(userEndWith);
console.log(userFirstLetter);
console.log(userConcat);
console.log(userSubstring);
