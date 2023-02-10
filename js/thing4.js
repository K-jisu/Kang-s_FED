let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03.  자료형",
    "04.  함수",
    "05.  배열",
];
let newList = [];

// push 배열에 추가
// slice(n) n번쨰부터 읽기
for(let i = 0; i < list.length; i++){
    newList.push(list[i].slice(4));
    console.log(newList);
}

//  -----------------------------------------------------------------------------
// indexOf()
// 금칙어 : 콜라

function hasCola(str){
    if(str.indexOf("콜라") > -1){
        console.log("금칙어가 있습니다.");
    } else{
        console.log("통과");
    }
}

hasCola("와 사이다가 짱이다!"); // -1 true
hasCola("무슨소리, 콜라가 죄고");
hasCola("콜라"); // 0 false

// --------------------------------------------------------------------------------------

// 금칙어 : 콜라
// includes()
// 문자가 있으면 true
// 없으면 false 반환

function hasCola1(str){
    if(str.includes("콜라")){
        console.log("금칙어가 있습니다.");
    } else{
        console.log("통과");
    }
}

hasCola1("와 사이다가 짱이다!"); // -1 true
hasCola1("무슨소리, 콜라가 죄고");
hasCola1("콜라"); // 0 false