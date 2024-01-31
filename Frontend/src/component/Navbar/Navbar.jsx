



import React, { useContext, useEffect, useState } from "react";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/userData";
import "./Navbar.css";
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
            <div>
                <nav className="bg-black">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            {/* ... (rest of your JSX code) ... */}



                            <div class="flex flex-1 items-center justify-start sm:items-stretch ">
                                <div class="flex flex-shrink-0 items-center">
                                    <i class="fa-solid fa-dumbbell" style={{ color: "#ffffff", fontSize: "1.875rem" }}></i>

                                    <Link to={"/"} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">OPENGYM</Link>
                                </div>
                            </div>

                            <div className="hidden sm:ml-6 sm:block">
                                <div className="" style={{ marginLeft: "70%" }}>

                                    <div className="nav">
                                        <Link to={"/"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
                                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
                                        <Link to={"/rates"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Rates</Link>

                                        <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to={"/dashboard"}>Dashboard</Link>

                                        {userlogged ? (
                                            <div onClick={() => logoutButtonHandler()}>
                                                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                    logout
                                                </div>
                                            </div>
                                        ) : (
                                            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to={"/login"}>Login</Link>
                                        )}


                                    </div>
                                    <div className="nav-logo">
                                        <AiOutlineMenu />
                                    </div>
                                </div>
                            </div>

                            {/* ... (rest of your JSX code) ... */}


                        </div>
                    </div>

                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link to={"/"} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</Link>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Rates</a>
                            <Link to={"/login"} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Login</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
