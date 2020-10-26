const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init() {
//     title.style.color = BASE_COLOR;
//     title.style.cursor = "pointer";
//     title.addEventListener('click', handleClick);
// }

const titleClassName = 'clicked';

// function handleClick() {
//     const hasCurrentClass = title.classList.contains(titleClassName); // contains : 클래스리스트 안에 해당 value 가 있는지 체크
//     // const currentClass = title.className;
//     if (!hasCurrentClass) {
//         title.classList.add(titleClassName); // 가지고 있는 클래스를 전체 수정이 아닌 기존꺼에서 추가
//         // title.className = titleClassName;
//     } else {
//         title.classList.remove(titleClassName); //해당 클래스명만 삭제
//         // title.className = '';
//     }
// }

function handleClick() {
    title.classList.toggle(titleClassName);
}


function init() {
    title.addEventListener('click', handleClick);
}

init();
