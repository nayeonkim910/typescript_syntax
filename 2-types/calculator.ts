/**
 * Let's make a calculator 🧮
 */
{

type Num = number;
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

//기능을 union으로 정리;

type Func = 'add'|'substract'|'multiply'|'divide'|'remainder';

    function calculate(func:Func,num1:Num,num2:Num): Num {
                switch (func) {
                case 'add':
                    return(num1+num2);
                case 'substract':
                    return(num1-num2);
                case 'multiply':
                    return(num1*num2);
                case 'divide':
                    return(num1/num2);
                case 'remainder':
                    return(num1%num2);
                default:
                    throw Error('unknown Function !');
                }  
    }

}
