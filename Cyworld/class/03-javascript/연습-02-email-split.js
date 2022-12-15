const email = "condecamp@gmail.com";
// undefined
email.includes("@");
// true
email.split("@");
// (2) ['condecamp', 'gmail.com']
email.split("@")[0];
// 'condecamp'
email.split("@")[1];
// 'gmail.com'
let userMail = email.split("@")[0];
// undefined
userMail
// 'condecamp'
let compant = email.split("@")[1];
// undefined
compant
// 'gmail.com'
let maskingMail = [];
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail.push(userMail[4])
// 5
maskingMail
// (5) ['c', 'o', 'n', 'd', 'e']
maskingMail.push("*");
// 6
maskingMail.push("*");
// 7
maskingMail.push("*");
// 8
maskingMail.push("*");
// 9
maskingMail
// (9) ['c', 'o', 'n', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("");
// 'conde****'
maskingMail.join("") + "@" + compant;
// 'conde****@gmail.com'
let result1 = maskingMail.join("") + "@" + compant;

result1
// 'conde****@gmail.com'