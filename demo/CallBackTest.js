/**
 * Created by gonghuihui on 2017/1/11.
 */
var Sum = function (a,b) {
    return a() + b();
};
var one = function () {
    return 1;
};
var two = function () {
    return 2;
};

var SunOut = Sum (one,two);
console.log("---1---",SunOut);