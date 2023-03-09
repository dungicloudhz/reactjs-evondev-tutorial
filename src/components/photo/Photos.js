import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = (page) => {
    return axios
        .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
        .then((rep) => rep.data)
        .catch((err) => console.log(err));
};

const Photos = () => {
    const [randomPhoto, setRandomPhoto] = useState([]);
    const [nextPage, setNextPage] = useState(1);
    // useEffect(callback, [depenencies])

    const handleLoadMore = () => {
        getRandomPhotos(nextPage).then((images) => {
            setRandomPhoto([...randomPhoto, ...images]);
            setNextPage(nextPage + 1);
        });
    };

    useEffect(() => {
        handleLoadMore();
    }, []);
    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                {randomPhoto.length > 0 &&
                    randomPhoto.map((item) => (
                        <div
                            key={item.id}
                            className="p-3 bg-white shadow-md rounded-lg"
                        >
                            <img
                                src={item.download_url}
                                alt={item.author}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
            </div>
            <div className="text-center py-4">
                <button
                    onClick={handleLoadMore}
                    className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg"
                >
                    Load more
                </button>
            </div>
        </div>
    );
};

export default Photos;
