{
    /**
     * public  자식 class, class instance 모두 접근가능.
     * private 해당 class 내부에서만, 접근가능
     * static  class level에서 이용가능. 
     * protected 자식 클래스에서 접근 가능
 */
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
        syrup?:boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        //static은 상수목적이라 변경할 일 없음 
        private static BEANS_GRAMM: number = 7 //static인데도 class레벨에서 사용불가.
        private coffeeBeans!: number;

         constructor(beans: number) { //GRAMM정해서 머신만들기
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
            }
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grind(shots);
            this.heating();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans:number){
            super(beans);
        }
        private steamMilk():void{
            console.log(`🥛 Steaming some milk`);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return { ...coffee, hasMilk: true };
            
        }
        
    }
         
        
    const Lmachine = new CaffeLatteMachine(50);
    const latte= Lmachine.makeCoffee(2);
    console.log(latte);
  
     
     
    
    
}


    // const deepCoffeefmaker =CoffeeMachine.makeCoffeeMachine(50);
    // const pro = new ProBarista(deepCoffeefmaker);
    // const ama = new Amateur(deepCoffeefmaker);
    // pro.makeCoffee();
    // ama.makeCoffee();

