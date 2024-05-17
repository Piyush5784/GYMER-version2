import React, { useEffect, useMemo, useRef, useState } from "react";
import profilePic from "../assets/profile_pic.png"
import { Link, useNavigate } from "react-router-dom";
import { registerModel } from "../../format";
import axios from "axios";
import toast from "react-hot-toast";
import BackendURL from "../../backend";

const Register = () => {
    let navigate = useNavigate()
    const [msg, setMsg] = useState("");
    let inputs = {};

    let Username = useRef("")
    let Password = useRef("")
    let Email = useRef("")


    useEffect(() => {
        async function checkServer() {
            const response = await axios.get("https://gymer-backend.onrender.com/");
            setMsg(response.data)
        }
        checkServer()
    }, [])


    async function getResponse(inputs) {
        try {
            const response = await axios.post(`${BackendURL}/users/register`, { inputs }, {
                headers: {
                    "Content-Type": "application/json",
                },
            },)

            let Message = response.data.message;
            alert(Message);

            if (Message == "User successfully registered" || Message == "User already exists with this username") {
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
        }

    }


    async function registerButtonHandler() {
        inputs = {
            username: Username.current.value,
            password: Password.current.value,
            email: Email.current.value
        }

        let CheckFormat = registerModel.safeParse(inputs)

        if (!CheckFormat.success) {
            return toast.error("Enter correct email && password should be 8 digit")
        }
        else {
            getResponse(inputs)
        }

    }

    return <>
        <div className="pt-[100px] text-center">
            Server takes 1 min (max 2) to start because of free deployment.
        </div>
        <div style={{ textAlign: "center" }} className="">{msg === "OK" ? <p>Current Status: Server is Running <br /> Test username: rohan password: 123456789</p> : <p>Server is Down try going to link <a target="_blank" style={{ textDecoration: "underline" }} href="https://gymer-backend.onrender.com/">Server link </a> to start server (takes 1min)</p>}</div>


        <div className="h-[100vh] w-full flex items-center justify-center duration-300">

            <div class="flex h-[31.25rem] w-[90%] md:w-[40%] lg:w-[30%] flex-col items-center justify-center rounded-xl container">
                <div class="h-[5rem] w-[5rem] rounded-[50%] bg-black profilePic " style={{ backgroundImage: `url(${profilePic})`, backgroundSize: "cover" }}></div>
                <input class="m-4 h-[3.125rem] w-[80%] rounded-xl p-5 text-left text-xl" ref={Email} placeholder="Email" />
                <input class="m-4 h-[3.125rem] w-[80%] rounded-xl p-5 text-left text-xl" ref={Username} placeholder="Username" />
                <input class="m-4 h-[3.125rem] w-[80%] rounded-xl p-5 text-left text-xl" ref={Password} placeholder="Password" />

                <button class="h-[3.125rem] w-[80%] m-4 rounded-xl bg-black text-xl text-white" onClick={() => registerButtonHandler()}>Register</button>

                <p class="m-5 text-xl text-black">Already have Account ?<Link to={"/login"}>  Login here</Link></p>
            </div>
        </div>
    </>
};

export default Register;
