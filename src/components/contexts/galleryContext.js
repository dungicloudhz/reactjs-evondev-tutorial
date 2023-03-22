import { createContext, useContext, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const GalleryContext = createContext();

const fakeData = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1678653302233-621c210c3a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        isLike: false,
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1678653300204-75de70535454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        isLike: false,
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1678653300204-75de70535454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        isLike: false,
    },
    {
        id: 4,
        url: "https://plus.unsplash.com/premium_photo-1661902404932-334c45f3db3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        isLike: false,
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1678653300286-94e7cce4d826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        isLike: false,
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1678811118426-7a445633d350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        isLike: false,
    },
];

function GalleryProvider(props) {
    const { storedValue, setValue } = useLocalStorage("photos", fakeData);
    const { storedValue: listCart, setValue: setListCart } = useLocalStorage(
        "cartItem",
        []
    );
    console.log(storedValue);
    const [photos, setPhotos] = useState(storedValue);
    const [cartItems, setCartItems] = useState(listCart);
    const [favoriteList, setFavoriteList] = useState([]);

    function toggleFavorite(photoId) {
        const updatedArray = photos.map((photo) => {
            if (photo.id === photoId) {
                return { ...photo, isLike: !photo.isLike };
            }
            return photo;
        });
        setPhotos(updatedArray);
        setValue(updatedArray);
    }

    function addToCart(newItem) {
        setCartItems((prevItems) => {
            const isExisted = prevItems.some((item) => item.id === newItem.id);
            if (isExisted) {
                setListCart([...prevItems]);
                return [...prevItems];
            }
            setListCart([...prevItems, newItem]);
            return [...prevItems, newItem];
        });
    }

    function removeToCart(photoId) {
        setCartItems((prevItems) => {
            const result = prevItems.filter((item) => item.id !== photoId);
            setListCart(result);
            return result;
        });
    }

    const value = {
        photos,
        setPhotos,
        cartItems,
        setCartItems,
        favoriteList,
        setFavoriteList,
        toggleFavorite,
        addToCart,
        removeToCart,
    };

    return (
        <GalleryContext.Provider
            value={value}
            {...props}
        ></GalleryContext.Provider>
    );
}

function useGallery() {
    const context = useContext(GalleryContext);
    if (typeof context === "undefined")
        throw new Error("useGallery must be used within GalleryProvider");
    return context;
}

export { GalleryProvider, useGallery };
