import { Fragment, useState } from "react";
import { AuthProvider } from "./components/contexts/authContext";
import { GalleryProvider } from "./components/contexts/galleryContext";
import CartList from "./components/gallery/CartList";
import PhotoList from "./components/gallery/PhotoList";
import HeaderMain from "./components/HeaderMain";

import { Routes, Route } from "react-router-dom";
import Nav from "./page/Nav";
import BlogPage from "./page/BlogPage";
import ProfilePage from "./page/ProfilePage";
import BlogPageDetail from "./page/BlogPageDetail";

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Nav></Nav>
                        </>
                    }
                >
                    <Route path="/" element={<>Home Page</>}></Route>
                    <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
                    <Route
                        path="/blog/:slug"
                        element={<BlogPageDetail></BlogPageDetail>}
                    ></Route>
                    <Route
                        path="/profile"
                        element={<ProfilePage></ProfilePage>}
                    ></Route>
                </Route>
                <Route path="*" element={<>This is 404 page</>}></Route>
            </Routes>
        </div>
    );
}

export default App;
// const [showModal, setShowModal] = useState(false);
// <Fragment>
//     <AuthProvider>
//         <GalleryProvider>
//             <HeaderMain></HeaderMain>
//             <PhotoList />
//             <CartList></CartList>
//         </GalleryProvider>
//     </AuthProvider>
// </Fragment>

{
    /* <div className="relative z-0">
                <Modal
                    open={showModal}
                    handleClose={() => setShowModal(false)}
                ></Modal>
            </div>
            <button
                className="p-4 m-3 text-white bg-blue-500 rounded-lg"
                onClick={() => setShowModal(true)}
            >
                Show Modal
            </button> */
}

{
    /* <div className="p-5">
                {/* <RegisterHook></RegisterHook> */
}
{
    /* <RegisterFormik></RegisterFormik> */
}
{
    /* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                fugiat explicabo, eligendi numquam facere quasi necessitatibus
                cupiditate quaerat nam consequuntur dolor non ipsum sequi
                aperiam earum officiis exercitationem sed atque? */
}
{
    /* </div> */
}
{
    /* <div className="overflow-hidden">
                <DropDownPortal />
            </div> */
}
{
    /* <div className="p-16 mt-16 overflow-hidden">
                <Tooltip text="Hover me">This is a tooltip content</Tooltip>
            </div> */
}
{
    /* <Portal></Portal> */
}
