// var arr = [];
// for(var i = 1;i<=100;i++){
//     arr.push(i);
// }
// //随机排序，打乱
// arr.sort(function (a,b) {
//     return 0.5-Math.random();  //0.5
// });
// console.log(arr);
//方法二
//1.外循环  数组的个数
//2.生成随机数，比较（跟之前数组里面所有的元素进行比较）
//3.定义一个变量，存储当前数跟之前数组里面所有的元素不相同的个数
//4.如果个数跟数组的长度相同，没有一个重复的，push
var arr1 = [];
for ( ;arr1.length != 100;) {
    var a = Math.round(Math.random() * 100);  //[1,2,5]  3
    var n = 0;
    for (var j = 0; j < arr1.length; j++) {
        if (a != arr1[j]) {
            n++;
        }
    }
    if (n == arr1.length) {
        arr1.push(a);
    }
}
    console.log(arr1);