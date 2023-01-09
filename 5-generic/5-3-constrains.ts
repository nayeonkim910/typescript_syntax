{
    interface Employee {
        pay():void;
    }
    
    class FullTimeEmployee implements Employee{
        pay(): void {
            console.log(`full time!!`);
        }
        workFullTime(){
    
        }
    }
    class PartTimeEmployee implements Employee{
        pay(): void {
            console.log(`full part time!!`);
        }
        workPartTime(){
            
        }    
    }
    //    bad Example 💩
    // function pay(employee:Employee): Employee{
        // employee.pay();
        // return employee;
    // }
    function pay<T extends Employee>(emp:T):T{
        emp.pay();
        return emp;
    }

    const nayeon = new FullTimeEmployee();
    nayeon.workFullTime();
    const nap = pay(nayeon);

    function getValue<T, K extends keyof T>(obj:T, key:K):T[K]{
        return obj[key];
    }
    const obj = {
        name: 'nayeon',
        age : 20,
    };

    console.log(getValue(obj,'name'));// nayeon
    console.log(getValue(obj,'age'));// nayeon
}