const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');


btnStart.addEventListener('click', startBtnClick);
btnStop.addEventListener('click', stopBtnClick);

btnStop.disabled = true;
let color;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
  }


function startBtnClick () {
    btnStop.disabled = false;
    btnStart.disabled = true;

    color = setInterval(() => {document.body.style.backgroundColor = `${getRandomHexColor()}`},1000);
    
}

function stopBtnClick () {
    btnStop.disabled = true;
    btnStart.disabled = false;
    clearInterval(color)
}
