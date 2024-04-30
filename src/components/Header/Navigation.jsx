import Li from "./Li";

const Navigation = () =>{
    return <nav className="text-[12px] leading-[20px] ml-[0px]">
        <ul className="flex">
            <Li active={true} className='border-b-0 border-[#ffb11a] mb-[2px] pt-[2px] text-[#ffb11a] leading-[20px]'>Купить криптовалюту</Li>
            <Li>Рынки</Li>
            <Li>Торговля</Li>
            <Li>Производные</Li>
            <Li>Инструменты</Li>
            <Li>Финансы</Li>
        </ul>
    </nav>
}

export default Navigation;