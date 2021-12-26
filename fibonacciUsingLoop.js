//0,1,1,2,3,5,8,13,.......
//10

// var fibo = [0,1];
// for(var i=2; i<=10; i++){
//     fibo[i] = fibo[i-1]+fibo[i-2];
//     console.log(fibo[i], fibo[i-1], fibo[i-2]);
// }


function fibonacci(n){
    var fibo = [0,1];
    for(var i=2; i<=n; i++){
        fibo[i] = fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
var result = fibonacci(5);
console.log(result);