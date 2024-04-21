import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/User";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const navigate = useNavigate();
    let { userData, setUserDataState } = useContext(UserDataContext);

    let [userlogged, setUserLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            setUserLogged(true);
        }
    }, [setUserDataState]);

    function logoutButtonHandler() {
        localStorage.removeItem("authToken");
        navigate("/login");
        setUserDataState(false);
        setUserLogged(false);
    }

    return (
        <>
            <div className="w-full bg-black flex justify-between text-white p-5 fixed ">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Gymer</div>
                <div className="flex">
                    <Link to={"/"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Home</Link>

                    <a href={"https://www.linkedin.com/in/piyush-jha-a29619239/"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">About</a>

                    <Link to={"/rates"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Rates</Link>

                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium" to={"/dashboard"}>Dashboard</Link>

                    {userlogged ? (
                        <div onClick={() => logoutButtonHandler()}>
                            <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                                logout
                            </button>
                        </div>
                    ) : (
                        <div>
                            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium" to={"/login"}>Login</Link>
                        </div>)}
                </div>
            </div>
        </>
    );
};

export default Navbar;