import React, { useState, useEffect } from "react";
import FormPayment from "./FormPayment";
import { ClipLoader } from "react-spinners";

//commision 2
const Payment = ({ onView }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setLoading(false);
        };

        fetchData();
    }, []);

    return(
        <div className="bg-[#f5f7fa] h-[600px] flex justify-center items-center">
        {loading ? (
                <ClipLoader color={"#8b8d8a"} loading={loading} speedMultiplier={0.5} size={70} />
            ) : (
            <FormPayment onView={onView} /> 
        )}
    </div>
    );
};

export default Payment;