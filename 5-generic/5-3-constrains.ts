{
    interface Employee{
       pay():void;
    }   
    class FullTimeEmployee implements Employee{
        pay(): void {
            console.log('get fullTime payment');
        }
        work(){
            console.log('work FullTime');
            
        }
    }
    class PartTimeEmployee implements Employee{
        pay(): void {
            console.log('get partTime payment');
        }
        work(){
            console.log('work PartTime');
            
        }
    }

    function givePayment<T extends Employee>(em:T):T{
        em.pay();
        return em;
    }
    const fullEm = new FullTimeEmployee();
    const partEm = new PartTimeEmployee();
    
    const nayeon= givePayment(fullEm);
    const tom= givePayment(partEm);
    //----------제네릭 사용하기
    const thomas = {
        name:'thomas',
        age:22,
        job:'engineer',
    }
    const dog = {
        name:'luke',
        age:6,
    }
    function getValue<T,K extends keyof T >(obj:T,key:K):T[K]{
        console.log(obj[key]);
        return obj[key];
    }
    getValue(thomas,'job');
    getValue(dog,'name');
    getValue(thomas,'age');
}