var str8 = "21,334,54";
console.log(str8.split(",")); //["21", "334", "54"]
var str9 = "2017/8/11";
console.log(str9.split("/")); //["2017", "8", "11"]
var str10 = "web";
console.log(str10.split("")); //["w", "e", "b"]
//array转string join
var arr = [12,21,54,76,96,334];  //数组转字符串
console.log(arr.join());  //12,21,54,76,96,334  没有参数原样
console.log(arr.join(""));//1221547696334
console.log(arr.join("-")); //12-21-54-76-96-334