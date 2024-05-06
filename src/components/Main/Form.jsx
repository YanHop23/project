import { useEffect, useRef, useState } from "react";
import KGSimg from './../imag/KGS.png';

// commission 1 (form)
// eslint-disable-next-line react/prop-types
const Form = ({ onView, onValueChange}) => {
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



    const [buttonText, setButtonText] = useState('Перейти к оплате');

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

        onView();
    }

    const inputHandler = () => {
        if (usdtInput.current.value !== '') {
            setButtonText('Перейти к оплате')
        }
        mxnInput.current.value = (usdtInput.current.value * activeCurrency.price).toFixed(2);
        const value = usdtInput.current.value;
        setInputValue(value);
        onValueChange(value);
        гі
    }

    const testValue = 22;

    return <form className="w-[520px] h-[604px] rounded-3xl bg-[#FFFFFF] shadow-lg" onSubmit={formSubmit}>
        <div className="flex w-full h-[80px] items-center text-[32px] bg-[#E9EDF2] rounded-t-3xl cursor-pointer">
            <div className="w-1/2 text-[#ADB1B8] text-center h-full pt-[20px] rounded-tl-3xl rounded-br-2xl">
                Купить
            </div>
            <div className="w-1/2 text-center rounded-t-3xl bg-[#FFFFFF] h-full pt-[20px] text-[#121214]">
                Продать
            </div>
        </div>
        <div className="text-black w-full flex flex-col items-center py-[30px]">
            <div className="w-[456px]">
                <span className="text-[#8b8d8a]">Продать</span>
                <div className="border-[1px] rouned-lg w-[456px] p-[10px] shadow-sm flex items-center justify-between mt-2">
                    <input className="bg-inherit" placeholder="Введите сумму.." type="number" ref={usdtInput} onChange={inputHandler}></input>
                    <div className="flex gap-4 items-center">
                                                    {/* Todos */}
                        <p className="text-[#D6850D]">Все</p>
                        <div className="bg-[#f1f3f0] flex items-center gap-2 cursor-pointer p-2">
                            <img src='./usdt.svg' width='24' height='24'></img>
                            <div>USDT</div>
                            <span className="w-[12px] h-[12px]">
                                <img src='./drop-down-2.png'></img>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-end pr-[34px] text-[#8b8d8a] text-[14px] mt-2">Баланс 3141.42 USDT <span className="text-[#D6850D]">Перевести сейчас</span></div>
            <div className="w-[456px]">
                <span className="text-[#8b8d8a]">Получить</span>
                <div className="border-[1px] rouned-lg w-[456px] p-[10px] shadow-sm flex items-center justify-between mt-2">
                    <input className="bg-inherit w-max" placeholder="Введите сумму" type="text" ref={mxnInput}></input>
                    <div className="flex gap-4 items-center">
                        <div className="bg-[#f1f3f0] flex items-center gap-2 cursor-pointer p-2 relative" onClick={() => setListIsVisible(!listIsVisible)}>
                            <img src={activeCurrency.imag} width='24' height='24'></img>
                            <div>{activeCurrency.name}</div>
                            <span className="w-[12px] h-[12px]">
                                <img src='./drop-down-2.png'></img>
                            </span>
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
            </div>
            <div className="w-[456px] mt-4">
                <span className="text-[#8b8d8a]">Номер счета</span>
                <div className="border-[1px] rouned-lg w-[456px] py-[18px] px-[10px] shadow-sm flex items-center justify-between  mt-2">
                    <input ref={walletInput} className="bg-inherit w-full" placeholder="Введите номер счета" type="number" maxLength='8'></input>

                </div>
            </div>
            <div className="text-[#8b8d8a] self-start ml-[34px] text-[14px] mt-14">1 USDT ≈ {activeCurrency.price} {activeCurrency.name}</div>
                <button type='submit' className={`w-[456px] rounded-lg  p-[12px] mt-2 transition duration-300 ease-in-out ${buttonText == 'Перейти к оплате' ? 'bg-[#F7A600] hover:bg-[#F7A600]/[50%]' : 'bg-[#ee2f62] hover:bg-[#ee2f62]/[50%] text-white'}`}>{buttonText}</button>
            </div>
    </form >
    
}
export default Form;