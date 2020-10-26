const toDoForm = document.querySelector('.js-toDoForm'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let toDos = [];

function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //localstorage에는 JSON 형식의 텍스트만 들어갈 수 있다.
}

function handleBtn(event) {
    const btnValue = event.target; // 이벤트가 일어난 버튼을 할당
    const li = btnValue.parentNode; // 클릭된 버튼의 부모 태그를 할당
    toDoList.removeChild(li); // 해당 태그 지우기
    const clearToDos = toDos.filter(function(toDo) { // filter 함수는 주어진 조건 값이 true인 요소만을 모아서 새로운 배열로 반환한다.
       return toDo.id !== parseInt(li.id)
    });
    toDos = clearToDos;
    saveToDo();
}


function paintToDoList(text) {
    const li = document.createElement('li'); // li 태그 생성
    const delBtn = document.createElement('button'); // 삭제 버튼 생성
    delBtn.innerText = '❌';
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    span.innerText = text;
    li.id = newId;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    }
    toDos.push(toDoObj);
    saveToDo();
    delBtn.addEventListener('click', handleBtn);
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value
    paintToDoList(currentValue);
    toDoInput.value = '';
}


function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if ( loadToDos !== null ) {
        const parsedToDos = JSON.parse(loadToDos); // 로컬스토리지에 값이 json 타입의 string이기 떄문에, javascript 데이터 타입인 객체로 변형 필요.
        parsedToDos.forEach(function(todo) { //forEach 배열을 순서대로 콜백함수를 실행한다. *콜백함수: 함수 안에서 또 함수를 콜한다.
            paintToDoList(todo.text)
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit)
}

init();