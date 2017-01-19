/**
 * Created by gonghuihui on 2017/1/18.
 */

/**
 * 内建函数
 * parseInt();  将输入值转换成整数类型输出
 * parseFloat();  类似paraseInt();
 * isNaN();  确定输入值是否是一个可以参与算术运算的数字
 *  isFinite();  检查输入是否是一个既非 infinity（无穷）也非NaN的数字
 * encodeURI();  返回可用的URL
 * decodeURI();  返回URL的一部分？？？？
 * encodeURIComponent();  什么叫反编码
 * decodeURIComponent();
 * eval() 将输入的字符串当做JS代码来执行
 */

// console.log(parseInt('0377'));
//----------------------------------------------------------------------------------------------
// var url = 'http://baidu.com/src ipt.php?q=this and that';
// console.log(encodeURI(url));
// console.log(encodeURIComponent(url));
//
// eval('var ii = 2;');  //与 var ii = 2;效果相同
// console.log(ii);
//----------------------------------------------------------------------------------------------
// var global = 1;
// function f() {
//     local = 3;         //没有使用var语句，变量默认为全局变量
//     global ++;
//     return global;
// }
// var  aa = f();
// console.log(aa);
// console.log(aa);
// console.log(local);
//----------------------------------------------------------------------------------------------
// var a = 123;
//  function f() {
//      alert(a);
//      var a = 1;
//      alert(a);
//  };
//  f();
//-----------------------------------------------------------------------------------------------
// function define() {
//     return 1;
// }
// typeof define;
// var express = function () {
//     return 1;
// }
// typeof express;

//------------------------------------------------------------------------------------------------

/**
 * 回调函数
 */
function multiplyByTwo(a,b,c) {
    var i, ar = [];
    for(i = 0; i < 3; i++){
        ar[i] = arguments[i] * 2;
    }
    return ar;
}

function addOne(a) {
    return a + 1;
}
var myarr = [];
myarr = multiplyByTwo(10,20,30);
for (var j = 0; j < 3;j++){
    myarr[j] = addOne(myarr[j]);
}
console.log(myarr);


