/**
 * Created by gonghuihui on 2017/1/17.
 */
// var result = '';
// if (somevar){       //somevar is not defined
//     result = 'yes';
// };
// console.log(result);

// var result = '';
// if (typeof somevar !== 'undefined'){      //somevar是一个已经声明但是尚未赋值的变量
//     result = 'yes';
// }
// console.log("--1--",result);

// var somevar,result;
// if(typeof somevar!== "undefined")
// {
//     result = 'yes';
// }
// console.log('--2--',result);

/**
 * ?: 三元运算符
 */
// var a = 1;
// var result = (a ===1) ? "a is one" : "a is not one";
// console.log('--3--',result);

/**
 * switch语句
 */

// var a = '1';
// var result = '';
// switch (a){
//     case 1:
//         result = 'Number 1';
//         break;
//     case '1':
//         result = 'String 1';
//         break;
//     default:
//         result = 'I don\'t know';    // '\'转义
//         break;
// }
// console.log('--4--',result);


// for (var i = 0,punishment = ''; i < 100; i++){
//     punishment += 'I will never do this again.\n ';
// }
// console.log('--5--',punishment);

// var res = '\n';
// for (var i = 0; i < 10; i++){
//     for (var j = 0; j < 10 ; j++){
//         res += '* ';
//     }
//     res += '\n';
// }
// console.log('--6--',res);

/**
 * for-in遍历数组
 */

// var a = ['a','b','c','d','e','f'];
// var result = '\n';
// for (var i in a){
//     result += 'index:' + i + ',value:'+a[i]+'\n';
// }
// console.log('--7--',result);

// var v = null || 10;
// console.log('--7--',v);

/*
 打印乘法口诀表
 不知道为什么，第二层for循环里面自动换行
 */
// var res = 1;
for (var i = 1; i < 10; i++) {
   var res = '';
    for (var j = 1; j <= i; j++) {
        res += ' ' +'' + j + '*' + i + '='+  i * j;
        // res = res +  ' ' + i * j;
    }
    console.log(res);

}