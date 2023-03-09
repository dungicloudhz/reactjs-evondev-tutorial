import axios from "axios";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
    hits: [],
    loading: true,
    query: "",
    errorMessage: "",
    url: `https://hn.algolia.com/api/v1/search?query=''`,
};

const hackerNewsReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            // const newState = JSON.parse(JSON.stringify(state));
            return { ...state, hits: action.payload };
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        case "SET_ERROR":
            return { ...state, errorMessage: action.payload };
        case "SET_QUERY":
            return { ...state, query: action.payload };
        case "SET_URL":
            return { ...state, url: action.payload };
        default:
            break;
    }
};

const HackerNewsWithReducer = () => {
    const [state, dispatch] = useReducer(hackerNewsReducer, initialState);
    // const [hits, setHits] = useState([]);
    // const [query, setQuery] = useState("");
    // const [loading, setLoading] = useState(true);
    // const [errorMessage, setErrorMessage] = useState("");
    // const [url, setUrl] = useState(
    //     "https://hn.algolia.com/api/v1/search?query=''"
    // );

    const handleFetchData = useRef({});

    handleFetchData.current = async () => {
        dispatch({
            type: "SET_LOADING",
            payload: true,
        });
        try {
            // setLoading(true);
            const response = await axios.get(state.url);
            console.log(response.data.hits);
            dispatch({
                type: "SET_DATA",
                payload: response.data?.hits || [],
            });
            dispatch({
                type: "SET_LOADING",
                payload: false,
            });
            // setHits(data.data?.hits || []);
            // setLoading(false);
        } catch (error) {
            dispatch({
                type: "SET_LOADING",
                payload: false,
            });
            dispatch({
                type: "SET_ERROR",
                payload: `The error message ${error}`,
            });
            // setLoading(false);
            // setErrorMessage(`The error message ${error}`);
        }
    };

    useEffect(() => {
        handleFetchData.current();
    }, [state.url]);

    return (
        <div className="bg-white mx-auto mb-5 mt-5 p-5 rounded-lg shadow-md w-2/4">
            <div className="flex mb-5 gap-x-5">
                <input
                    type="text"
                    className="border border-gray-200 block w-full rounded-md p-5 transition-all focus:border-blue-400"
                    placeholder="Typing your keyword..."
                    defaultValue={state.query}
                    onChange={(e) =>
                        dispatch({
                            type: "SET_QUERY",
                            payload: `${e.target.value}`,
                        })
                    }
                />
                <button
                    className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
                    disabled={state.loading}
                    onClick={
                        () =>
                            dispatch({
                                type: "SET_URL",
                                payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
                            })
                        // setUrl(
                        //     `https://hn.algolia.com/api/v1/search?query=${query}`
                        // )
                    }
                >
                    Fetching
                </button>
            </div>
            {state.loading && (
                <div className="loading w-8 h-8 rounded-full mx-auto my-10 border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
            )}
            {!state.loading && state.errorMessage && (
                <p className="text-red-500 my-5">{state.errorMessage}</p>
            )}
            <div className="flex flex-wrap gap-5">
                {!state.loading &&
                    state.hits.length > 0 &&
                    state.hits.map((item, index) => {
                        if (!item.title || item.title.length <= 0) return null;
                        return (
                            <h3
                                key={item.points}
                                className="p-3 bg-gray-100 rounded-md"
                            >
                                {item.title}
                            </h3>
                        );
                    })}
            </div>
        </div>
    );
};

export default HackerNewsWithReducer;
