import gsap from "gsap";
import { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom'
import greenChekmark from './imag/pngwing.com.png';

//modal for commission 2 
// eslint-disable-next-line react/prop-types
const ModalSucces = ({ onClose }) => {
    const navigateTo = useNavigate();
    const closeHandler = () => {
        onClose();
    }
    useEffect(() => {
        gsap.fromTo('#modal', { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
    }, [])
    //change route
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigateTo("/confirm");                
            closeHandler();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [history])

    return (
        <div className="w-screen h-[130%] bg-black/50 absolute top-0 left-0 flex items-center justify-center">
          <div id='modal' className="bg-white w-[300px] h-[230px] flex rounded-lg flex-col items-center text-[#a7a6ac] p-8 text-[28px] ">
            <img src={greenChekmark} width='50%' alt="" />
            <div className="flex text-[#000000] justify-center w-full gap-[5%] mt-[0px]">
              <p className="font-thin py-4" onClick={closeHandler}>Оплата успешна</p>
            </div>
          </div>
        </div>
      );
      
}

export default ModalSucces;
