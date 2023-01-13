{
    //절차 지향적으로 만들기 ! 

    type CoffeeCup ={
        shots:number;
        hasMilk: boolean;
    };
    const BEANS_GRAMM_PER_SHOT=7; //타입 추론가능.
    let coffeeBeans: number =0;


    function makeCoffee(shots:number):CoffeeCup{
        if(coffeeBeans<shots*BEANS_GRAMM_PER_SHOT){
            throw new Error('not enough coffee Beans!');
        }
        coffeeBeans -= shots* BEANS_GRAMM_PER_SHOT;
        return{
            shots,
            hasMilk:false,
        }
    }
    coffeeBeans=50;
    const coffee= makeCoffee(4);    
    console.log(coffee);
    
}