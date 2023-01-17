    
{   
    interface Either<T> {
        left: ()=> T;
        right: ()=> T;
    }
    //제네릭 사용하기 😀
    class chooseEither<T> implements Either<T>{
        constructor(
            private valueL:T,
            private valueR:T){
        }
        left= () => this.valueL;
        right= () => this.valueR;
    }

    const CE= new chooseEither(true,false);
    const leftValue = CE.left();
    const rightValue = CE.right();
    console.log(leftValue);
    console.log(rightValue);
    
}