const ntells = "50years"
document.write(ntells)
const sym = Symbol("mary");
const sym2 = Symbol("mary");

console.log(sym === sym2);

const car = {
    color: "red",
    wheel: "four",
    model: "honda",
    year: 2005,
    new: false
}

car.new = true;
car.old = false;
delete car.model;
console.log(car);

let n = 4 + 6

let sub = 5 - 4

let div = 15 / 5

let mul = 2 * 5

//this would multiply 2*2 in 4 places ie 2*2*2*2
let exp = 2 ** 4

//this would give you the remainder
let mod = 15 % 4

console.log(n);
console.log(sub);
console.log(div);
console.log(mul);
console.log(exp);
console.log(mod);



let rice = 500;
let beans = 400;
let yam = 700 * 2;

let totalprice = rice + beans + yam

let average = rice + beans + yam / 3

let finalprice = rice + beans + yam - 5

console.log(rice);
console.log(beans);
console.log(yam);
console.log(totalprice);
console.log(average);
console.log(finalprice);

let a = 1
let b = `1`

console.log(a + b);

let firstname = "bunmi"
let lastname = "oladipo"

console.log(firstname + lastname);
//to put space between the names
console.log(firstname + " " + lastname);

//comparism
console.log(rice > beans);
console.log(beans > rice);
console.log(rice >= beans);

let price1 = 500
let price2 = 1000
let price3 = 3000 * 2

let mango = 450
let apple = 300
let banana = 200 * 2

let totaprice = price1 + price2 + price3

let totalfruit = mango + apple + banana

console.log(totaprice);
console.log(totalfruit);
console.log(totaprice > totalfruit);
console.log(totaprice < totalfruit);
console.log(totaprice <= totalfruit);
console.log(totaprice >= totalfruit);

//== equal to === strictly equal to != not equal to !== strictly not equal to
let boom = "girl"

// if (boom !== "babe") {
//     alert("congrats")
// } else {
//     alert("let me know")
// }

//$$ AND || OR ! NOT
if (price1 > 10000 || price2 > 100 || price3 > 10000) { alert("congrats") } else { alert("no") }

for (i = 0; i <= 1000; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (q = 0; q <= 10; q++) {
    if (q % 10 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// for (z = "a"; z = "z"; z++) {
//     if (z === "a,e,i,o,u") {
//         console.log("5");
//     } else {
//         console.log(false);
//     }
// }