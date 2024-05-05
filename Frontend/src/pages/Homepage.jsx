import Button from "../component/Button";
import Facilities from "../component/Facilities/Facilities";
import ImgContainer from "../component/ImgContainer";
import OurMission from "../component/OurMission";
import PageText from "../component/PageText";
import styles from "../pages/Homepage.module.css"
import ImgArr from "../assets/ImgArray";
import Subheading from "../component/Subheading";
import ButtonBlack from "../component/ButtonBlack"
import Heading from "../component/Heading";
import Plans from "../component/Plans/Plans";
import Message from "../component/Message";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
// .heading {
//     font-family: "Judson";
//     font-size: 3.4375rem;
//     margin-top: 5.625rem;
//   }
// .herotext {
//     font-family: "Inter";
//     font-weight: lighter;
//     text-align: center;
//     font-size: 1.5625rem;
//     margin-top: 0rem;
//     line-height: 1.875rem;
//   }
// 881285
export const Homepage = () => {
    return <>
        <div className="w-full">

            <div >
                <div className={`${styles.fontJudson}`}>
                    <p className="text-center text-white">The website is set to view only in destop mode</p>
                    <div className={`${styles.container} w-auto flex text-white text-center justify-center items-center flex-col lg:h-[46.875rem] md:h-[700px] sm:h-[800px] bg-cover`}>

                        <h1 className={`${styles.heading} text-md`}  >GET YOUR BODY <br /> IN SHAPE</h1>

                        <p className={`font-extralight text-center mt-0 ${styles.herotext}`}> Our state-of-the-art facility is designed to <br /> provide a motivating
                            <br /> and supportive environment for individuals of <br /> all fitness levels.
                        </p>
                        <div className="buttons">
                            <Link to={"/register"}><Button text={"Join Now"} /></Link>
                            <Button text={"Learn More"} />
                        </div>
                    </div >
                    <Facilities />
                    <hr />

                    <OurMission />
                    <div className={`lg:flex-row flex flex-col justify-center items-center`} >

                        <div className="w-[33.75rem] h-[30rem]">
                            <div>
                                <Subheading text={"Inspire"} />
                            </div>
                            <div className="flex  flex-col m-3 items-center justify-center">

                                <PageText text={"Our mission is to inspire and empower our \n members to lead healthier, \n happier lives through fitness. we are \n dedicated to providing top-notch \n facilities, expert guidance, and a sense of \ncommunity that makes every \n workout enjoyable."} />
                                <ButtonBlack text={"Learn More"} />
                            </div>

                        </div>

                        <div>

                            <ImgContainer src={ImgArr[6]} />

                        </div>
                    </div>
                </div>
                <hr />


                <Message />
                <Heading text={"Membership Plans"} />

                <PageText text={"We understand that fitness goals vary, and so do individual perferences. \n That's why we off a range of membership plans to cater to diverse \n needs. Choose the one that aligns perfectly with your lifestyle and fitness aspirations."} />
                <div className={`flex flex-col md:flex-row justify-evenly items-center m-[30px] `}>

                    <Plans heading={"Basic"} list={["Full Access", "Participation in group", "Assessment and orientation", "Rooms and Shower facilities"]} />

                    <Plans heading={"Premium"} list={["All Features of Basic plan", "Discounts on personal training sessions", "Premium locker room and amenities.", "Rooms and Shower facilities"]} />

                    <Plans heading={"Pro"} list={["All Features of Basic and Premium plan", "Personal Coach", "Personal diet plan and assessment", "Unlimited access to all classes"]} />
                </div>

                <Footer />

            </div>
        </div>

    </>;
};
