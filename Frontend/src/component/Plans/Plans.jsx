import styles from './Plans.module.css'
import { Link } from 'react-router-dom';

const Plans = ({ heading, list, text = "Join", rate = "", show = true }) => {


    return <>
        <div>
            <div className={` h-[350px] w-[300px] bg-black text-white rounded-xl `} >

                <div style={{ padding: "10px" }} className='md:w-[90%]' >

                    <p style={{ textAlign: "center", fontSize: "35px", fontFamily: "Judson", fontWeight: "bolder" }}>{heading}</p>

                    <div className="list h-[220px]" style={{ marginLeft: "20px", fontFamily: "Judson", fontSize: "18px", padding: "20px", marginTop: "25px" }} >
                        {list.map(text => <div><li >{text}</li></div>)}
                    </div>

                    <p className='text-center text-xl'>{rate}</p>

                </div>
            </div>


            {show && <div className="button" style={{ textAlign: "center", margin: "30px" }}>
                <Link type="button" style={{ marginTop: "20px", marginLeft: "1rem", width: "9.375rem", backgroundColor: "black", height: "3.75rem", fontSize: "1.25rem", fontWeight: "bolder", fontFamily: "Judson" }} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" to={"/rates"} >{text}</Link>
            </div>}
        </div >


    </>;
};

export default Plans;
