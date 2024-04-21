import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../component/InputField.jsx";
import profilePic from "../../assets/profile_pic.png"
import Plans from "../../component/Plans/Plans.jsx";
import "./Dashboard.css"
import ShowPurchases from "../../component/ShowPurchases.jsx"
import { NotificationList } from "../../assets/Notfications.js"
import PersonalInfo from "../../component/PersonalInfo.jsx";
import BackButton from "./BackButton.jsx";
import axios from "axios";
import SuccessMsg from "../../component/SuccessMsg.jsx";
import backend from "../../../backend.js";
const Dashboard = () => {

    const [userDta, setUserData] = useState()

    let [text, setText] = useState("Profile")

    function onClickHander(txt) {
        setText(txt)
    }

    const [courses, setCourses] = useState();


    let navigate = useNavigate();

    async function getData(authToken) {
        try {
            const response = await axios.post(`${backend}/users/getUsersData`, { authToken });

            if (response.data.Message == "Success") {
                <SuccessMsg text={"login Successful"} />
                setUserData(response.data);
                setCourses(response.data.purchasedCourses.map(item => item.planName))
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (token) {
            getData(token);
        } else {
            navigate("/login")
        }
    }, [])




    return <>
        <div class="flex h-[43.75rem] w-full" style={{ fontFamily: "Judson" }}>

            <div class="flex h-[100%] w-[30%] flex-col bg-black">

                <div class="mt-[100px] mb-[3.125rem] flex justify-center items-center">

                    {/* <div class="m-4 ml-8 w-3 rounded-[50%] bg-blue-100 p-10" ></div> */}
                    {/* <div class="h-[5rem] ml-8 w-[5rem] rounded-[50%] bg-black profilePic " style={{ backgroundImage: `url(${profilePic})`, backgroundSize: "cover" }}></div> */}

                </div>

                <div className={`m-6 ml-0 w-full hover:bg-gray-400 `} style={{ cursor: "pointer" }} onClick={() => onClickHander("Profile")}>
                    <a class=" p-4 ml-8 text-xl text-white  " >Profile</a>
                    {text == "Profile" ? <hr className="hr" /> : <></>}
                </div>
                <div className={`m-6 ml-0 w-full hover:bg-gray-400 `} style={{ cursor: "pointer" }} onClick={() => onClickHander("Purchases")}>
                    <a class=" p-4 ml-8 text-xl text-white">Purchases</a>
                    {text == "Purchases" ? <hr className="hr" /> : <></>}
                </div>
                <div className={`m-6 ml-0 w-full hover:bg-gray-400 `} style={{ cursor: "pointer" }} onClick={() => onClickHander("Notification")}>
                    <a class=" p-4 ml-8 text-xl text-white">Notifications</a>
                    {text == "Notification" ? <hr className="hr" /> : <></>}
                </div>
            </div>


            <div class="h-[100%] w-[80%]" style={{ backgroundColor: "#BABABA" }}>


                <div class="profileSection">
                    <div class="m-8 flex mt-[100px]">
                        <BackButton />
                        <div class="m-2">
                            <div class="text-xl text-black">{text || "Back"}</div>
                            <p className="text-white" >Home  <i class="fa-solid fa-caret-right"></i> {text}</p>
                        </div>
                    </div>


                    {text == "Profile" ? <><PersonalInfo userDta={userDta} />
                        <InputField /></> :
                        <></>}

                    {text == "Purchases" ? <div className="flex items-center justify-center">

                        <div class="h-[31.875rem] rounded-3xl bg-white w-[95%]  ">
                            <div className="flex m-8 ">



                                <p className="text-gray-400 m-5 flex gap-[20px]">
                                    {userDta != undefined && userDta.purchasedCourses.length != 0 ? userDta.purchasedCourses.map(item =>
                                        <ShowPurchases planName={item} list={["a", "b"]} />
                                    ) : "Purchases will be shown here "}

                                    {/* {userDta != undefined ? : ""} */}

                                </p>

                            </div>



                        </div>

                    </div> : <></>}


                    {text == "Notification" ? <div className="flex items-center justify-center flex-col">
                        <div class="h-[5rem] flex-col rounded-2xl bg-white w-[95%] m-3 text-center text-xl flex items-center justify-center">
                            <div> Just a friendly reminder to crush your fitness goals today! 🚀
                            </div>
                            <div className="flex items-center m-2 justify-evenly">
                                <div>
                                    📢 Announcements:
                                </div>
                                <div>
                                    Free yoga classes at 6:00 Am
                                </div>
                            </div>
                        </div>
                        {NotificationList.map(text => <div class="h-[3.75rem] rounded-2xl bg-white w-[95%] m-3 text-center text-xl flex items-center justify-center">{text}

                        </div>)}


                    </div> : <></>}


                </div>
            </div>
        </div >

    </>;
};

export default Dashboard;
