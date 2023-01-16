{
    //OOP로 커피 머신 구현해보기 

    type CoffeeCup={
        shots:number,
        hasMilk:boolean,
    }

    class CoffeeMachine{
        //속성, 멤버변수 ✔️
        //멤버변수 선언시, 키워드let,const적을 필요없음 
        //멤버변수 사용시, this.써줘야함.
        private coffeeBeans:number=0;
        static BEANS_GRAMM_PER_SHOT:number=6; 
        
        //constructor은 instance만들때 마다 생성 됨✔️ 
        constructor(initialBeans:number){
            this.coffeeBeans= initialBeans;
        }


        addCoffeeBeans(beans:number){
            this.coffeeBeans+=beans;
        }
        static makeMachine(initialBeans:number){
             return new CoffeeMachine(initialBeans);
        }

        makeCoffee(shots:number):CoffeeCup{

            if(this.coffeeBeans<shots*CoffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffeeBeans....');
            }
            this.coffeeBeans-=shots* CoffeeMachine.BEANS_GRAMM_PER_SHOT;
            console.log('Coffee is ready ☕~');
            return{
                shots,
                hasMilk:false,
            }
        }
    }
    const coffeeMaker = new CoffeeMachine(40);
    const maker = CoffeeMachine.makeMachine(33);
    maker.makeCoffee(2);
    const coffee =  coffeeMaker.makeCoffee(2);
    console.log(coffee);
    coffeeMaker.addCoffeeBeans(40);
    console.log(coffeeMaker);
    
    
}