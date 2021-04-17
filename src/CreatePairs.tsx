export default function createPairs(pairCount: number) {
    const pairs: JSX.Element[] = [];
    for (let i: number = 0; i < pairCount; i++) {
        pairs.push(<>
            <li><input type="text" id={`pair${i + 1}el1`} /></li>
            <li><input type="text" id={`pair${i + 1}el2`} /></li>
        </>
        );
    }

    return (<>
        <ul>{pairs}</ul>
        <input type="submit" />
    </>);
}