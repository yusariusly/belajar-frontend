// cara 1 keyword new function 
const sum1 = new Function ('x', 'y', 'console.log(x+y)')

//cara 2 - standar functin
function sum2(x, y) {
    console.log(x + y)
}

//cara 3 arrow function 
const sum3 = (x, y) => {
    console.log(x + y)
}

sum1(1, 1)
sum1(2, 2)
sum1(3, 3)