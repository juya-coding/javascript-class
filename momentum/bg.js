const body = document.querySelector("body");

function randomNumber() {
    const imageNumber = Math.floor(Math.random() * 3 + 1);
    return imageNumber;
}

function paintImg (getNumber) {
    const img = new Image(); // 이미지 태그 생성  "document.createElement('img')와 같다"
    img.src = `image/${getNumber}.jpg`; // 이미지 경로 설정 
    img.classList.add('bgImage');
    body.appendChild(img);
}


function init () {
    const imgNumber = randomNumber();
    paintImg(imgNumber);
};

init();