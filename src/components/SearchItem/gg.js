function Increment() {
    let value = 0;
    return function () {
        return value += 1;
    }
}
let inc = new Increment();
console.log(inc());
console.log(inc());
console.log(inc() + inc());