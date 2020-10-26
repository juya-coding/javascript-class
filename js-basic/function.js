function sayHello(name, age) {
    return `Hello, ${name} you are ${age} years old`;
} // name, age = parameter (매개변수)
//`` 백틱 사용 시 글자 타이핑 그대로 출력
// return 실행 값을 반환한다. (반환 하지 않을 시 함수 실행 값은 함수 내에서만 활용 가능한 값이 된다.)

const greetJuya = sayHello('Juya', 33);
console.log(greetJuya); // Hello, Juya you are 33 years old
//return을 하지 않을 시 해당 결과 값은 'undifined'가 된다.


const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    square: function(a, b) {
        return a ** b;   
    }
};

const a = 5;
const b = 5;

const plus = calculator.plus(a, b);
const minus = calculator.minus(a, b);
const multiply = calculator.multiply(a, b);
const divide = calculator.divide(a, b);
const square = calculator.square(a, b);

console.log(`plus: ${plus}, minus: ${minus}, multiply: ${multiply}, divide ${divide}, square: ${square}`);