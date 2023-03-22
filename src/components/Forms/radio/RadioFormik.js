import { useField } from "formik";
import React from "react";

const RadioFormik = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
        <div className="flex items-center gap-x-3">
            <label className=" bg-white cursor-pointer custom-radio rounded-full">
                <input
                    type="radio"
                    {...field}
                    className="hidden"
                    {...props}
                    checked={props.checked}
                />
                <div className="w-full h-full bg-white rounded-full"></div>
            </label>
            <span>{label}</span>
        </div>
    );
};

export default RadioFormik;
