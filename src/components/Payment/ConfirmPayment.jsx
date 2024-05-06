import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import FormConfirmPayment from "./FormConfirmPayment";

//commision 3
const ConfirmPayment = ({ onViewConfirm }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="bg-[#f5f7fa] h-[600px] flex items-center justify-center">
            {loading ? (
                <ClipLoader color={"#8b8d8a"} loading={loading} speedMultiplier={0.5} size={70} />
            ) : (
                <FormConfirmPayment onViewConfirm={onViewConfirm} />
            )}
        </div>
    );
};

export default ConfirmPayment;
