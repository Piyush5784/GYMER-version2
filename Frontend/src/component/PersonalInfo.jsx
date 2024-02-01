import React, { useEffect, useState } from "react";
import axios from "axios";
import profilePic from "../assets/profile_pic.png"
const PersonalInfo = ({ userDta }) => {

    return <>
        <div class="personalInfo m-6 flex h-[150px] w-[95%] rounded-3xl bg-white">
            <div class="flex w-[20%] items-center justify-center p-3">
                <div class="rounded-[50%] bg-black p-10 " style={{ backgroundImage: `url(${profilePic})`, backgroundSize: "cover" }}></div>
            </div>

            <div class="flex w-[90%] flex-col">
                <div>
                    <p class="mb-[1px] ml-3 mt-2 w-[90%] text-xl">Personal Info</p>
                </div>

                <div class="text flex">
                    <div class="texts m-3 flex h-[100%] w-[40%] flex-col">
                        {/* <p class="text-xl mb-2 ">Personal Info</p> */}
                        <p class="text-sm text-gray-200">Username</p>

                        <p class="text-l">{userDta !== undefined ? userDta.username : "name"}</p>
                        <p class="text-sm text-gray-200">Email</p>
                        <p class="text-l"> {userDta !== undefined ? userDta.email : "email"}</p>
                    </div>

                    <div class="texts m-3 ml-[30px] flex h-[100%] w-[60%] flex-col">
                        {/* <p class="text-sm text-gray-200">Phone Number</p>
                        <p class="text-l">820xxx856</p> */}
                        {/* <p class="text-sm text-gray-200">Membership Id</p> */}
                        {/* <p class="text-l">{userDta != undefined && userDta.purchasedCourses.length != 0 ? "TUBFUJDO%^&*" : "Id"}</p> */}
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default PersonalInfo;
