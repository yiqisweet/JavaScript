/**
 * Created by Administrator on 2017/9/21.
 */
//1、替换正则中间四位数字为*
// var str = "18210399098";
// var reg = /\d{4}/ig;
// reg.lastIndex = 3;
// console.log(str.replace(reg.exec(str),"****"));

//2、检测邮箱
// var reg = /[1-9][0-9]{5}/;  //共6位数字，第一位不能为0
// var str = 100000;
// console.log(reg.exec(str));

//3、去除字符串首尾空格
// var reg = /^\s+/;							//强制首
// var str = '          u  jiuye            ';
// var result = str.replace(reg, '');
// reg = /\s+$/;							//强制尾
// result = result.replace(reg, '');
// console.log('|' + result + '|');