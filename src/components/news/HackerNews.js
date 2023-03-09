import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

//

const HackerNews = () => {
    const [hits, setHits] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [url, setUrl] = useState(
        "https://hn.algolia.com/api/v1/search?query=''"
    );

    const handleFetchData = useRef({});

    handleFetchData.current = async () => {
        try {
            setLoading(true);
            const data = await axios.get(
                `https://hn.algolia.com/api/v1/search?query=${query}`
            );

            setHits(data.data?.hits || []);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setErrorMessage(`The error message ${error}`);
        }
    };

    useEffect(() => {
        handleFetchData.current();
    }, [url]);

    return (
        <div className="bg-white mx-auto mb-5 mt-5 p-5 rounded-lg shadow-md w-2/4">
            <div className="flex mb-5 gap-x-5">
                <input
                    type="text"
                    className="border border-gray-200 block w-full rounded-md p-5 transition-all focus:border-blue-400"
                    placeholder="Typing your keyword..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
                    onClick={() =>
                        setUrl(
                            `https://hn.algolia.com/api/v1/search?query=${query}`
                        )
                    }
                >
                    Fetching
                </button>
            </div>
            {loading && (
                <div className="loading w-8 h-8 rounded-full mx-auto my-10 border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
            )}
            {!loading && errorMessage && (
                <p className="text-red-500 my-5">{errorMessage}</p>
            )}
            <div className="flex flex-wrap gap-5">
                {!loading &&
                    hits.length > 0 &&
                    hits.map((item, index) => (
                        <h3
                            key={item.points}
                            className="p-3 bg-gray-100 rounded-md"
                        >
                            {item.title}
                        </h3>
                    ))}
            </div>
        </div>
    );
};

export default HackerNews;
