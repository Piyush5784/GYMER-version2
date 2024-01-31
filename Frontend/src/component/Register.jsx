import React, { useRef } from "react";
import profilePic from "../assets/profile_pic.png"
import { Link, useNavigate } from "react-router-dom";
import { registerModel } from "../../format";
import axios from "axios";


const Register = () => {
    let navigate = useNavigate()

    let Username = useRef("")
    let Password = useRef("")
    let Email = useRef("")

    async function getResponse(inputs) {
        const response = await axios.post("http://localhost:3001/users/register", { inputs })
        console.log(response)
        let Message = response.data;
        alert(Message);

        if (Message == "User Successfully Registered" || Message == "User Already Exists with this email") {
            navigate("/login")
        }

    }


    async function registerButtonHandler() {


        let inputs = {
            username: Username.current.value,
            password: Password.current.value,
            email: Email.current.value
        }

        let CheckFormat = registerModel.safeParse(inputs)

        if (!CheckFormat.success) {
            return alert("Enter correct email && password should be 8 digit")
        }
        else {
            getResponse(inputs)
        }

    }

    return <div className="h-[100vh] w-full flex items-center justify-center">
        <div class="flex h-[31.25rem] w-[30%] flex-col items-center justify-center rounded-xl container">
            <div class="h-[5rem] w-[5rem] rounded-[50%] bg-black profilePic " style={{ backgroundImage: `url(${profilePic})`, backgroundSize: "cover" }}></div>
            <input class="m-4 h-[3.125rem] w-[80%] rounded-xl p-5 text-left text-xl" ref={Email} placeholder="Email" />
            <input class="m-4 h-[3.125rem] w-[80%] rounded-xl p-5 text-left text-xl" ref={Username} placeholder="Username" />
            <input class="m-4 h-[3.125rem] w-[80%] rounded-xl p-5 text-left text-xl" ref={Password} placeholder="Password" />

            <button class="h-[3.125rem] w-[80%] m-4 rounded-xl bg-black text-xl text-white" onClick={() => registerButtonHandler()}>Register</button>

            <p class="m-5 text-xl text-black">Already have Account ?<Link to={"/login"}>  Login here</Link></p>
        </div>
    </div>

};

export default Register;
