import React from "react";
import { useGallery } from "../contexts/galleryContext";

const CartList = () => {
    const { cartItems, removeToCart } = useGallery();
    return (
        <div className="flex flex-col items-start gap-5 px-5 py-10">
            {cartItems.length > 0 &&
                cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="inline-flex items-center justify-between gap-x-5"
                    >
                        <img
                            src={item.url}
                            className="object-cover w-10 h-10 rounded-full"
                            alt=""
                        />
                        <button
                            className="p-3 text-sm font-semibold text-white bg-red-400 rounded-lg"
                            onClick={() => removeToCart(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
        </div>
    );
};

export default CartList;
