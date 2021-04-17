export default function onPairClick(): number | void {
    const input = document.getElementById("pairCountInput") as HTMLInputElement;
    const inputValue: string = input.value;

    if (!Number.isNaN(Number.parseInt(inputValue))) {
        return  Number.parseInt(inputValue);
    }
}