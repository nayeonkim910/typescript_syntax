{
    //여러가지 type을 받을 수 있는 Stack만들어보자 ✨
 
    interface Stack<T>{
        readonly size:number,
        push(value:T):void
        pop():T;
    }
    type Node<T> ={
       readonly value:T,
       readonly next?:Node<T>,
    }
    class StackImpl<T> implements Stack<T>{
        private _size:number=0;
        private head?:Node<T>;
        get size(){
            return this._size;
        }
        constructor(private limitSize:number){}
        push(value: T): void {
            this._size++;
            if(this.limitSize<this.size){
               throw  new Error('stack is fulled');
            }
            //node생성 
            const node:Node<T> = {value, next:this.head};
            this.head = node;
        }
        pop():T {
            if(this.head== null){
                throw new Error('head is Null');
            }
            const node = this.head;
            this.head =node.next;
            this._size--;
            return node.value;
        }
    }
    const textNode= new StackImpl<string>(5);
    textNode.push('첫번째');
    textNode.push('두번째');
    textNode.push('세번째');
    console.log(textNode);
    

    while(textNode.size!==0){
        console.log(textNode.pop());
    }
}