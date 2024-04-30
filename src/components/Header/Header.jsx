import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

const Header = () =>{
    return <header className="bg-[#17181E] h-[48px] flex justify-between items-center max-w-screen">
        <LeftPart/>
        <RightPart/>
    </header>
}

export default Header;