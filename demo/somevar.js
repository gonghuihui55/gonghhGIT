/**
 * Created by gonghuihui on 2017/1/16.
 */

/**
 * NAN null undefined
 * NAN 不等于任何东西，包括他自己
 * null 只能由代码赋值
 * undefined 当我们声明时不初始化一个变量时，js会自动使用undefined 来初始化变量
 */
var i = 1 + undefined;
console.log(i);

// var i = 1 + null;
// console.log(i);