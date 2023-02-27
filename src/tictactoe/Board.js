import Cell from "./Cell";

function Board(props) {
    return (
        <div className="game-board">
            {props.cells.map((item, index) => (
                <Cell
                    key={index}
                    value={item}
                    onClick={() => props.onClick(index)}
                    className={
                        item === "X" ? "is-x" : item === "O" ? "is-o" : ""
                    }
                ></Cell>
            ))}
        </div>
    );
}

export default Board;
