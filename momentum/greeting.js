const form = document.querySelector('.js-form');
input = form.querySelector('input'),
greeting = document.querySelector('.js-greeting');

const USER_LS = 'currentUserName',
SHOWING_CN = 'showing';


function saveName(name) {
    localStorage.setItem(USER_LS, name)
}

function handleSubmit(event) { // 'event' 는 addEventListener 에서 함수 실행 시 가장 처음 전달된 인수가 Event 객체다.
    event.preventDefault(); // 이벤트를 취소한다. 
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit); 
    // input.addEventListener 하면 실행이 안된다. (submit이 사용자가 form을 제출 했을 떄 발생하는 이벤트이기 떄문이라고 추측한다.)
}


function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}`;
}

function loadName() {
    const currentUserName = localStorage.getItem(USER_LS);
    if ( currentUserName === null ) {
        askForName();
    } else {
        paintGreeting(currentUserName);
    }
}


function init() {
    loadName();
}

init();