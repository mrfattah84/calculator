const keyPad = document.querySelector('.keypad')
const display = document.querySelector('.display')
display.style.fontSize = '112px'
let a;
let b;
let operator;
keyPad.addEventListener('click', function(e){
    const pressed = e.target.innerText;
    if (!isNaN(parseInt(pressed)) || (pressed === '.' && !display.innerText.includes('.'))){
        display.innerText += pressed;
    }
    if (pressed === 'AC'){
        display.innerText = '';
        display.style.fontSize = '112px'
    }
    if (pressed === '÷' || pressed === 'x' || pressed === '-' || pressed === '+'){
        operator = pressed;
        a = parseFloat(display.innerText);
        display.innerText = '';
        display.style.fontSize = '112px'
    }
    if (pressed === '='){
        b = parseFloat(display.innerText);
        switch (operator) {
            case '÷':
                if (b == 0){
                    display.innerText = 'cant devide by 0';
                    break;
                }
                display.innerText = (a/b).toFixed(2);
                break;
            case 'x':
                display.innerText = (a*b).toFixed(2);
                break;
            case '-':
                display.innerText = a-b;
                break;
            case '+':
                display.innerText = a+b;
                break;
        
            default:
                break;
        }
    }
    if (pressed == '+/-'){
        display.innerText = -display.innerText;
    }
    if (pressed == '%'){
        display.innerText = (display.innerText/100).toFixed(2);
    }
    while (display.scrollWidth > display.clientWidth) {
        display.style.fontSize = parseInt(display.style.fontSize)-1+'px';    }
})