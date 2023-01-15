{

    type CoffeeCup={
        shots: number;
        hasMilk: boolean;
    }
    class CoffeeMuchine{
        private static BEANS_GRAMM_PER_SHOT = 7;
        private beans:number;
        constructor(beans:number){
            this.beans=beans;  //기계에 넣을 커피원두
        }
        makeCoffee(shots:number){
            if(this.beans<shots*CoffeeMuchine.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffeeBeans! 😢');
            }
            this.beans -= shots* CoffeeMuchine.BEANS_GRAMM_PER_SHOT;
            console.log(this.beans);
            return{
                shots,
                hasMilk:false,
            }
        }
    }
    const CMuchine = new CoffeeMuchine(50);
    console.log(CMuchine);
    const coffee= CMuchine.makeCoffee(2); 
    console.log(coffee);
    
}