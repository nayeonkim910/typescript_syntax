{
    /**
     * public  자식 class, class instance 모두 접근가능. default 값임
     * private 해당 class 내부에서만, 접근가능
     * protected 자식 클래스에서 접근 가능
     * static  class level에서 이용가능. 
 */
    type coffeeCup = {
        shots:number;
        hasMilk:boolean;
    }

    class CoffeeMaker{
       //static은 상수목적이라 변경할 일 없음 class level에서 접근가능
       //private 추가하니까 직접 접근 ❌ 
       //메서드 통해서 접근 가능, class레벨에서 사용불가.
       private static BEANS_GRAMM:number = 7 
       private coffeeBeans:number;
        
       private constructor(beans:number){ 
        this.coffeeBeans= beans;
       }
       
       static makeCoffeeMuchine(beans:number){
            return new CoffeeMaker(beans);
       }    

       //private로 캡슐화 해둔 변수 <- ❗메서드통해서 접근가능
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


//-------------------------------getter/setter✅--------------------------
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
        //처음에 new생성자로 인자넣어서 만들때, 확정 됨
        constructor(private firstName: string, private lastName:string){
        }
    }
    
    const me= new User('nayeon','kim');
    console.log(me);
    console.log(me.fullName);
    me.age = 24;
    console.log(me.age);
    

    
    
    
    
    
    
}