// 시간 출력
const clock = document.querySelector("#clock");

function getClock(){
    let date = new Date();
    let hour = String(date.getHours()).padStart(2,"0");
    let minute = String(date.getMinutes()).padStart(2,"0");
    let second = String(date.getSeconds()).padStart(2,"0");

    // 현재 시간 출력
    clock.innerHTML=`${hour}:${minute}:${second}`;
    //return `${hour}:${minute}:${second}`;
}

// 타이머 함수(1초마다 시간을 받아올수있게)
setInterval(getClock,1000);
getClock();