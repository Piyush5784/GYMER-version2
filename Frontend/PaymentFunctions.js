import axios from "axios";

export const initPayment = ({ data }, name, token) => {

    const options = {
        key: 'rzp_test_JiEJrykMcKRloz',
        amount: data.amount,
        name: "GYMER",
        description: "Plan Purchases",
        currency: data.currency,
        order_id: data.id,
        handler: async (response) => {
            try {
                const verifyUrl = 'http://localhost:3001/api/payment/verify';
                const { data } = await axios.post(verifyUrl, response)
                if (data.Message == "Payment Verified Successfully") {
                    const updateUserDataURL = "http://localhost:3001/users/purchaseCourse";
                    const updataData = await axios.post(updateUserDataURL, { authToken: token, planName: name })
                    alert(updataData.data.Message)

                }
            } catch (error) {
                console.log(error)
            }
        },
        theme: {
            color: "#B8DAF6",
        },
        notes: {
            address: "Razorpay Corporate Office",
        }

    }
    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });

    rzp1.open();

}

export async function changePassword(oldpass, newpass) {
    const authToken = localStorage.getItem("authToken");
    console.log(oldpass, newpass)

    try {
        const updateUrl = "http://localhost:3001/users/changePassword"
        const response = await axios.post(updateUrl, { authToken, oldpass, newpass });
        console.log(response)
        alert(response.data.Message)
    } catch (error) {
        console.log(error)
    }

}



export async function handlePayment(name, token) {
    const orderUrl = "http://localhost:3001/api/payment/orders"
    try {
        const { data } = await axios.post(orderUrl, { planName: name })
        initPayment(data, name, token)
    } catch (error) {
        console.log(error)
    }
}


// module.exports = { initPayment, handlePayment }