// eslint-disable-next-line react/prop-types
const Li = ({ children, className, active }) => {
    return <li className={`px-[10px] font-[300] flex items-center cursor-pointer hover:text-[#ffb11a] ${className}`}>
        {children}
        <span>
            <img src={active ? 'drop-down-active.png' : 'drop-down.png'} width='100%' height='100%' />
        </span>

    </li>
}

export default Li;