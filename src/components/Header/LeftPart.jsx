import Navigation from "./Navigation";

const LeftPart = () => {
    return <div className="flex items-center">
        <img src='./logo.svg' width='56' height='22' className="cursor-pointer ml-[16px] mr-[20px]"></img>
        <div id='header-switcher' className="flex text-[12px] not-italic bg-[#25282C] rounded-[4px] h-[32px] items-center leading-[18px] p-[2px] gap-[2px] max-[1200px]:hidden">
            <div className="w-[80px] text-center bg-[#333537] h-[28px] rounded-[4px] flex items-center justify-center">Обмен</div>
            <div className="w-[82px] text-center pl-[3px]">WEB3</div>
        </div>
        <img src='./border.png' className='ml-[20px]' />
        <img src='./second-logo.png' className='ml-[20px]' />
        <span>
            <img src='./drop-down.png' />
        </span>
        <Navigation />
        <div className="bg-[#292A30] h-[32px] w-[140px] flex items-center rounded-[20px] px-[10px] gap-[6px] max-[1321px]:hidden">
            <img src="./search-icon.png"/>
            <p className="text-[#848488] text-[14px]">Поиск валюты</p>
        </div>
    </div>
}

export default LeftPart;