import React, { useState } from "react";

const Input = () => {
    // const [fullname, setFullname] = useState("");
    // const [message, setMessage] = useState("");
    const [values, setValues] = useState({ fullname: "", email: "" });
    const [nameError, setNameError] = useState("");

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (values.fullname === "") {
            setNameError("Your full name is empty");
        }
    };

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    // const handleTextAreaChange = (e) => {
    //     setMessage(e.target.value);
    // }
    return (
        <div className="p-5">
            <form action="" className="flex gap-x-3" autoComplete="off">
                <div className="flex flex-col gap-y-3">
                    <input
                        type="text"
                        name="fullname"
                        className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
                        placeholder="Enter Your Name"
                        onChange={handleInputChange}
                    />
                    {nameError}
                </div>
                <div className="flex flex-col gap-y-3">
                    <input
                        type="email"
                        name="email"
                        className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
                        placeholder="Enter Your Email Address"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col gap-y-3">
                    <button
                        type="submit"
                        className="p-4 rounded-lg text-white bg-blue-500"
                        onClick={handleSubmitForm}
                    >
                        Submit
                    </button>
                </div>
                {/* <textarea
                name="message"
                className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
                placeholder="Enter Your Message"
                onChange={handleTextAreaChange}
            ></textarea> */}
            </form>
        </div>
    );
};

export default Input;
