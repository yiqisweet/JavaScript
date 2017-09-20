var arr = [1,9,11,3,2,7,5,6];
paixu(arr);
//定义一个函数，从小到大排序  快速排序
function paixu(arr) {
    console.log(arr);
    for (var i = 0; i < arr.length;i++){
        for(var j = i+1; j < arr.length;j++){
            if(arr[i] > arr[j]){
                //借助一个中间变量
                var temp = arr[i];
                arr[i] = arr[j]; //arr[i] = 3
                arr[j] = temp;  //arr[j] = 3
            }
        }
    }
    console.log(arr);
}