/**
 * Let's make a calculator 🧮
 */
{


type Num = number;
console.log(calculate(add, 1, 3)); // 4
console.log(calculate(substract, 3, 1)); // 2
console.log(calculate(multiply, 4, 2)); // 8
console.log(calculate(divide, 4, 2)); // 2
console.log(calculate(remainder, 5, 2)); // 1

function calculate(action:Function ,a:number, b:number){
    let result = action(a,b);
    console.log(result);
}

function add(a:Num,b:Num){
    return a+b;
};
function substract (a:Num,b:Num){
    return a-b;};
function multiply  (a:Num,b:Num){
    return a*b;};
function divide    (a:Num,b:Num){
    return a/b;};
function remainder (a:Num,b:Num){
    return a%b;};

}
