import { useField } from "formik";
import React from "react";

const InputFormik = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col gap-3 mb-5">
            <label htmlFor={props.id} className="cursor-pointer">
                {label}
            </label>
            <input
                {...props}
                {...field}
                className="p-4 border-gray-100 border outline-none rounded-lg bg-white focus:border-blue-500 transition-all"
            ></input>
            {meta.touched && meta.error ? (
                <p className="text-red-500 text-sm">{meta.error}</p>
            ) : null}
        </div>
    );
};

export default InputFormik;
