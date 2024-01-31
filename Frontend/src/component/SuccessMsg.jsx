import React from "react";

import Success from "../assets/successGif.gif"
const SuccessMsg = ({ text }) => {
    return <>
        <div className="flex items-center justify-center h-[50px] border rounded-[20px]">
            <img src={Success} width={"100px"} height={"50px"} />
            <p className="mt-5 mr-5 mb-5">{text}</p>

        </div>
    </>;
};

export default SuccessMsg;
