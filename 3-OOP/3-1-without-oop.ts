{
     //절차 지향적으로 만들기 ! 
     //shots받아서 커피만드는 머신

 type CoffeeCup ={
    shot:number,
    hasMilk:boolean,
 }

 //전역변수 생성해두고
 let coffeeBeans:number=0;
 const BEANS_GRAMM_PER_SHOT:number=5;

 //메서드 안에서 전역변수 가져다 쓰기
 function AddBeans(Beans:number){
    coffeeBeans=Beans;
 }

 //메서드 안에서 전역변수 가져다 쓰기
 function CoffeeMaker(shots:number):CoffeeCup{
    if(coffeeBeans<shots*BEANS_GRAMM_PER_SHOT){
        throw new Error('Not enough coffeeBeans...');
    }
    coffeeBeans -= shots*BEANS_GRAMM_PER_SHOT;
    console.log(`${shots}shot Coffee maked...☕`);
    console.log(`remainder ${coffeeBeans}`);
    return {
        shot:shots,
        hasMilk:false,
    }
 }
 AddBeans(40);
const coffee= CoffeeMaker(2);
console.log(coffee);

}