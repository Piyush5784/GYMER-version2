import React, { useEffect, useRef } from "react";
import profilePic from "../../assets/profile_pic.png"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { loginFormat } from "../../../format";
import axios from "axios";
import backend from "../../../backend"
const Login = () => {
    let navigate = useNavigate();

    let Username = useRef("")
    let Password = useRef("")

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (token) {
            navigate("/dashboard")
        }

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
            const response = await axios.post(`${backend}/users/login`, { inputs })
            let Message = response.data.Message;
            console.log(response)
            if (Message == "User Logged in") {
                navigate("/dashboard")
                localStorage.setItem("authToken", response.data.authToken)
            }
            else {
                alert(Message)
            }
        }

    }

    return <>
        <div className="h-[100vh] w-full flex items-center justify-center">
            <div class="flex h-[31.25rem] w-[30%] flex-col items-center justify-center rounded-xl container">
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
