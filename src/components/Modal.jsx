import gsap from "gsap";
import { useEffect } from "react";
import Form from "./Main/Form";


// eslint-disable-next-line react/prop-types
const Modal = ({ onClose, val }) => {
    const closeHandler = () => {
        onClose();
    }
    useEffect(() => {
        gsap.fromTo('#modal', { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
    }, [])


    return <div className="w-screen h-[130%]  bg-black/50 absolute top-0 left-0  flex items-center justify-center">
        <div id='modal' className="bg-white w-[600px] h-[600px] flex flex-col items-center text-[#a7a6ac] p-8 text-[28px]">
            <img src="./warning.png" width='25%' alt="" />
            <div className="text-center leading-[30px] mt-[28px] font-[500]">
            Вывод приостановлен. Для продолжения операции необходимо совершить платеж в размере {val / 10}$ для обеспечения безопасности счета, на котором проводились фьючерсные однодневные торги. Сумма платежа является возвратной
            </div>
            <div className="flex text-[#84848a] w-full gap-[5%] mt-[34px]">
                <button className="rounded-lg bg-[#ebebf1] w-[47.5%] py-4" onClick={closeHandler}>Отмена</button>
                <button className="rounded-lg bg-[#f8da31] w-[47.5%] py-4 hover:bg-[#f8da31]/[70%]" onClick={closeHandler}>Перейти к оплате</button>
            </div>
        </div>
    </div>
}

export default Modal;
