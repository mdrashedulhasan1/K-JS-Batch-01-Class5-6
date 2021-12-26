// 1! = 1
// 2! = 2*1!
// 3! = 3*2!
// 4! = 4*3!
// 5! = 5*4!
// n! = n*(n-1)!


function factorialRecursive(n){
    if(n == 0){
        return 1;
    }
    else {
        return n*factorialRecursive(n-1);
    }
}
var result = factorialRecursive(5);
console.log(result);