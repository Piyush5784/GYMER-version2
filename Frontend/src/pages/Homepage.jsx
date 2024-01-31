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


export const Homepage = () => {
    return <>
        {/* <Navbar />   */}
        <p className="text-center lg:hidden sm:block ">The website is set view only in Desktop </p>
        <div >


            <div className={`styles.fontJudson `}>

                <div className={styles.container}>
                    <h1 className={styles.heading}>GET YOUR BODY <br /> IN SHAPE</h1>

                    <p className={styles.herotext}> Our state-of-the-art facility is designed to <br /> provide a motivating
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
                <div className={styles.flexContainer}>
                    <div style={{ width: "33.75rem", display: "flex", justifyContent: "center", alignItems: "center", height: "25rem" }}>
                        <div>
                            <Subheading text={"Inspire"} />

                            <PageText text={"Our mission is to inspire and empower our \n members to lead healthier, \n happier lives through fitness. we are \n dedicated to providing top-notch \n facilities, expert guidance, and a sense of \ncommunity that makes every \n workout enjoyable."} />
                            <ButtonBlack text={"Learn More"} />

                        </div>
                    </div>
                    <ImgContainer src={ImgArr[6]} />
                </div>
            </div>
            <hr />


            <Message />
            <Heading text={"Membership Plans"} />

            <PageText text={"We understand that fitness goals vary, and so do individual perferences. \n That's why we off a range of membership plans to cater to diverse \n needs. Choose the one that aligns perfectly with your lifestyle and fitness aspirations."} />
            <div className={styles.plans}>

                <Plans heading={"Basic"} list={["Full Access", "Participation in group", "Assessment and orientation", "Rooms and Shower facilities"]} />

                <Plans heading={"Premium"} list={["All Features of Basic plan", "Discounts on personal training sessions", "Premium locker room and amenities.", "Rooms and Shower facilities"]} />

                <Plans heading={"Pro"} list={["All Features of Basic and Premium plan", "Personal Coach", "Personal diet plan and assessment", "Unlimited access to all classes"]} />
            </div>

            <Footer />

        </div>

    </>;
};
