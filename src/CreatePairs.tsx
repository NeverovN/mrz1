export default function createPairs(pairCount: number) {
    const pairs: JSX.Element[][] = [];
    for (let i: number = 0; i < pairCount; i++) {
        pairs.push([
            <input type="text" id={`pair${i + 1}el1`} />,
            <input type="text" id={`pair${i + 1}el2`} />
        ]);
    }
    return pairs;
}