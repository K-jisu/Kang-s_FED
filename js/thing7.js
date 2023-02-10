/* 
 - 나머지 매개변수
 - 전달 받은 모든 수를 더해야함
*/

function add(...num) {
    let result = 0;
    num.forEach(num => result += num);
    console.log(result);
}

function add1(...num) {
    let result1 = num.reduce((prev, cur) => prev + cur);
    console.log(result1);
}

add(1, 2, 3, 4);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

add1(1, 2, 3, 4);
add1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("-------------------------------------");

/* 
 - 나머지 매개변수
 - user 객체를 만들어 주는 생성자 함수를 만들거임
*/

function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
};

const user1 = new User("Mike", 30, "HTML", "CSS");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1);
console.log(user2);
console.log(user3);
console.log("-------------------------------------");

/* 
 - 전개구문
 - arr1을 [4, 5, 6, 1, 2, 3]으로
*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr1 = [...arr2, ...arr1];

console.log(arr1);
console.log("-------------------------------------");


let user = {name : "Mike"};
let info = {age : 30};
let fe = ["JS", "React"];
let lang = ["Eng", "Kor"];

// user = Object.assign({}, user, info, {
//     skills : [],
// });

// fe.forEach((item) =>{
//     user.skills.push(item);
// })
// lang.forEach((item) =>{
//     user.skills.push(item);
// })

user = {
    ...user, 
    ...info, 
    skills: [...fe, ...lang],
};


console.log(user);
