{
    /**
     * public  자식 class, class instance 모두 접근가능.
     * private 해당 class 내부에서만, 접근가능
     * static  class level에서 이용가능. 
     * protected 자식 클래스에서 접근 가능
 */
    type coffeeCup = {
        shots:number;
        hasMilk:boolean;
    }


    interface CoffeeMaker{
        makeCoffee(shots: number):coffeeCup;
    }

    interface CommercialCoffeeMaker{
        makeCoffee(shots: number):coffeeCup;
        fillCoffeeBeans(beans:number):void;
        clean():void;
    }
    
    class CoffeeMachine implements CoffeeMaker,CommercialCoffeeMaker{
        //static은 상수목적이라 변경할 일 없음 
       private static BEANS_GRAMM:number = 7 //static인데도 class레벨에서 사용불가.
       private coffeeBeans:number;
       private constructor(beans:number){ //GRAMM정해서 머신만들기
        this.coffeeBeans= beans;
       }

       static makeCoffeeMuchine(beans:number){
            return new CoffeeMachine(beans);
       }    

            fillCoffeeBeans(beans:number){
             if(beans<=0){
                 throw new Error('value for beans should be greater than 0');
             }
             this.coffeeBeans += beans;
             console.log(`remaining Beans= ${this.coffeeBeans}`);
             
            }

             clean(){
              console.log('🧗 cleaning....');
             }

             private grind(shots:number){
              console.log(`grinding...for coffee ☕`);
              this.coffeeBeans -=shots*CoffeeMachine.BEANS_GRAMM;
              if(this.coffeeBeans<0){
                  throw new Error('value for beans should be greater than 0');
              }
             }
             private heating(){
              console.log(`heating now...♨️`);
             }

             private extract(shots:number):coffeeCup{
                 console.log(` extract one shot 🔴`);

               return{
                   shots,
                   hasMilk:false,
               }
              }

             makeCoffee(shots:number):coffeeCup{
              this.grind(shots);
              this.heating();
              return this.extract(shots);
             }
     
    }
    //1️⃣ class Type
    console.log('--1---------class Type---------');
    const originmaker:CoffeeMachine =CoffeeMachine.makeCoffeeMuchine(50);
    originmaker.fillCoffeeBeans(20);
    originmaker.clean();
    originmaker.makeCoffee(2);

    //2️⃣ interface CoffeeMaker type
    console.log(' --2----interface CoffeeMaker type-------');
    const maker:CoffeeMaker = CoffeeMachine.makeCoffeeMuchine(40);
    maker.makeCoffee(3);


    //3️⃣ interface CommercialCoffeeMaker type
    console.log('---3--CommercialCoffeeMaker type----');
    const commercial:CommercialCoffeeMaker = CoffeeMachine.makeCoffeeMuchine(30);
    commercial.makeCoffee(2);
    commercial.fillCoffeeBeans(2);
    commercial.clean();
    

    //4️⃣ class의 constructor인자로서 interface를 받을 수 있음.✨
    class Amateur{
        constructor(private maker:CoffeeMaker){}
        makeCoffee(){
            this.maker.makeCoffee(2);
            console.log("amateur's coffee 😂");
            
        }
    }
    class Barista{
        constructor(private maker:CommercialCoffeeMaker){}
        makeCoffee(){
            this.maker.clean();
            this.maker.makeCoffee(2);
            this.maker.fillCoffeeBeans(20);
            console.log("Barista's coffee 😃✨");
        }
    }
    console.log('-----------Amateur---------');
    const ama = new Amateur(originmaker);
    ama.makeCoffee();

    console.log('-----------Barista---------');
    const pro = new Barista(originmaker);
    pro.makeCoffee();
}