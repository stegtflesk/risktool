import { Cell } from "./Cell";

export class RiskMatrix {
    private _cells:  Cell[] = [];
    private _size!: { x: number; y: number; }; // @TODO: Create vector2 object

    public get size() {
        return this._size;
    }
    
    public set size(theSize: {x: number, y: number}) {
        this._size = theSize;
    }

    public get cells() {
        return this._cells;
    }

    public set cells(theCells: Cell[]) {
        this._cells = theCells;
    }

    public getCellLabels() {

        const renderableArray: String[] = [];

        this._cells.forEach((cell) => {
            renderableArray.push(cell.label)
        })

        return renderableArray;
    }
}