import React from "react";
import { useController } from "react-hook-form";

const CheckboxHook = ({ control, text, ...props }) => {
    const { field } = useController({
        control,
        name: props.name,
    });
    return (
        <label className="bg-white cursor-pointer rounded-full">
            <input
                type="checkbox"
                {...field}
                id={props.name}
                className="hidden"
                {...props}
                checked={field.value || false}
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
                <label htmlFor={props.name} className="text-sm cursor-pointer">
                    {text}
                </label>
            </div>
        </label>
    );
};

export default CheckboxHook;
