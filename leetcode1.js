// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
function memorized(fn){
    const cache={};
    return function(...args){
    let key=JSON.stringify(args);
    if(cache.hasOwnProperty(key)){
        return cache[key];
    }
    let result=fn(...args);
    cache[key]=result;
    return result;
}
}
function sum(a,b){
    return a+b;
}
function fib(n){
    if (n<=1) return n;
    return fib(n-1)+fib(n-2);
}
function factorial(n){
    if (n<=1) return 1;
    return factorial(n-1)*n;
}
const memosum=memorized(sum);
const memofib=memorized(fib);
const memofact=memorized(factorial);
console.log(memosum(2,3));
console.log(memofib(9));
console.log(memofact(7));