import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const listLink = [
    {
        id: 1,
        to: "/",
        title: "Home",
    },
    {
        id: 2,
        to: "/blog",
        title: "Blog",
    },
    {
        id: 3,
        to: "/profile",
        title: "Profile",
    },
];

const Nav = () => {
    return (
        <>
            <div className="flex items-center justify-center p-5 bg-white shadow-md gap-x-5">
                {listLink.length > 0 &&
                    listLink.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive ? "text-green-400" : ""
                            }
                        >
                            {item.title}
                        </NavLink>
                    ))}
            </div>
            <Outlet></Outlet>
        </>
    );
};

export default Nav;
