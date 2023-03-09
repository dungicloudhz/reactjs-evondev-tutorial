import React, { useEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
    const [text, setText] = useState("");
    const textareaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState("auto");
    // const [textareaWrapperHeight, setTextareaWrapperHeight] = useState("auto");

    const handleChange = (e) => {
        setText(e.target.value);
        setTextareaHeight("auto");
        // setTextareaWrapperHeight(`${textareaRef?.current?.scrollHeight}px`);
    };

    useEffect(() => {
        setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
        // setTextareaWrapperHeight(`${textareaRef?.current?.scrollHeight}px`);
    }, [text]);

    return (
        <div className="p-5">
            <textarea
                className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-400 outline-none focus:border-blue-400 resize-none"
                placeholder="Please enter your content ..."
                value={text}
                ref={textareaRef}
                style={{
                    height: textareaHeight,
                }}
                onChange={handleChange}
            ></textarea>
        </div>
    );
};

export default TextAreaAutoResize;
