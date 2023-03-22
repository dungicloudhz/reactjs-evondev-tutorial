import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogPageDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    console.log(slug);
    return (
        <div>
            Blog Page Detail
            <button
                onClick={() => navigate("/blog")}
                className="px-3 py-2 font-semibold text-white bg-blue-500 rounded-md"
            >
                Back
            </button>
        </div>
    );
};

export default BlogPageDetail;
