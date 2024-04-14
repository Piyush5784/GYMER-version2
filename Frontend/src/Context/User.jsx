import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import BackendURL from "../../backend";


export const UserDataContext = createContext();


export async function getData(token) {
    try {
        const response = await axios.post(`${BackendURL}/users/getUsersData`, { authToken: token })
        return response;
    } catch (error) {
        return error
    }
}

export const UserDataProvider = ({ children }) => {
    const [userData, setUserDataState] = useState();

    function checkToken() {
        const token = localStorage.getItem("authToken");

        if (token) {
            getData(token)
            setUserDataState(true)
        }
        else {
            setUserDataState(false)
        }
    }

    useEffect(() => {

        checkToken();
        const intervalId = setInterval(checkToken, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <UserDataContext.Provider value={{ userData, setUserDataState }}>
            {children}
        </UserDataContext.Provider>
    );
};
