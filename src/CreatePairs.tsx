export default function createPairs(pairCount: number) {
    const pairs: JSX.Element[] = [];
    for (let i: number = 0; i < pairCount; i++) {
        pairs.push(<>
            <li><input type="text" id={`pair${i + 1}el1`} placeholder={`введите 1-ый элемент ${i + 1}-ой пары`}/></li>
            <li><input type="text" id={`pair${i + 1}el2`} placeholder={`введите 2-ой элемент ${i + 1}-ой пары`}/></li>
            <br/>
        </>
        );
    }

    return (<>
        <ul>{pairs}</ul>
        <input type="submit" />
    </>);
}