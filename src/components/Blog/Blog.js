import React, { useEffect, useRef } from "react";
import useHover from "../../hooks/useHover";
import useLinkNewTab from "../../hooks/useLinkNewTab";

const Blog = () => {
    const { contentRef } = useLinkNewTab();
    const { hovered, nodeRef } = useHover();

    return (
        <div className="entry-content" ref={contentRef}>
            <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                nihil delectus aut hic distinctio maiores?{" "}
                <a
                    href="https://google.com"
                    className={`underline ${hovered ? "text-green-400" : ""}`}
                    ref={nodeRef}
                >
                    google.com
                </a>
                ?
            </p>
            <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                nihil delectus aut hic distinctio maiores?{" "}
                <a href="https://google.com" className="underline">
                    google.com
                </a>
                ?
            </p>
            <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                nihil delectus aut hic distinctio maiores?{" "}
                <a href="https://google.com" className="underline">
                    google.com
                </a>
                ?
            </p>
        </div>
    );
};

export default Blog;
