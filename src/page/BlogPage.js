import React from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
    const [searchValue, setSearchValue] = useSearchParams();
    console.log(searchValue.get("search"));
    return <div>Blog Page</div>;
};

export default BlogPage;
