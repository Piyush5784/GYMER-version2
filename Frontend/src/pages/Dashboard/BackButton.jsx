import React from "react";
import { Link } from "react-router-dom";
const BackButton = () => {
    return <Link to={"/"}>  <div class="m-3 flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-white text-2xl font-extrabold">
        <i class="fa-solid fa-chevron-left"></i>
    </div>
    </Link>;
};

export default BackButton;
