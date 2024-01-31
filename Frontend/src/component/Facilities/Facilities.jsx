import React from "react";
import img6 from "../../assets/img6.png"
import ImgArr from "../../assets/ImgArray"
import Heading from "../Heading";
import Subheading from "../Subheading";
import PageText from "../PageText";
import ImgContainer from "../ImgContainer";


const Facilities = ({ Source, text, Message }) => {
    return <>
        <Heading text={"Facilities"} />
        <div style={{ display: "flex" }}>


            <div style={{ marginLeft: "3.125rem" }}>
                <ImgContainer src={img6} />
            </div>

            <div style={{ width: "25rem", marginLeft: "5.625rem" }}>
                <Subheading text={"Modern Equipment"} />

                <PageText text={"Our gym is equipped with the latest fitness machines and equipment to cater to a variety of workout preferences. In addition to cutting-edge fitness machines, our gym prides itself on providing a comprehensive range of modern equipment designed to enhance your workout experience.\n\nWe understand that everyone has unique preferences when it comes to fitness, and that's why we've curated a diverse selection of exercise equipment to accommodate various workout styles and goals."} />

            </div>
        </div>
        <div style={{ display: "flex" }}>

            {ImgArr.map(img => <img class=" max-lg rounded-lg" style={{ width: "7.5rem", margin: "3rem" }} src={img} alt="image description" />)}

        </div>
    </>;
};

export default Facilities;
