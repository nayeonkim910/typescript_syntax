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

    class CoffeeMaker{
        //static은 상수목적이라 변경할 일 없음 
       private static BEANS_GRAMM:number = 7 //static인데도 class레벨에서 사용불가.
       private coffeeBeans:number;
        
       private constructor(beans:number){ //GRAMM정해서 머신만들기
        this.coffeeBeans= beans;
       }

       static makeCoffeeMuchine(beans:number){
            return new CoffeeMaker(beans);
       }    

       decideBeansGramm(gram:number){
        CoffeeMaker.BEANS_GRAMM = gram;
        console.log(this.coffeeBeans);
        
       }
       fillCoffeeBeans(beans:number){
        if(beans<=0){
            throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeans += beans;
       }
       makeLatte(shot:number):coffeeCup{ 
        if(this.coffeeBeans< shot* CoffeeMaker.BEANS_GRAMM){
            throw new Error('not enough coffeebeans! ');
        }
        this.coffeeBeans-= shot* CoffeeMaker.BEANS_GRAMM;
        return{ //커피만들기
            shots:shot,
            hasMilk:true,
        }
       }

       makeEspresso(shot:number):coffeeCup{
        if(this.coffeeBeans< shot* CoffeeMaker.BEANS_GRAMM){
            throw new Error('not enough coffeebeans! ');
        }
        this.coffeeBeans-= shot* CoffeeMaker.BEANS_GRAMM;
        return{
            shots:shot,
            hasMilk:false,
        }
       }
    }
    const deepCoffeefmaker =CoffeeMaker.makeCoffeeMuchine(50);
   
    const coffee= deepCoffeefmaker.makeEspresso(3);
    console.log(coffee);
    

    class User {
        private internalAge!:number;

        set age(age:number){
            this.internalAge = age;
         }
         get age():number{
            return this.internalAge;
         }

        get fullName():string{
            return `${this.firstName} ${this.lastName}`;
         }
       
        constructor(private firstName: string, private lastName:string){
        }
    }
    
    const me= new User('nayeon','kim');
    console.log(me);
    me.age = 44;
    console.log(me.age);
    

    
    
    
    
    
    
}