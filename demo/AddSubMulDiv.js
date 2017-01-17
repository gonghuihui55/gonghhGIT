var Add = function () {
    var tt = arguments;
    console.log(tt);
    var sum = 0;
    for (i = 0; i < tt.length; i++) {
        sum += tt[i];
    }
    return sum;

};

var Sub = function (a, b) {
    return a - b;
};

var Mul = function (a, b) {
    return a * b;
};

var Div = function (a, b) {

    return a % b;
}

console.log("--------%d", Add(12, 12));
console.log("--------%d", Add(12, 12, 78, 90, 9));

console.log("--------" + Div(8,5));

console.log("122");
console.log("122");
console.log("122");
console.log("122");
console.log("122");