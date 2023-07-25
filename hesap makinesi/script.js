let total = 0;
let screen = "";
let display = document.getElementById('display_screen');
const buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach(element => {
    element.addEventListener('click', () => {
        console.log('tıklandı');
        if (element.value != "c" && element.value != "AD") {
            if (screen == "0") {
                screen = "";
            }
            screen = screen + element.value;
            console.log(screen);
            if(element.value=="="){
                total = handleOperation(screen);
                screen = total.toString();
                console.log(screen);
            }
            display.textContent = screen;
        } else if (element.value == "c") {
            screen = "0";
            console.log(screen);
            display.textContent = screen;
        } else {
            screen = screen.substring(0, screen.length - 1);
            console.log(screen);
            display.textContent = screen;
        }
    });
});

function handleOperation(s) {
    let totalResult = 0;
    if(s.indexOf("+") != -1){
        totalResult = Number(s.substring(0, s.indexOf("+"))) + Number(s.substring (s.indexOf("+")+1,s.length-1));
    }
    if(s.indexOf("-") != -1){
        totalResult = Number(s.substring(0, s.indexOf("-"))) - Number(s.substring (s.indexOf("-")+1,s.length-1));
    }
    if(s.indexOf("*") != -1){
        totalResult = Number(s.substring(0, s.indexOf("*"))) * Number(s.substring (s.indexOf("*")+1,s.length-1));
    }
    if(s.indexOf("/")!= -1){
        totalResult = Number(s.substring(0, s.indexOf("/"))) / Number(s.substring (s.indexOf("/")+1,s.length-1));
    }
    return totalResult;
  }
//   let calculation = [];
// let accumulativeCalculation;
// let display = document.getElementById('display_screen');
// const buttons = document.querySelectorAll('button');
// console.log(buttons);
// buttons.forEach(element => {
//     element.addEventListener('click', () => {
//         calculate(element.value);
//     });
// });


// function calculate(e){
//     if(e == "c"){
//         calculation = [];
//         display.textContent = "0";
//     }
//     else if(e == "="){
//         display.textContent = eval(accumulativeCalculation);
//         calculation = [];
//     }
//     else{
//         calculation.push(e);
//         accumulativeCalculation = calculation.join('');
//         console.log(accumulativeCalculation);
//         display.textContent = accumulativeCalculation;
//     }
    
// }