/**
 * Let's make a game 🕹
*/
{

    type Position ={
        x:number;
        y:number;
    }
    const position:Position={x:0, y:0};
    move('up');
    console.log('up',position); // { x: 0, y: 1}
    move('down');
    console.log('down',position); // { x: 0, y: 0}
    move('left');
    console.log('left',position); // { x: -1, y: 0}
    move('right');
    console.log('right',position); // { x: 0, y: 0}

    type Direction = 'up'|'down'| 'left'| 'right';
    
    function move(direc:Direction): void{
        switch(direc){
            case 'up':
                position.y +=1;
                break;
            case 'down':
                position.y -=1;
                break;
            case 'left':
                position.x -=1;
                break;
            case 'right':
                position.x +=1;
                break;
                default:
                    throw Error('unkwon direction!');
            }
    }
    
}




























