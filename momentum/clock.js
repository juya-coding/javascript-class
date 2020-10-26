const clockContainer = document.querySelector(".js-clock"), // querySelector는 element의 자식 요소를 찾는다. 
clockTitle = clockContainer.querySelector("h1"); // clockContainer의 자식요소를 찾는다.

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; // 삼항 조건 연산자 활용
}

function init() {
    getTime();
    setInterval(getTime, 1000); // setinterval (함수, 반복시간) 
}

init();