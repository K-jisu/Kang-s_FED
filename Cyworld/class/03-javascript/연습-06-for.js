let persons = [
    {name : "철수", age : 17,},
    {name : "영희", age : 22},
    {name : "도우너", age : 5},
    {name : "그루트", age : 65},
    {name : "도비", age : 3}
]
// undefined
for(let count = 0; count < persons.length; count++){
    if(persons[count].age >= 19){
        console.log("성인입니다");
    }else{
        console.log("미성년자입니다");
    }
}
// VM3057:5 미성년자입니다
// VM3057:3 성인입니다
// VM3057:5 미성년자입니다
// VM3057:3 성인입니다
// VM3057:5 미성년자입니다
undefined
for(let count = 0; count < persons.length; count++){
    if(persons[count].age >= 19){
        console.log(persons[count].name);
    }else{
        console.log("미성년자입니다");
    }
}
// VM3213:5 미성년자입니다
// VM3213:3 영희
// VM3213:5 미성년자입니다
// VM3213:3 그루트
// VM3213:5 미성년자입니다
undefined
for(let count = 0; count < persons.length; count++){
    if(persons[count].age >= 19){
        console.log(persons[count].name + "성인입니다");
    }else{
        console.log(persons[count].name + "미성년자 입니다");
    }
}
// VM3518:5 철수미성년자 입니다
// VM3518:3 영희성인입니다
// VM3518:5 도우너미성년자 입니다
// VM3518:3 그루트성인입니다
// VM3518:5 도비미성년자 입니다

const fruits = [
    {number : 1, title:"레드향"},    
    {number : 2, title:"샤인머스켓"},
    {number : 3, title:"산청딸기"},
    {number : 4, title:"한라봉"},
    {number : 5, title:"사과"},
    {number : 6, title:"애플망고"},
    {number : 7, title:"딸기"},
    {number : 8, title:"천혜향"},
    {number : 9, title:"과일선물세트"},
    {number : 10, title:"귤"},
]
undefined
for(let k = 0; k <fruits.length; k++){
    console.log(fruits[k].number + "" + fruits[k].title)
}
// VM3914:2 1레드향
// VM3914:2 2샤인머스켓
// VM3914:2 3산청딸기
// VM3914:2 4한라봉
// VM3914:2 5사과
// VM3914:2 6애플망고
// VM3914:2 7딸기
// VM3914:2 8천혜향
// VM3914:2 9과일선물세트
// VM3914:2 10귤
// undefined
for(let k = 0; k <fruits.length; k++){
    console.log(`${fruits[k].number} ${fruits[k].title}`)
}
// VM4056:2 1 레드향
// VM4056:2 2 샤인머스켓
// VM4056:2 3 산청딸기
// VM4056:2 4 한라봉
// VM4056:2 5 사과
// VM4056:2 6 애플망고
// VM4056:2 7 딸기
// VM4056:2 8 천혜향
// VM4056:2 9 과일선물세트
// VM4056:2 10 귤
// undefined
for(let k = 0; k <fruits.length; k++){
    console.log(`과일차트 ${fruits[k].number}위는 ${fruits[k].title}입니다`)
}
// VM4194:2 과일차트 1위는 레드향입니다
// VM4194:2 과일차트 2위는 샤인머스켓입니다
// VM4194:2 과일차트 3위는 산청딸기입니다
// VM4194:2 과일차트 4위는 한라봉입니다
// VM4194:2 과일차트 5위는 사과입니다
// VM4194:2 과일차트 6위는 애플망고입니다
// VM4194:2 과일차트 7위는 딸기입니다
// VM4194:2 과일차트 8위는 천혜향입니다
// VM4194:2 과일차트 9위는 과일선물세트입니다
// VM4194:2 과일차트 10위는 귤입니다
// undefined

Math.floor(Math.random()*100000)
// 54983
String(Math.floor(Math.random()*100000))
// '49675'
String(Math.floor(Math.random()*100000))
// '89016'
String(Math.floor(Math.random()*100000))
// '91974'
String(Math.floor(Math.random()*100000))
// '70226'
String(Math.floor(Math.random()*100000)).padStart(6,"0")
// '013002'
String(Math.floor(Math.random()*100000)).padStart(6,"0")
// '048390'
String(Math.floor(Math.random()*100000)).padStart(6,"0")
// '040982'
let result2 = String(Math.floor(Math.random()*100000)).padStart(6,"0")
// undefined