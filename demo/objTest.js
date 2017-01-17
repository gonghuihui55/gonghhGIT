/**
 * Created by gonghuihui on 2017/1/12.
 */
// var obj  =  new String("13123");
//  function  fun(o) {
//     o = {
//         name : 'Zhangsan',
//         setname : function (val) {
//             this.name = val;
//         }
//     };
//     return o;
//
//  }
// console.log(obj);
// var k = fun(obj);
// console.log(obj);
// console.log(k);
//----------------------------------------------------
// var obj = new String("13123");
// var obj1 = obj;
// function fun(o) {
//     o = 'ASDASFD';
//     return o;
// }
//
// var k = fun(obj);
// console.log(obj);
// console.log(obj1);
// console.log(k);

//----------------------------------------------------------------------
// var obj  =  {
//     name : 'Zhangsan',
//     setname : function (val) {
//         this.name = val;
//     }
// };
// var obj1 = obj;
//  function  fun(o) {
//     o.setname('123123');
//     return o;
//  }
// //console.log(obj);
// var k = fun(obj);
// console.log(obj);
// console.log(obj1);
// console.log(k);

//发生事情的时候，或者事件的时候，或具体。
function call(o)
{
    o();
}

//------------------------------------------------------------------
// var obj  = {
//     age : 21,
//     setname : function (val) {
//         this.name = val;
//     }
// }
// var obj = 2;
//
// function  fun(o) {
//     //
//     o = 3;
//     return o;
//
// }
//
// var k = fun(obj);
// console.log(obj);
// console.log(k);

///-----------------------------------------

function callback(){
    console.log('12312312');
}
call(callback);



/***
 * 若是对象，传递的是对象的首地址
 * 若是变量，传递的是变量值
 **/