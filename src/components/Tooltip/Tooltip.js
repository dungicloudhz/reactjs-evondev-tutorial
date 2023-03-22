import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDom from "react-dom";

const ToolTip = ({ children, text }) => {
    const { hovered, nodeRef } = useHover();
    const [coords, setCoords] = useState({});
    return (
        <div>
            {hovered && (
                <ToolTipContent coords={coords}>{children}</ToolTipContent>
            )}
            <span
                className="relative font-semibold"
                ref={nodeRef}
                onMouseOver={(e) => {
                    console.log(nodeRef.current.getBoundingClientRect());
                    console.log(e.target.getBoundingClientRect());
                    setCoords(e.target.getBoundingClientRect());
                }}
            >
                {text}
            </span>
        </div>
    );
};
function ToolTipContent({ children, coords }) {
    if (typeof document === "undefined") return null;
    return ReactDom.createPortal(
        <p
            className="absolute z-10 inline-block p-3 text-white -translate-y-full bg-black rounded-xl -translate-x-2/4 max-w-[200px] text-center"
            style={{
                top: coords.top - coords.height / 2,
                left: coords.left + coords.width / 2,
            }}
        >
            {children}
        </p>,
        document.querySelector("body")
    );
}
export default ToolTip;

//1. Tạo component có tên tooltip
//2. Component này có props là children , props text
//3. Áp dụng portal để khi rê chuột vào text thì sẽ hiển thị tooltip content ở phía trên , và chính giữa
//4. Dùng kiến thức đã học getBoundingClientRect()
