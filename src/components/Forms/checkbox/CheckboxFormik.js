import { useField } from "formik";
import React from "react";

const CheckboxFormik = ({ children, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col gap-3">
            <label className="cursor-pointer rounded-full">
                <input
                    type="checkbox"
                    id={props.name}
                    className="hidden"
                    {...field}
                    {...props}
                    checked={field.value}
                />

                <div className="flex items-center gap-x-3">
                    <div className="custom-checkbox flex items-center justify-center transition-all bg-white rounded-md">
                        <svg
                            width="12"
                            height="10"
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.7453 1.89733L3.93178 9.71087L0.254822 6.03391L1.17132 5.11741L3.93178 7.87137L10.8288 0.980835L11.7453 1.89733Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <label
                        htmlFor={props.name}
                        className="text-sm cursor-pointer"
                    >
                        {children}
                    </label>
                </div>
            </label>
            {meta.touched && meta.error && (
                <p className="text-sm text-red-500">{meta.error}</p>
            )}
        </div>
    );
};

export default CheckboxFormik;
