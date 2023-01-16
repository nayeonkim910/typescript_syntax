{
    /**
     * public  자식 class, class instance 모두 접근가능.
     * private 해당 class 내부에서만, 접근가능
     * static  class level에서 이용가능. 
     * protected 자식 클래스에서 접근 가능
 */
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        syrup?:boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    //Syrup interface
    //Milk interface
    class milkSteamer{
        private steamMilk(){
            console.log('-------------steaming......🥛');
        }
        addMilk(coffee:CoffeeCup):CoffeeCup{
            this.steamMilk();
            return {...coffee,hasMilk:true};
        }
    }
    class syrupPump{
        private pumpSyrup(){
            console.log('--------------pump Syrup...🍶');
        }
        addSyrup(coffee:CoffeeCup):CoffeeCup{
            this.pumpSyrup();
            return {...coffee,syrup:true};
        }
    }
    class PremiumsyrupPump{
        private pumpSyrup(){
            console.log('pump  Premium Syrup...🍶💚❤💘😉');
        }
        addSyrup(coffee:CoffeeCup):CoffeeCup{
            this.pumpSyrup();
            return {...coffee,syrup:true};
        }
    }
    class CoffeeMachine implements CoffeeMaker {
        //static은 상수목적이라 변경할 일 없음 
        private static BEANS_GRAMM: number = 7  
        private coffeeBeans!: number;
        constructor(beans: number){ 
            this.coffeeBeans = beans;
        }
            static makeCoffeeMachine(beans: number): CoffeeMachine {
                return new CoffeeMachine(beans);
            }

            clean() {
                console.log(`wasing---machine---🚿 `);
            }
            
            fillCoffeeBeans(beans: number) {
                if (beans <= 0) {
                    throw new Error('value for beans should be greater than 0');
                }
                this.coffeeBeans += beans;
            }
            private grind(shots: number) {
                console.log(`grinding...for coffee ☕`);
                this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM;
                if (this.coffeeBeans < 0) {
                    throw new Error('value for beans should be greater than 0');
                }
            }
            private heating() {
                console.log(`heating now...♨️`);
            }

            private extract(shots: number): CoffeeCup {
                console.log(`extract one shot 🔴`);
                return {
                    shots,
                    hasMilk: false,
                    syrup:false,
                }
            }
            makeCoffee(shots: number): CoffeeCup {
                this.grind(shots);
                this.heating();
                const coffee = this.extract(shots);
                return coffee;
            }
    }

    class LatteMachine extends CoffeeMachine{
        constructor(
            private beans:number,
            private milk:milkSteamer){
            super(beans);
        }
        private steamMilk(){
            console.log('steaming milk...🥛');
        }
        makeCoffee(shots: number):CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return  this.milk.addMilk(coffee);
        }
    }
    
    class sweetCoffeeMachine extends CoffeeMachine{
        constructor(
            private beans:number,
            private syrup:syrupPump){
            super(beans)
        }
        makeCoffee(shots: number): CoffeeCup{
            const coffee= super.makeCoffee(shots);
            return this.syrup.addSyrup(coffee);
            
        }
    }
    const milk = new milkSteamer();
    const syrup = new syrupPump();
    //-------
    const sgCoffeeMC = new sweetCoffeeMachine(33,syrup);
    const sgcoffee=sgCoffeeMC.makeCoffee(2);
    console.log(sgcoffee);
    
    //-------
    
    const latteMC = new LatteMachine(22,milk);
    const latte = latteMC.makeCoffee(2);
    console.log(latte);

    // const MachineSet:CoffeeMaker[] =[
        // new CoffeeMachine(15),
        // new LatteMachine(15),
        // new sweetCoffeeMachine(15),
    // ]
    // console.clear();
    // MachineSet.forEach((MC)=>{
        // console.log('------------');
        // console.log(MC.makeCoffee(2));
    // });
        
}
   
   
   
   
   


