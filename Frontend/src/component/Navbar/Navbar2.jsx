import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/User";

const Navbar2 = () => {
    const [showMenu, setShowMenu] = useState(false);
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
            <div className="bg-black p-6 fixed text-white w-screen">
                <div className="flex justify-between items-center">
                    <div className=" duration-300">Developer</div>
                    <div onClick={() => setShowMenu((c) => !c)} className="md:invisible ">
                        {showMenu ? (
                            // <i className="fa-solid fa-xmark"></i>
                            "Menu"
                        ) : (
                            // <i className="fa-solid fa-bars "></i>
                            "Menu"
                        )}
                    </div>

                    <div className="hidden md:flex md:justify-center md:items-center">
                        <div>
                            <Link to={"/"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Home</Link>
                        </div>
                        <div>
                            <a href={"https://www.linkedin.com/in/piyush-jha-a29619239/"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">About</a>
                        </div>
                        <div>
                            <Link to={"/rates"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Rates</Link>
                        </div>
                        <div>
                            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium" to={"/dashboard"}>Dashboard</Link>
                        </div>
                        {userlogged ? (
                            <div>
                                <button onClick={() => logoutButtonHandler()} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                                    logout
                                </button>
                            </div>
                        ) : (
                            <div>
                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium" to={"/login"}>Login</Link>
                            </div>)}
                    </div>
                </div>
                <div className={`${showMenu ? "block " : "hidden"}`}>
                    <ul className="text-center flex flex-col pt-2">
                        <li
                            className="p-3 hover:bg-[#373A41]"
                            onClick={() => setShowMenu(false)}
                        >
                            <Link to={"/"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Home</Link>
                        </li>
                        <li
                            className="p-3 hover:bg-[#373A41]"
                            onClick={() => setShowMenu(false)}
                        >
                            <a href={"https://www.linkedin.com/in/piyush-jha-a29619239/"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">About</a>
                        </li>{" "}
                        <li
                            className="p-3 hover:bg-[#373A41]"
                            onClick={() => setShowMenu(false)}
                        >
                            <Link to={"/rates"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Rates</Link>
                        </li>{" "}
                        <li
                            className="p-3 hover:bg-[#373A41]"
                            onClick={() => setShowMenu(false)}
                        >
                            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium" to={"/dashboard"}>Dashboard</Link>

                        </li>
                        {userlogged ? (<a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                            logout
                        </a>) : (<li>
                            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium" to={"/login"}>Login</Link>
                        </li>)}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar2;























