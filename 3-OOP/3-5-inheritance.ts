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
    interface SyrupPump {
        addSyrup(coffee:CoffeeCup):CoffeeCup;
    }
    //Milk interface
    interface MilkFrother {
        steamMilk(coffee:CoffeeCup):CoffeeCup;
    }
//--------------------------------
    class milkSteamer implements MilkFrother{
        private steam(){
            console.log('-------------steaming milk......🥛');
        }
        steamMilk(coffee:CoffeeCup):CoffeeCup{
            this.steam();
            return {...coffee,hasMilk:true};
        }
    }

    class noMilk implements MilkFrother{
        steamMilk(coffee:CoffeeCup):CoffeeCup{
            return {...coffee,hasMilk:false};
        }
    }
//--------------------------------

    class syrupAdder implements SyrupPump{
        private pumpSyrup(){
            console.log('--------------pump Syrup...🍶');
        }
        addSyrup(coffee:CoffeeCup):CoffeeCup{
            this.pumpSyrup();
            return {...coffee,syrup:true};
        }
    }
    class noSyrup implements SyrupPump{
        addSyrup(coffee:CoffeeCup){
            return {...coffee,syrup:false};
        }
    }
    class PremiumsyrupPump implements SyrupPump{
        private pumpSyrup(){
            console.log('pump  Premium Syrup...🍶💚❤💘😉');
        }
        addSyrup(coffee:CoffeeCup):CoffeeCup{
            this.pumpSyrup();
            return {...coffee,syrup:true};
        }
    }
//--------------------------------
    class CoffeeMachine implements CoffeeMaker {
        //static은 상수목적이라 변경할 일 없음 
        private static BEANS_GRAMM: number = 7  
        // private coffeeBeans!: number;
            constructor(
                private coffeeBeans: number,
                private syrupDivice:SyrupPump,
                private milkDevice:MilkFrother){ 
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
                const hasSyrup=this.syrupDivice.addSyrup(coffee);
                return this.milkDevice.steamMilk(hasSyrup);
            }
    }

    //milk 종류
    const milk = new milkSteamer();
    const notM = new noMilk();
    
    //syrup 종류
    const syrup = new syrupAdder();
    const PremiumSyrup = new PremiumsyrupPump();
    const notS = new noSyrup();
    //CoffeeMachine클래스 하나를 가지고 다양한 기기를 ☑️ 조립하기
    //extends 상속을 전혀 사용하지않았지만,원하는 형태의 오브젝트를 만들어냄.
    //미리 interface로 약속해두고, 조건에 맞는 블럭으로 조립
    const SWCFMaker= new CoffeeMachine(33,syrup,notM);
    const SWLatteMaker = new CoffeeMachine(33,PremiumSyrup,milk);
    const LatteMaker = new CoffeeMachine(33,notS,milk);

    const machineSet:CoffeeMachine[]= [
        SWCFMaker,
        SWLatteMaker,
        LatteMaker
    ];

    machineSet.forEach((MC)=>MC.makeCoffee(2));
}
   
   
   
   
   


