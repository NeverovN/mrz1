
function createGrid(colCount: number){ //just testing
    const grid: JSX.Element[][]= [[]];
    grid[0].push(<div></div>);

    for(let i: number = 0; i < colCount; i++){
        grid[0].push((<div>
            <text>{`pair ${i+1}`}</text>
        </div>));
    }

    for(let i: number = 1; i < 2* colCount; i++){
        grid.push([]);
        grid[i].push((<div>
            <text>{`tact ${i}`}</text>
        </div>))
        for(let j: number = 0; j < colCount; j++){
            grid[i].push((<div>
                <text>{`херь какая-то`}</text>
            </div>));
        }
    }

    const newGrid = grid.map(el => {
        return <div className="Rows">{el}</div>
    });
    return newGrid;
}

export default function countConveyor(pairCount: number){ //testing too
    const grid = createGrid(pairCount);
    return (<div className="Grid">{grid}</div>)
}