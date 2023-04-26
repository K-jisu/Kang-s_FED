let n = "name";
let a = "age";

const user = {
    [n] : "Mike",
    [a] : 30,
};

console.log(user);

// ---------------------------------------------------

function makeObj (key, val){
    return {
        [key] : val,
    };
}

const obj = makeObj("나이", 33);

console.log(obj);

// ------------------------------------------------------------

const uer = {
    name : "Mike",
    age : 30,
};

const user2 = Object.assign({},user);
user2.name = "Tom";

console.log(user2);

const result = Object.keys(user);

console.log(result);

const result1 = Object.values(user);

console.log(result1);

const result2 = Object.entries(user);

console.log(result2);

let arr = [
    ["mon", "월"],
    ["tue", "화"],
];

const result4 = Object.fromEntries(arr);

console.log(result4);