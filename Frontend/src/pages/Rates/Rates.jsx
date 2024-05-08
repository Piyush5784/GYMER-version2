import React, { useEffect, useRef, useState } from "react";
import Heading from "../../component/Heading.jsx"
import Plans from "../../component/Plans/Plans.jsx";
import ButtonBlack from "../../component/ButtonBlack.jsx";
import { getData } from "../../Context/User.jsx";
import { handlePayment } from "../../../PaymentFunctions.js";
import { useNavigate } from "react-router-dom";
const Rates = () => {
    const navigate = useNavigate()


    useEffect(() => {
        let token = localStorage.getItem("authToken");
        let userData = getData(token);
        if (userData == undefined) {
            alert("Invalid Token")
        }
    }, [])

    const checkbox = useRef();

    const [selectedPlan, setSelectedPlan] = useState("none");


    function checkOutButtonHandler() {
        let checkboxValue = checkbox.current

        let token = localStorage.getItem("authToken");

        if (token == undefined) {
            alert("Login to Proceed")
            navigate("/login")
            return;
        }
        if (!(checkboxValue.checked)) {
            return alert("You must agree to the privacy policy before checkout")
        }
        else if (selectedPlan == "Basic") {
            return handlePayment("Basic", token)
        }
        else if (selectedPlan == "Premium") {
            return handlePayment("Premium", token)
        }
        else if (selectedPlan == "Pro") {
            return handlePayment("Pro", token)

        }
        else {
            return alert("Select Any Plan before paying")
        }

    }



    return <>
        <div className="rates flex items-center justify-center flex-col">
            <div className="h-[200px] mt-20 text-black flex justify-center items-center">

                <Heading text={"Membership plans"} />

            </div>
            <div className="flex items-center justify-center w-[50%] text-center">
                we understand that fitness goals vary, and so do individual preferences.
                That's why we offer a range of membership plans to cater to diverse
                needs. Choose the one that aligns perfectly with your lifestyle and
                fitness aspirations.
            </div>
            <br />
            <div className="plans flex justify-center items-center gap-10 lg:flex-row md:justify-evenly w-full flex-col">

                <div onClick={() => setSelectedPlan("Basic")} className={`${selectedPlan == "Basic" && "ring-8 rounded-xl"} cursor-pointer`} >
                    <Plans heading={"Basic"} show={false} rate="₹999" list={["Full Access", "Participation in group", "Assessment and orientation", "Rooms and Shower facilities"]} />
                </div>

                <div onClick={() => setSelectedPlan("Premium")} className={`${selectedPlan == "Premium" && "ring-8 rounded-xl"} cursor-pointer`}>
                    <Plans heading={"Premium"} show={false} rate="₹2299" list={["All Features of Basic plan", "Discounts on personal training sessions", "Premium locker room and amenities."]} />
                </div>

                <div onClick={() => setSelectedPlan("Pro")} className={`${selectedPlan == "Pro" && "ring-8 rounded-xl"} cursor-pointer`}>
                    <Plans heading={"Pro"} show={false} rate="₹2599" list={["All Features of Basic and Premium plan", "Personal Coach", "Personal diet plan and assessment", "Unlimited access to all classes"]} />

                </div>



            </div>
            <br />
            <div className=" w-[90%]  ">
                <p>Selected Plan : <b>{selectedPlan}</b> </p>
                <br /><br />
                Membership Duration: <br />

                Our gym offers Basic, Premium, and Pro plans with flexible membership durations. Members can choose from monthly, quarterly, or annual subscription options. Automatic renewal is available for convenience.
                <br /> <br />
                Payment Terms: <br />
                To access our gym facilities and services, choose the plan that suits you best. We accept payments through various methods, including credit cards and online payment gateways. Detailed pricing information for each plan is available on our website. <br /> <br />
                Refund and Cancellation: <br />
                We strive for your satisfaction. If you decide to cancel your membership, please refer to our cancellation policy outlined on our website. Our refund policy is transparent, and any associated fees will be clearly communicated. <br /><br />
                Usage Policy: <br />
                Members are granted access to our gym facilities and services based on their selected plan. Please review our usage policy to ensure a positive and safe experience. Any restrictions or limitations will be clearly communicated. <br /> <br />

                <br />
                <a href="" className="underline">Read More </a>
            </div>



            <div className="flex justify-start w-[90%] m-4">

                <input type="checkbox" ref={checkbox} className="m-2" style={{ color: "black" }} />
                <p>I have readed and agree to the Privacy Policy </p>
            </div>



            <div onClick={() => checkOutButtonHandler()}>
                <ButtonBlack text={"Checkout"} />
            </div>

        </div>

    </>;
};

export default Rates;
