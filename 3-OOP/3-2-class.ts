{
    type CoffeeCup = {
        shots:number;
        hasMilk:boolean;
    };

    class CoffeeMaker{
        static BEANS_GRAMM_PER_SHOT:number = 7;
        //클래스에서 딱 한번 정의하는 값 ,obj만들때마다 중복생성되니까 메모리 낭비.
        //static붙이면 instance에서는 생성되지않음.
        //클래스 자체의 변수가 되니까 (this.변수)❌ (클래스명.변수)⭕
       private coffeeBeans: number; //instance level
        constructor(beans:number){
            this.coffeeBeans = beans;

        }
        static makeMachine(beans:number):CoffeeMaker{
            return new CoffeeMaker(beans);
        }
        //클래스 레벨에서 사용하고싶은 함수 static 붙이기
        //static안 붙이면, new로 생성자 만들어서 instance level에서 .으로 꺼내 써야함. 
        makeCoffee(shots:number):CoffeeCup{
            if(this.coffeeBeans<shots*CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
                return{
                    shots,
                    hasMilk:false,
                }
            }
    }
    const coffeMachine = new CoffeeMaker(22);
    console.log(coffeMachine);
    // console.log(coffeMachine.makeCoffee(2));      
    // const cm = CoffeeMaker.makeMachine(7);
    // console.log(cm);
    // console.log(cm.makeCoffee(1));
    
}