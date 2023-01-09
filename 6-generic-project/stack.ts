{


    //generic으로 Steck만들어보기
interface Stack<T>{
    size : number;
    push(value: T):void;
    pop():T;
}

type StackNode<T>= {
   value:T;
   next?: StackNode<T>;
}
class StackImpl<T> implements Stack<T>{
    private _size: number=0;
    private head?:StackNode<T>;

    get size(){
        return this._size;
    }
    push(value:T){
        const node:StackNode<T> ={value, next: this.head}; 
        this.head=node;
        this._size++;
        
    }
    pop():T {
        if(this.head==null){
            throw new Error('Stack is empty !');
        }
        const node = this.head;
        this.head =node.next; 
        this._size--;
        return node.value;
    }
    


}
 const Stack = new StackImpl();
 Stack.push('first');
 console.log(Stack);
 Stack.push(1234);
 console.log(Stack);
 Stack.push('second');
 console.log(Stack);
 Stack.push('333');
 console.log(Stack);
 while(Stack.size!==0){
     console.log(Stack.pop());
 }    
   
}