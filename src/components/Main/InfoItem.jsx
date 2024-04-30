// eslint-disable-next-line react/prop-types
const InfoItem = ({ icon, name, price, percent, plus }) => {
    return <li className="text-[#121214] text-[14px] flex w-full">
        <div className="flex w-[60px] items-center">
            <span className="w-[16px] h-[16px]">
                <img src={icon} width='16px' height='16px' />
            </span>

            <p className="ml-[4px]">{name}</p>
        </div>

        <p className="ml-[50px] w-[80px]">{price}</p>
        <p className={`ml-[30px]  ${plus ? 'text-[#20B26C]' : 'text-[#EF454A]'}`}>{percent}</p>
    </li>
}

export default InfoItem;