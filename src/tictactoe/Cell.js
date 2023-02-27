import React from "react";

function Cell(props) {
    const { value, onClick } = props;

    return (
        <div className={`game-cell ${props.className}`} onClick={onClick}>
            {value}
        </div>
    );
}

export default Cell;
