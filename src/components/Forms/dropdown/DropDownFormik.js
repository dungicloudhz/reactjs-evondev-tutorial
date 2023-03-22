import { useField } from "formik";
import React, { useEffect, useState } from "react";
import useClickOutSide from "../../../hooks/useClickOutSide";

const DropDownFormik = ({
    labelText,
    setValue,
    dropdownLable,
    name,
    ...props
}) => {
    const { show, setShow, nodeRef } = useClickOutSide();

    const handleClickDropDownItem = (e) => {
        setValue(name, e.target.dataset.value);
        setLabel(e.target.textContent);
        setShow(false);
    };
    const [field, meta] = useField({ name });

    const [label, setLabel] = useState(dropdownLable);
    useEffect(() => {
        if (field.value === "") setLabel(dropdownLable);
    }, [field.value]);
    return (
        <div className="flex flex-col gap-3 mb-5">
            <label className="cursor-pointer">{labelText}</label>
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
            {meta.touched && meta.error && (
                <p className="text-sm text-red-500">{meta.error}</p>
            )}
        </div>
    );
};

export default DropDownFormik;
