import React, { useEffect, useRef, useState } from "react";

const DropDown = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const dropDownRef = useRef(null);
    useEffect(() => {
        const handleClickOutDropDown = (e) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setShowDropDown(false);
            } else {
                setShowDropDown(true);
            }
        };
        document.addEventListener("click", handleClickOutDropDown);
        return () => {
            document.removeEventListener("click", handleClickOutDropDown);
        };
    }, []);

    return (
        <div className="relative w-full max-w-[400px]" ref={dropDownRef}>
            <div
                className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer "
                onClick={() => setShowDropDown(!showDropDown)}
            >
                Selected
            </div>
            {showDropDown && (
                <div className="p-5 border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
                    <div className="p-5">Javascript</div>
                    <div className="p-5">ReactJS</div>
                    <div className="p-5">VueJS</div>
                </div>
            )}
        </div>
    );
};

export default DropDown;
