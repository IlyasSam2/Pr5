'use strict'

let etsalaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum =0;
for(let key in etsalaries){
        sum = sum + etsalaries[key];
    }
console.log(sum);


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
function multiplyNumeric(obj){
    for(let key in obj){
            if(typeof obj[key] == 'number'){
                obj[key] *= 2;
            }
        }
}
multiplyNumeric(menu)
console.log(menu);



let calculator = {
    read() {
        this.a = Number(prompt("Введиите первое число"))
        this.b = Number(prompt("Введиите второе число"))
    },

    sum() {
        let sum = this.a + this.b;
        return sum;
    },

    mul() {
        let mul = this.a * this.b;
        return mul;
    }
};
  

calculator.read();
console.log( calculator.sum());
console.log( calculator.mul());

 



let price = "$120";

function extractCurrencyValue(str) {
    let str1 = str.split('$')[1];
    return parseInt(str1);
}
let str = extractCurrencyValue(price);
console.log(str);




let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log(names);


function getAverageAge(users){
    let sum = 0;

    for (const user of users) {
        sum += user.age;
    }

    return sum / users.length;
}

console.log(getAverageAge(users));