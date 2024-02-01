import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const UserDataContext = createContext();

export const Base_url = "http://localhost:3001"

export async function getData(token) {
    try {
        const response = await axios.post(`${Base_url}/users/getUsersData`, { authToken: token })
        // console.log(response)

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
        <UserDataContext.Provider value={{ userData, setUserDataState, Base_url }}>
            {children}
        </UserDataContext.Provider>
    );
};

