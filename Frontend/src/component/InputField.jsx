import React, { useRef, useState } from "react";
import { changePassword } from "../../PaymentFunctions";


const InputField = () => {
    const [text, setText] = useState();
    const oldPassword = useRef();
    const newPassword = useRef();
    const confirmPassword = useRef();

    function saveButtonHandler() {

        let oldpass = oldPassword.current.value;
        let newpass = newPassword.current.value;
        let confirmPass = confirmPassword.current.value;

        if (oldpass == "" || newpass == "" || confirmPass == "") {
            alert('Input All fields to proceed')
        }
        else if (newpass !== confirmPass) {
            alert("New Password and confirm password mismatched")
        }
        else {
            console.log(oldpass, newpass)
            changePassword(oldpass, newpass)
        }
    }


    return <>
        <div class=" flex m-3 justify-around">
            <div class=" w-[40%] h-[340px] rounded-2xl bg-white ">
                <p class="m-5 w-[90%] text-xl">User setting</p>
                <button type="button" onClick={() => setText('changePassword')} class="text-white ml-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Change password</button>


                <button type="button" onClick={() => setText('editInfo')} class="text-white m-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Edit Personal Info</button>

                <br />

                <button type="button" class="focus:outline-none m-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 w-[190px] rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete Account</button>


            </div>
            <div class=" w-[55%] h-[340px] rounded-2xl bg-white">

                <div className="m-5">

                    {text == "changePassword" ? <div className="inputs">
                        <input class="m-4 h-[3.125rem] w-[60%] border border-solid border-gray-400 p-4 rounded-xl text-left text-xl" ref={oldPassword} placeholder="Old password" />
                        <input class="m-4 h-[3.125rem] w-[60%] border border-solid border-gray-400 p-4 rounded-xl text-left text-xl" ref={newPassword} placeholder="New password" />
                        <input class="m-4 h-[3.125rem] w-[60%] border border-solid border-gray-400 p-4 rounded-xl text-left text-xl" ref={confirmPassword} placeholder="Confirm password" />
                    </div> : <div className="inputs">
                        <input class="m-4 h-[3.125rem] w-[60%] border border-solid border-gray-400 p-4 rounded-xl text-left text-xl" placeholder="password" />
                        <input class="m-4 h-[3.125rem] w-[60%] border border-solid border-gray-400 p-4 rounded-xl text-left text-xl" placeholder="New username" />
                        <input class="m-4 h-[3.125rem] w-[60%] border border-solid border-gray-400 p-4 rounded-xl text-left text-xl" placeholder="Confirm username" />
                    </div>}





                    <button type="button" onClick={() => saveButtonHandler()} class="text-white ml-[270px] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" >Save</button>
                </div>

            </div>
        </div>
    </>;
};

export default InputField;
