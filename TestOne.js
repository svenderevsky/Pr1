// Замыкание 
function makeCounter() {
    var currentCount = 1;
    return function()  {
        return currentCount++
    }
}

countr1 = makeCounter();
console.log(countr1());
console.log(countr1());

countr2 = makeCounter();
console.log(countr2());