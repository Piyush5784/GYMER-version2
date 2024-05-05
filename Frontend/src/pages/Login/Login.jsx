import React, { useEffect, useRef, useState } from "react";
import profilePic from "../../assets/profile_pic.png"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { loginFormat } from "../../../format";
import axios from "axios";
import backend from "../../../backend"
const Login = () => {
    let navigate = useNavigate();
    const [msg, setMsg] = useState("");
    let Username = useRef("")
    let Password = useRef("")

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (token) {
            navigate("/dashboard")
        }

    }, [])

    useEffect(() => {
        async function checkServer() {
            const response = await axios.get("https://gymer-backend.onrender.com/");
            setMsg(response.data)
        }
        checkServer()
    }, [])




    function loginButtonHandler() {

        let inputs = {
            username: Username.current.value,
            password: Password.current.value
        }


        let CheckFormat = loginFormat.safeParse(inputs)
        if (!CheckFormat.success) {
            return alert("Enter valid password ")
        }
        else {
            getResponse(inputs);
        }

        async function getResponse(inputs) {
            console.log(`${backend}/users/login`)
            try {

                const response = await axios.post(`${backend}/users/login`, { inputs }, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },)
                let Message = response.data.Message;
                console.log(response)
                if (Message == "User Logged in") {
                    navigate("/dashboard")
                    localStorage.setItem("authToken", response.data.authToken)
                }
                else {
                    alert(Message)
                }
            } catch (error) {
                console.log(error)
            }
        }

    }

    return <>
        <div className="pt-[100px] text-center">
            Server takes 1 min (max 2) to start because of free deployment.
        </div>
        <div style={{ textAlign: "center" }} className="">{msg === "OK" ? <p>Current Status: Server is Running <br /> Test username: rohan password: 123456789</p> : <p>Server is Down try going to link <a target="_blank" style={{ textDecoration: "underline" }} href="https://gymer-backend.onrender.com/">Server link </a> to start server (takes 1min)</p>}</div>


        <div className="h-[100vh] w-full flex items-center justify-center pt-0 mt-0">
            <div class="flex h-[31.25rem] w-[90%] md:w-[40%] lg:w-[30%] flex-col items-center justify-center rounded-xl container">
                <div class="h-[5rem] w-[5rem] rounded-[50%] bg-black profilePic " style={{ backgroundImage: `url(${profilePic})`, backgroundSize: "cover" }}></div>
                <input class="m-4 h-[3.125rem] w-[80%] rounded-xl p-5 text-left text-xl" ref={Username} placeholder="Username" />
                <input class="m-4 h-[3.125rem] w-[80%] rounded-xl p-5 text-left text-xl" ref={Password} placeholder="Password" />

                <button class="h-[3.125rem] w-[80%] m-4 rounded-xl bg-black text-xl text-white" onClick={() => loginButtonHandler()}>Login</button>

                <p class="m-5 text-xl text-black">New user? <Link to={"/register"}> Register now</Link></p>
            </div>
        </div>

    </>;
};

export default Login;
