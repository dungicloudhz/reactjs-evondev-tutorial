import React, { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";

const DropDownPortal = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [coords, setCoords] = useState({});
    const dropDownRef = useRef(null);

    useEffect(() => {
        const handleClickOutDropDown = (e) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setShowDropDown(false);
            }
        };
        document.addEventListener("click", handleClickOutDropDown);
        return () => {
            document.removeEventListener("click", handleClickOutDropDown);
        };
    }, []);
    const handleClick = (e) => {
        console.log(dropDownRef.current.getBoundingClientRect());
        setShowDropDown(!showDropDown);
        setCoords(dropDownRef.current.getBoundingClientRect());
    };
    return (
        <div className="relative w-full max-w-[400px]" ref={dropDownRef}>
            <div
                className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer "
                onClick={handleClick}
            >
                Selected
            </div>
            {showDropDown && <DropDownList coords={coords} />}
        </div>
    );
};

function DropDownList({ coords }) {
    if (typeof document === "undefined") return null;
    return ReactDom.createPortal(
        <div
            className="absolute left-0 w-full p-5 bg-white border border-gray-200 rounded-lg top-full"
            style={{
                left: coords.left,
                top: coords.top + coords.height + window.scrollY,
                width: coords.width,
            }}
        >
            <div className="p-5">Javascript</div>
            <div className="p-5">ReactJS</div>
            <div className="p-5">VueJS</div>
        </div>,
        document.querySelector("body")
    );
}

export default DropDownPortal;
