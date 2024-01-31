

const ShowPurchases = ({ planName, list }) => {

    return <>
        <div>
            <div style={{ height: "200px", width: "300px", backgroundColor: "black", borderRadius: "10px", color: "white" }}>

                <div style={{ padding: "10px" }} >

                    <p style={{ textAlign: "center", fontSize: "35px", fontFamily: "Judson", fontWeight: "bolder" }}>{planName}</p>

                    <div className="list h-[220px]" style={{ marginLeft: "20px", fontFamily: "Judson", fontSize: "18px", padding: "20px", marginTop: "25px" }} >
                        <div>you are eligible for all the features of {planName}</div>
                    </div>

                </div>
            </div>
        </div>
    </>
};

export default ShowPurchases;
