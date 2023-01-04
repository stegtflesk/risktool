import React, { PropsWithChildren } from "react";
import {RiskMatrix} from "../Assets/RiskMatrix";
import {Cell} from "../Assets/Cell";

class GridComponent extends React.Component {

    testGrid = new RiskMatrix();

    render() {
        this.testGrid.cells = [
            new Cell({id: 1, label: 'hey'}), 
        ];

        const renderbleList = [];

        const cellsList = this.testGrid.cells.map((cell) => {
            return <div>{cell.label}</div>
        })
        return (
            <div className="grid grid-cols-4 gap-4">
                {cellsList}
            </div>
        );
    }
}

export default GridComponent;