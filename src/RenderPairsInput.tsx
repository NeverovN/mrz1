
export default function renderPairsInput(args: any) {
    console.log(args);
    if (typeof args[0] === "undefined"){
        return (<div></div>);
    }
    return args;
}