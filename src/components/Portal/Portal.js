import React, { useEffect } from "react";
import { createPortal } from "react-dom";

function createPortalWrapper() {
    const element = document.createElement("div");
    element.id = "portal-wrapper";
    return element;
}
const portalWrapperElement = createPortalWrapper();

const Portal = () => {
    useEffect(() => {
        document.body.appendChild(portalWrapperElement);
    }, []);
    const renderContent = <div></div>;
    return createPortal(renderContent, portalWrapperElement);
};

export default Portal;
