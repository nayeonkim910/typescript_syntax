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
    //abstract class 는 필요한것 정의하는 곳일뿐,
    //instance생성 불가함.
    abstract class CoffeeMachine implements CoffeeMaker {
        //static은 상수목적이라 변경할 일 없음 
        private static BEANS_GRAMM: number = 7 //static인데도 class레벨에서 사용불가.
        private coffeeBeans!: number;

         constructor(beans: number) { //GRAMM정해서 머신만들기
            this.coffeeBeans = beans;
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
        //자식class에서 변경할 메서드에만 abstract추가
        //제어자 먼저쓰고 abstract선언.
        protected abstract extract(shots: number): CoffeeCup;

        makeCoffee(shots: number): CoffeeCup {
            this.grind(shots);
            this.heating();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans:number,readonly serialNum:string){
            super(beans);
        }
        private steamMilk():void{
            console.log(`🥛 Steaming some milk`);
        }
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
               return{
                shots,
                hasMilk:true
               }         
        }
        
    }
         class SweetCoffeeMachine extends CoffeeMachine{
            protected extract(shots: number): CoffeeCup {
                   return{
                    shots,
                    hasMilk:false,
                    syrup:true,
                   }         
            }
             }
    const Lmachine = new CaffeLatteMachine(50,'2023sf');
    const latte= Lmachine.makeCoffee(2);
    console.log(latte);
    console.log(Lmachine.serialNum);
    console.log(`-----polymorphism------`);
    
    const SwMachine= new SweetCoffeeMachine(50);
    const SwCoffee=SwMachine.makeCoffee(3);
    console.log(SwCoffee);
    
}



