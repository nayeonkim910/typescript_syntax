{
    //Type any를 사용하니까 타입 보장 ❌ 타입 정보 알 수없음 
    // function CheckNotnull(argu:any|null):any{
        // if(argu==null){
            // throw new Error('🤢  is Null');
        // }
        // return argu;
    // }
    // console.log(CheckNotnull(12));
    // console.log(CheckNotnull(null));
    // 
    


    //✅ 제네릭 사용하기 ✨
    //Type 유연하게 결정됨 
    function CheckNull<T> (argu:T|null):T{
        if(argu==null){
            throw new Error('is Null ------');
        }
        return argu;
    } 
    const num:number =CheckNull(12);
    const bool:boolean = CheckNull(true);
    console.log(num);
    console.log(bool);
    console.log(CheckNull(null));
}
