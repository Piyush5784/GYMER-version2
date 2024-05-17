
const Footer = () => {
    return <>
        <div style={{ height: "43.75rem", width: "100%", backgroundColor: "black" }}>

            <p style={{ color: "white", textAlign: "center", fontSize: "3.4375rem", fontFamily: "Judson" }}>Subscribe for more</p>

            <div className="flex flex-col w-full lg:flex-row justify-center gap-10 ">
                <div className="flex items-center justify-center w-[90%] lg:w-[80%]">
                    <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="flex items-center  justify-center">
                    <button class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-[1.375rem] h-[3.4375rem] font-bolder flex items-center justify-center" style={{ fontFamily: "Judson" }} >Subscribe</button>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <p style={{ color: "white", fontFamily: "Inter", fontWeight: "lighter", fontSize: "1.375rem" }}>Stay in the loop and elevate your fitness journey by subsribing to our <br /> newsletter. Receive exclusive content, expert tips, and exciting updates
                    <br /> right in your inbox. Whether your're a gym enthusiast, a fitness beginner, <br /> or someone looking for motivation, our newsletter has <br /> something for everyone.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", margin: "1.875rem" }} className="w-[90%]">
                <i class="fa-brands fa-instagram" style={{ color: "#ffffff", fontSize: "6.25rem" }}></i>


                <i class="fa-brands fa-hashnode" style={{ color: "#ffffff", fontSize: "6.25rem" }}></i>
                <i class="fa-brands fa-medium" style={{ color: "#ffffff", fontSize: "6.25rem" }}></i>

            </div>
        </div>

    </>;
};

export default Footer;
