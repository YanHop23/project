import { useEffect, useRef, useState } from "react";
import KGSimg from './../imag/KGS.png';
import { Link } from "react-router-dom";

//commision 3 (form)
// eslint-disable-next-line react/prop-types
const FormConfirmPayment = ({ onViewConfirm }) => {
    const [listIsVisible, setListIsVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const UZS = {
        name: 'UZS',
        price: 12635.00,
        imag: 'https://www.bybit.com/bycsi-root/common-static/wove/fiat-admin/2023-5-4/Tyoe=UZS.svg'
    }

    const RUB = {
        name: 'RUB',
        price: 93.43,
        imag: 'https://www.bybit.com/bycsi-root/common-static/wove/fiat-admin/2023-5-4/Tyoe=RUB.svg'

        
    }
    const KGS = {
        name: 'KGS',
        price: 88.66,
        imag: KGSimg

    }
    const KZT = {
        name: 'KZT',
        price: 441.43,
        imag: '	https://www.bybit.com/bycsi-root/common-static/wove/fiat-admin/2023-5-4/Tyoe=KZT.svg'

    }
    const TJS = {
        name: 'TJS',
        price: 10.92,
        imag: 'https://www.bybit.com/bycsi-root/common-static/wove/fiat-admin/2023-5-4/Tyoe=TJS.svg'

    }
    

    const [activeCurrency, setActiveCurrency] = useState(UZS);



    const [buttonText, setButtonText] = useState('Подтвердить');

    const usdtInput = useRef(null);
    const mxnInput = useRef(null);
    const walletInput = useRef(null)

    useEffect(()=>{
        mxnInput.current.value = (usdtInput.current.value * activeCurrency.price).toFixed(2);
    },[activeCurrency])
    
    
    const formSubmit = (e) => {
        e.preventDefault();
        usdtInput.current.value = '';
        mxnInput.current.value = '';
        walletInput.current.value = '';

        onViewConfirm();
    }

    const inputHandler = () => {
        if (usdtInput.current.value !== '') {
            setButtonText('Подтвердить')
        }
        mxnInput.current.value = (usdtInput.current.value * activeCurrency.price).toFixed(2);
        const value = usdtInput.current.value;
        setInputValue(value);
    }

    return(
        <form className="w-[1200px] h-[500px] m-[20px] " onSubmit={formSubmit}>
            <div className="text-black w-full flex   flex-row  justify-between  ">
                <div className="rounded-3xl bg-[#FFFFFF]  shadow-lg p-[20px]">
                    <div className="w-[456px]">
                        <span className="text-[#8b8d8a]">Сумма вывода</span>
                        <div className="border-[1px] rouned-lg w-[456px] p-[10px] shadow-sm flex items-center justify-between mt-2">
                            <input className="bg-inherit" placeholder="Введите сумму.." type="number" ref={usdtInput} onChange={inputHandler}></input>
                            <div className="flex gap-4 items-center">
                                                            
                                
                                <div className="bg-[#f1f3f0] flex items-center gap-2 cursor-pointer p-2">
                                    <img src='./usdt.svg' width='24' height='24'></img>
                                    <div>USDT</div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[456px]">
                        <span className="text-[#8b8d8a]">Сумма в нац. валюте</span>
                        <div className="border-[1px] rouned-lg w-[456px] p-[10px] shadow-sm flex items-center justify-between mt-2">
                            <input className="bg-inherit w-max" placeholder="Введите сумму" type="text" ref={mxnInput}></input>
                            <div className="flex gap-4 items-center">
                                <div className="bg-[#f1f3f0] flex items-center gap-2 cursor-pointer p-2 relative" onClick={() => setListIsVisible(!listIsVisible)}>
                                    <img src={activeCurrency.imag} width='24' height='24'></img>
                                    <div>{activeCurrency.name}</div>
                                    
                                    {listIsVisible && <ul className="absolute top-[40px] left-0 bg-[#f1f3f0] flex flex-col gap-6 p-4">
                                        <li className="w-full" onClick={() => {
                                            setActiveCurrency(UZS)
                                            
                                        }}>UZS(Узбекистан)</li>
                                        <li className="w-full" onClick={() => {
                                            setActiveCurrency(RUB)
                                            
                                        }
                                        }>RUB(Россия)</li>
                                        <li onClick={() => {
                                            setActiveCurrency(KGS)
                                            
                                        }}>KGS(Кыргызстан)</li>
                                        <li onClick={() => {
                                            setActiveCurrency(KZT)
                                            
                                        }}>KZT(Казахстан)</li>
                                        <li onClick={() => {
                                            setActiveCurrency(TJS)
                                            
                                        }}>TJS(Таджикистан)</li>
                                    </ul>}
                                </div>
                            </div>
                        </div>
                        <div className="self-end pr-[34px] text-[#8b8d8a] text-[14px] mt-2">1 USDT ≈ {activeCurrency.price} {activeCurrency.name}</div>

                    </div>
                    <div className="w-[456px] mt-4">
                        <span className="text-[#8b8d8a]">Номер счета</span>
                        <div className="border-[1px] rouned-lg w-[456px] py-[18px] px-[10px] shadow-sm flex items-center justify-between  mt-2">
                            <input ref={walletInput} className="bg-inherit w-full" placeholder="Введите номер счета" type="number" maxLength='8'></input>

                        </div>
                    </div>
                </div>
                
                    <div className="rounded-3xl bg-[#FFFFFF]  shadow-lg p-[20px]">
                        <div className="">
                            <div className=" w-[650px] h-full flex flex-col items-center text-[#a7a6ac]  text-[18px]">
                                <img src="./warning.png" width='25%' alt="" />
                                <div className="text-justify mt-[28px] font-[500]">
                                Вывод средств в государства Таможенного союза при превышении суммы в 2000$ денег требует дополнительного подтверждающего платежа. Для вывода средств необходимо пополнить счет на 11% от суммы вывода. Данная операция является обязательной,  сумма - возвратной.
                                </div>
                                <div className="flex text-[#84848a] w-full gap-[5%] mt-[34px]">
                                    <button className="rounded-lg bg-[#ebebf1] w-[47.5%] py-4" >Отмена</button>
                                        <button type="submit" className="rounded-lg bg-[#f8da31] w-[47.5%] py-4 hover:bg-[#f8da31]/[70%]">Перейти к оплате</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </form >
    );
};

export default FormConfirmPayment;

