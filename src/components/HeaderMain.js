import React from "react";
import { useAuth } from "./contexts/authContext";
import { useGallery } from "./contexts/galleryContext";

const HeaderMain = () => {
    const { user, setUser } = useAuth();
    const { photos, cartItems } = useGallery();

    console.log(photos);

    const favoriteCount =
        photos.length > 0
            ? photos.filter((item) => item.isLike === true)?.length
            : 0;
    const cartNumberItems = cartItems.length > 0 ? cartItems.length : 0;

    return (
        <div className="flex items-center justify-center p-4 bg-white shadow-md">
            {user ? (
                <div className="flex items-center gap-x-3 ">
                    <img
                        // src="https://images.unsplash.com/photo-1678653302233-621c210c3a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        src={user.avatar}
                        className="object-cover w-10 h-10 rounded-full"
                        alt=""
                    />
                    <span className="text-sm font-medium">
                        Welcome back! <strong>{user.fullname}</strong>
                    </span>
                </div>
            ) : (
                <span className="text-sm font-medium">Welcome</span>
            )}
            <div className="flex items-center gap-5 ml-auto mr-5">
                <span className="relative w-8">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="max-w-full "
                    >
                        <ellipse
                            cx="23.9584"
                            cy="42.7083"
                            rx="3.125"
                            ry="3.125"
                            fill="#292D32"
                        />
                        <circle
                            cx="36.4584"
                            cy="42.7083"
                            r="3.125"
                            fill="#292D32"
                        />
                        <path
                            d="M8.33333 18.75L6.25 18.75"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M10.4167 31.25L8.33337 31.25"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M10.4167 25H4.16669"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M14.0873 13.5417L18.7094 34.2435C18.8625 34.9291 19.4709 35.4167 20.1734 35.4167H39.7473C40.4498 35.4167 41.0582 34.9291 41.2113 34.2435L45.4255 15.3685C45.6347 14.4314 44.9218 13.5417 43.9615 13.5417H14.0873ZM14.0873 13.5417L12.4042 7.35616C12.2265 6.70315 11.6336 6.25 10.9568 6.25H4.16669"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-pink-600 rounded-full top-1 translate-x-2/4">
                        {cartNumberItems || 0}
                    </span>
                </span>
                <span className="relative w-8">
                    <svg
                        className="max-w-full "
                        width="42"
                        height="38"
                        viewBox="0 0 42 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21 37.7499C19.6563 36.5582 18.1375 35.3186 16.5313 33.9999H16.5104C10.8542 29.3749 4.44376 24.1416 1.61251 17.8707C0.682335 15.8743 0.18939 13.7022 0.16665 11.4999C0.160438 8.47799 1.37245 5.58112 3.52877 3.464C5.6851 1.34688 8.60372 0.188223 11.625 0.249901C14.0847 0.253786 16.4913 0.964653 18.5583 2.29782C19.4666 2.88734 20.2884 3.60043 21 4.41657C21.7156 3.60364 22.5376 2.89096 23.4438 2.29782C25.5099 0.96439 27.916 0.253481 30.375 0.249901C33.3963 0.188223 36.3149 1.34688 38.4712 3.464C40.6276 5.58112 41.8396 8.47799 41.8334 11.4999C41.8121 13.7058 41.3191 15.8816 40.3875 17.8812C37.5563 24.152 31.1479 29.3832 25.4917 33.9999L25.4708 34.0166C23.8625 35.327 22.3458 36.5666 21.0021 37.7666L21 37.7499ZM11.625 4.41657C9.68441 4.39228 7.81266 5.13499 6.41667 6.48323C5.07164 7.80441 4.31991 9.61458 4.33316 11.4999C4.35694 13.1051 4.72048 14.6871 5.40001 16.1416C6.73649 18.8472 8.53982 21.2958 10.7271 23.3749C12.7917 25.4582 15.1667 27.4749 17.2208 29.1707C17.7896 29.6395 18.3688 30.1124 18.9479 30.5853L19.3125 30.8832C19.8688 31.3374 20.4438 31.8082 21 32.2707L21.0271 32.2457L21.0396 32.2353H21.0521L21.0708 32.2207H21.0813H21.0917L21.1292 32.1895L21.2146 32.1207L21.2292 32.1082L21.2521 32.0916H21.2646L21.2833 32.0749L22.6667 30.9395L23.0292 30.6416C23.6146 30.1645 24.1938 29.6916 24.7625 29.2228C26.8167 27.527 29.1938 25.5124 31.2583 23.4187C33.4459 21.3407 35.2493 18.8926 36.5854 16.1874C37.2772 14.7203 37.646 13.1218 37.6668 11.4999C37.6754 9.6204 36.924 7.81718 35.5833 6.4999C34.19 5.14557 32.318 4.39674 30.375 4.41657C28.004 4.39642 25.7374 5.39025 24.1458 7.14782L21 10.7728L17.8542 7.14782C16.2626 5.39025 13.996 4.39642 11.625 4.41657Z"
                            fill="black"
                        />
                    </svg>
                    <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-pink-600 rounded-full translate-x-2/4">
                        {favoriteCount || 0}
                    </span>
                </span>
            </div>
            <button
                className="p-2 ml-auto text-black bg-gray-300 rounded-md"
                onClick={() => setUser(null)}
            >
                Sign out
            </button>
        </div>
    );
};

export default HeaderMain;
