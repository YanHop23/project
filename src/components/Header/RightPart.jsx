const RightPart = () => {
    return <div className="flex items-center text-[14px]">
        <div className="flex items-center max-[1561px]:hidden">
            <div className="bg-[#f7a600] rounded-[4px] text-[#121214] py-[6px] px-[16px] ">Депозит</div>
        <div className="ml-[16px]">Ресурсы</div>
        <span>
            <img src='./drop-down.png' />
        </span>
        <div className="ml-[16px]">
            Заказы
        </div>
        <span>
            <img src='./drop-down.png' />
        </span>
        </div>
        
        <div className="flex items-center gap-2 mr-[12px] ml-[14px]">
    <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[12px]">
        Внести
    </button>
    <select className="rounded px-0 py-0 bg-transparent text-[12px]">
        <option value="АКТИВЫ">АКТИВЫ</option>
    </select>
    <select className="rounded px-0 py-0 bg-transparent text-[12px]">
        <option className="text-sm" value="ОРДЕРА">ОРДЕРА</option>
    </select>
</div>



    </div>
}

export default RightPart;