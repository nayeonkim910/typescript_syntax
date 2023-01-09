{
    //function_ generic
    //bad Ex 💩
    // function checkNotNull(arg:any | null):any{
        // if(arg==null){
            // throw new Error('not valid');
        // }
        // return arg;
    // }
    // const num = checkNotNull(123123);
    
    function checkNotNull<T>(arg:T | null):T{
        if(arg==null){
            throw new Error('not valid');
        }
        return arg;
    }
    const result = checkNotNull(123);
    const boal:boolean = checkNotNull(true);

}