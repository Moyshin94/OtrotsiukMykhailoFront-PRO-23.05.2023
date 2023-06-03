const firstName = prompt('What is your name?');

alert(`Hello, ${firstName}! How are you?`);

const firstNum = prompt('write first number');
const secondtNum = prompt('write second number');

const addition = firstNum + secondtNum;
const subtraction = firstNum - secondtNum;
const multiplication = firstNum * secondtNum;
const division = firstNum / secondtNum;

const messageCalc = [addition, subtraction, multiplication, division];
alert(messageCalc);

if (firstNum === secondtNum) {
  alert(`${firstNum} = ${secondtNum}`);
} else {
  alert(`${firstNum} not equal ${secondtNum}`);
}

let equality = firstNum === secondtNum ? true : false;
console.log(equality);

const thirdNum = prompt('write third number');
console.log(thirdNum);

const avarage = (firstNum + secondtNum + thirdNum) / 3;
console.log(avarage);
