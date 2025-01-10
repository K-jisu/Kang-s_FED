// setInterval, clearInterval

let num = 0;

function showTime (){
    console.log(`접속하신지 ${num++}초가 지났습니다.`);
    if(num > 10){
        clearInterval(tid);
    }
};

const tid = setInterval(showTime, 1000);