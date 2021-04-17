
export  function createPairs(count: number | void){
    if (typeof count === "number") {
        const arr: Array<JSX.Element[]> = Array(count);
        for(let i = 0; i < count; i++){
            arr.push([<div></div>]);
        }
        console.log(arr);
        const tsxArr  = arr.map((el, i) => {
            el = [(<input type="text" id={`pair${i}el1`} size={10}/>),
            (<input type="text" id={`pair${i}el2`} size={10}/>)
            ]
            console.log("el");
            return el;
        }
        );
        console.log(tsxArr);
        return tsxArr;
    }
}