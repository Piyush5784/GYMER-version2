import React from "react";

const ImgContainer = ({ src }) => {
    return <>
        <img className="w-[400px] md:w-[700px] m-[3.75rem] ml-7 rounded-xl max-lg lg:m-0 " src={src} alt="image description" />
    </>;
};

export default ImgContainer;
