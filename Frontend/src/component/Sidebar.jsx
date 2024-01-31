import React, { useState } from "react";

import profilePic from "../assets/profile_pic.png"
const Sidebar = () => {

    let [text, setText] = useState("")

    return <><div class="flex h-[100%] w-[30%] flex-col bg-black">

        <div class="ml-3 mb-[50px]">

            {/* <div class="m-4 ml-8 w-3 rounded-[50%] bg-blue-100 p-10" ></div> */}
            <div class="h-[5rem] ml-8 w-[5rem] rounded-[50%] bg-black profilePic " style={{ backgroundImage: `url(${profilePic})`, backgroundSize: "cover" }}></div>

        </div>

        <div className="m-6 ml-0 w-full hover:bg-gray-400 " >
            <a class=" p-4 ml-8 text-xl text-white">Profile</a>
        </div>
        <div className="m-6 ml-0 w-full  hover:bg-gray-400 ">
            <a class=" p-4 ml-8 text-xl text-white">Purchases</a>
        </div>
        <div className="m-6 ml-0 w-full  hover:bg-gray-400 ">
            <a class=" p-4 ml-8 text-xl text-white">Notifications</a>
        </div>
    </div>


    </>;
};

export default Sidebar;
