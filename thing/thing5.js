// for Each

let arr = ["Mike", "Tom", "Jane"];

arr.forEach((name, index) => {
    console.log(`${index + 1}.${name}`);
})
console.log("-----------------------------------------------------------");

// ---------------------------------------------------------

//find / findIndex
// findIndex 는 찾은 index값 반환
let arr1 = [ 1, 2, 3, 4, 5];

const result = arr1.findIndex((item) => {
    return item % 2 === 0;
});

console.log(result);
console.log("-----------------------------------------------------------");

// ---------------------------------------------------------

// find는 찾은 값 하나만 반환

let userList = [
    { name : "Mike", age : 30},
    { name : "Jane", age : 27},
    { name : "Tom", age : 15},
];

const result1 = userList.find((user) => {
    if(user.age < 19){
        return true;
    }
    return false;
});

console.log(result1);
console.log("-----------------------------------------------------------");
// ---------------------------------------------------------------------------
// filter 만족하는 모든 요소를 배열로 반환
let arr2 = [ 1, 2, 3, 4, 5];

const result2 = arr1.filter((item) => {
    return item % 2 === 0;
});

console.log(result2);
console.log("-----------------------------------------------------------");

// ---------------------------------------------------------------------------

// arr.map(fn) 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환

let userList1 = [
    { name : "Mike", age : 30},
    { name : "Jane", age : 27},
    { name : "Tom", age : 15},
];

let newUSerList = userList1.map((user, index) => {
    return Object.assign({}, user, {
        id : index +1,
        isAdult : user.age > 19,
    });
});

console.log(newUSerList);
console.log("-----------------------------------------------------------");

// ---------------------------------------------------------------------------

// join, split

let arr3 = ["안녕", "나는", "철수야"];

let result3 = arr3.join(" ");
console.log(result3);
console.log("-----------------------------------------------------------");

let str = "Hello, My name, is Mike.";
const result4 = str.split(",");
console.log(result4);
console.log("-----------------------------------------------------------");

// ---------------------------------------------------------------------------

//Array.isArray()

let user1 = {
    name : "Mike", 
    age : 30,
};

let userList2 = ["Mike", "Tom", "Jane"];

console.log(typeof user1);
console.log(typeof userList2);

console.log(Array.isArray(user1));
console.log(Array.isArray(userList2));