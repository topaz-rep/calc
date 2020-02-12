const display = document.querySelector('.display');
let resRec = 0;
let opsBtn = 0;

document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    if (resRec === 1 && opsBtn === 0) clearResults();
    display.value += ev.target.innerText;
}

document.querySelectorAll('.ops button')
    .forEach(button => button.addEventListener('click', opsPressed));

function opsPressed(ev) {
    if (display.value.slice(-1) == '+' || display.value.slice(-1) == '*' || display.value.slice(-1) == '/' || display.value.slice(-1) == '-') {
        display.value = display.value.substring(0, display.value.length - 1) + ev.target.innerText;
    } else {
        display.value += ev.target.innerText;
    }
    opsBtn = 1;
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    if (display.value.slice(-1) == '+' || display.value.slice(-1) == '*' || display.value.slice(-1) == '/' || display.value.slice(-1) == '-') display.value = display.value.substring(0, display.value.length - 1);
    (eval(display.value) == Infinity || eval(display.value) == -Infinity) ? display.value = 'You can\'t divide by zero!'
        : display.value = parseFloat(eval(display.value)).toFixed(2);
    resRec = 1;
    opsBtn = 0;
}

document.querySelector('.cls').addEventListener('click', clearResults);

function clearResults() {
    display.value = '';
    resRec = 0;
    opsBtn = 0;
}

document.querySelector('.dot').addEventListener('click', addDot);

function addDot(ev) {
    if (display.value.slice(-1) !== '.') display.value += ev.target.innerText;
}

document.querySelector('.delChar').addEventListener('click', delChar);

function delChar() {
    display.value = display.value.substring(0, display.value.length - 1);
}