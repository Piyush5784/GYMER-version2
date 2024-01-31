import React from "react";

const ImgContainer = ({ src }) => {
    return <>
        <img class=" max-lg rounded-lg" style={{ width: "43.75rem", margin: "3.75rem" }} src={src} alt="image description" />
    </>;
};

export default ImgContainer;
