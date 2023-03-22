import React, { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../../hooks/useClickOutSide";

const DropDownHook = ({ control, setValue, dropdownLable, name, ...props }) => {
    const { show, setShow, nodeRef } = useClickOutSide();

    const handleClickDropDownItem = (e) => {
        setLabel(e.target.textContent);
        setValue(name, e.target.dataset.value);
        setShow(false);
    };

    const jobValue = useWatch({
        control,
        name: "job",
        defaultValue: "",
    });
    console.log(jobValue);
    const [label, setLabel] = useState(dropdownLable);
    useEffect(() => {
        if (jobValue === "") setLabel(dropdownLable);
    }, [jobValue]);
    return (
        <div className="relative" ref={nodeRef}>
            <div
                className="p-5 rounded-lg border border-x-gray-100 bg-white flex items-center justify-between cursor-pointer"
                onClick={() => setShow(!show)}
            >
                <span className="">{label}</span>
            </div>
            <div
                className={`absolute top-full left-0 w-full rounded-lg bg-white ${
                    show ? "" : "opacity-0 invisible"
                }`}
            >
                <div
                    className="p-5 cursor-pointer hover:bg-gray-100"
                    onClick={handleClickDropDownItem}
                    data-value="teacher"
                >
                    Teacher
                </div>
                <div
                    className="p-5 cursor-pointer hover:bg-gray-100"
                    onClick={handleClickDropDownItem}
                    data-value="developer"
                >
                    Developer
                </div>
                <div
                    className="p-5 cursor-pointer hover:bg-gray-100"
                    onClick={handleClickDropDownItem}
                    data-value="doctor"
                >
                    Doctor
                </div>
            </div>
        </div>
    );
};

export default DropDownHook;
