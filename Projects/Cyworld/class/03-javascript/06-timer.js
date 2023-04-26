let isStarted = false;

const auth = () => {

    if(isStarted === false){
        // 타이머 작동중 아닐때
        isStarted = true;
        document.getElementById("finish").disabled = false;
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token;
    
        let time = 5;

        let timer
    
        timer = setInterval(()=>{
            if(time >= 0){
                const min = Math.floor(time/60)
                const sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec;
                time = time - 1
            }
            else{
                document.getElementById("finish").disabled = true;
                isStarted = false;
                clearInterval(timer);
            }
        },1000)
    }else{
        // 타이머가 작동중일때
    }

}