{
    //Stack 구조 만들기 
    //Linked Array형싱
    //interface는 계약서 같은 것으로 생각! 
    interface Stack {
        readonly size:number;
        push(value:string):void;
        pop():string;
    }

    type Node ={
       readonly value:string;
       readonly nextNode?:Node;  
        //nextNode에 Node가 들어올 수도 있고, 
        //undefined가 올 수 도 있음. 
    }

    class StackImpl implements Stack {
        private _size:number=0;
        private head?:Node;
        //외부에서 read만 가능하도록! getter생성.
        get size(){ 
            return this._size;
        }

             push(value: string): void {
                //node생성
                 const node:Node = {
                     value:value,
                     nextNode: this.head,
                 }
                 this.head= node;
                 this._size++;
             }

             pop(): string {                
                 const node = this.head;
                 if(node== null){
                    throw new Error('head is null');
                 }
                 this.head= node.nextNode;
                 this._size--;
                 return node.value;
             }

    
    }

    const STACK = new StackImpl();
    STACK.push('처음');    
    STACK.push('중간');    
    STACK.push('마지막입장');
    while(STACK.size>0){
        console.log(STACK.pop());
    }
        

}