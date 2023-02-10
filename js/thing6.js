/*--------------------------------------------------------------------
arr.sort()
배열 재설정
주의! 배열 자체가 변경됨
인수로 정렬 로직을 담은 함수를 받음 
*/
// 문자열로 인식함 따라서 크기 구분 해줘야함
let arr = [27, 8, 5, 13];

/* a - b 했을 때 
    a - b > 0  a값이 더 크므로 a가 뒤로
    a-b < 0 a값이 더 작으므로 a가 앞으로
    a - b = 0  두 값이 같으므로 그대로
*/
function fn (a, b) {
    return (a - b);
};

arr.sort(fn);

console.log(arr);
console.log("-----------------------------------------------------------");
// 그러하므로 Lodash 라는 라이브러리를 많이 사용
// http://lodash.com/
// _.sortBy(arr);

//--------------------------------------------------------------------------------------------------------

/* 
arr.reduce()
인수로 함수를 받음
(누적 계산값, 현재값) => {return 계산값};
*/

let arr1 = [1, 2, 3, 4, 5];

const result = arr1.reduce((prev, cur)=>{
    return prev + cur;
}, 0);

console.log(result);
console.log("-----------------------------------------------------------");

// ----------------------------------------------------------------------------------------

let userList = [
    { name : "Mike", age : 30},
    { name : "Tom", age : 10},
    { name : "Jane", age : 27},
    { name : "Sue", age : 26},
    { name : "Harry", age : 10},
    { name : "Steve", age : 60},
];

let result1 = userList.reduce((prev, cur)=>{
    if(cur.age > 19){
        prev.push(cur.name);
    }
    return prev;

    // if(cur.name.length === 3){
    //     prev.push(cur.name);
    // }
    // return prev;
}, [])

console.log(result1);