
function createGrid(colCount: number){ //just testing
    const grid: string[][]= [[]];
    grid[0].push("");

    for(let i: number = 0; i < colCount; i++){
        grid[0].push(`pair ${i+1}`);
    }

    for(let i: number = 1; i < 2* colCount; i++){
        grid.push([]);
        grid[i].push(`tact ${i}`);
        for(let j: number = 0; j < colCount; j++){
            grid[i].push(`херь какая-то`);
        }
    }

    console.log(grid);

    const newGrid = grid.map((el, index) => {
        const newEl = el.map(el => index === 0 ? <th>{el}</th> : <td>{el}</td>);
        return (<tr>{newEl}</tr>);
    });

    return (<table>{[newGrid]}</table>);
}

export default function countConveyor(pairCount: number){ //testing too
    const grid = createGrid(pairCount);
    return (<div className="Grid">{grid}</div>)
}