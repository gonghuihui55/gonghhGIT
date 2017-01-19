/**
 * Created by gonghuihui on 2017/1/10.
 **/
var Str =  "abcdefghij";
var ArrayTest = [];
for(var i=0;i<Str.length;i++){
    ArrayTest[i] = Str.substring(i,i+1);
}

console.log("---1---",Str.substring(0,1));
console.log("---2---",Str.length);
console.log("---3---",ArrayTest);
