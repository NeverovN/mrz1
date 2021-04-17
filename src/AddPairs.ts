import createPairs from './CreatePairs'

function getInputValue(): string | undefined {
    const pairCountInputField = document.getElementById("pairCountInput") as HTMLInputElement | null;
    if (pairCountInputField !== null){
        const inputValue = pairCountInputField.value;
        return inputValue;
    }
}

function stringToNumber(val: string): number {
    if(Number.isNaN(Number.parseInt(val))){
        return 0;  // здесь стоит потом добавить сообщение
                   // об ошибке вместо возврата 0, т.к. пользователю
                   // не будет понятно, что поизошло
    }
    return Number.parseInt(val);
}



export default function addPairs() {
    const inputValue = getInputValue();
    if(typeof inputValue === "undefined"){
        console.log("WRONG INPUT");
        return;
    }
    const pairCount = stringToNumber(inputValue);
    return createPairs(pairCount);
}