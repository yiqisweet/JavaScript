var arr2 = ["html","css"];
var arr3 = ["js","jquery"];
var arr5 = ["bs","php"];
var arr4 = [arr2,arr3];  //[ ["html","css"],["js","jquery"]]
console.log(arr4);
console.log(arr2.concat(arr3)); //["html","css","js","jquery"]
console.log( arr3.concat(arr2,arr5),arr2,arr3);//不改变原数组，生成新的