//데이터타입, 연산자 실습
1+1
// 2
1+"만원"
// '1만원'
1+"1"
// '11'
1-"1"
// 0
"코드"+"캠프"
// '코드캠프'
"123"==123
// true
"123"===123
// false
true && true
// true
true &&false
// false
false || true
// true
!false
// true
!true
// false


//조건문 실습1
if(1+1 ===2 ){
    console.log("정답");
}
// VM179:2 정답
undefined
if(1+1 ===2 ){
    console.log("정답");
}else{
    console.log("오답");
}
// VM291:2 정답
undefined
if(false ){
    console.log("정답");
}else{
    console.log("오답");
}
// VM348:4 오답