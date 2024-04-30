import InfoItem from "./InfoItem";

const Info = () => {
    return <section className="w-[620px] h-[604px] text-[#121214]">
        <h1 className="text-[48px] font-[IBMPlexSans-Bold]">Купить в один клик</h1>
        <h2 className="text-[24px] mt-[14px] mb-[48px]">Более 65 фиатных валют и более 100 криптовалют у вас под рукой</h2>
        <div className="flex w-full">
            <div className="text-[#81858c] border-r-[1px] w-[285px] ">
                <h3 className="mb-[14px]">
                    Лучшие варианты
                </h3>
                <ul className="flex flex-col gap-[24px]">
                    <InfoItem icon='./coins/bitcoin.svg' name='BTC' price='$64,121' percent="+1.05%" plus={true}/>
                    <InfoItem icon='./coins/eth.svg' name='ETH' price='$3,072' percent="+1.55%" plus={true}/>
                    <InfoItem icon='./coins/mnt.svg' name='MNT' price='$1,1388' percent="-0,33%"/>
                    <InfoItem icon='./coins/xrp.svg' name='XRP' price='$0,5023' percent="-0,16%"/>
                </ul>
            </div>
            <div className="text-[#81858c] w-[285px] pl-[20px]">
                <h3 className="mb-[14px]">
                    Недавно внесенный в список
                </h3>
                <ul className="flex flex-col gap-[24px]">
                    <InfoItem icon='./coins/BRETT.png' name='BRETT' price='$0,06168' percent="-0.05%"/>
                    <InfoItem icon='./coins/OMNI.png' name='OMNI' price='$25.1732' percent="+0.05%" plus={true}/>
                    <InfoItem icon='./coins/MSTAR.png' name='MSTAR' price='$0.05854' percent="-1.05%"/>
                    <InfoItem icon='./coins/PRCL.png' name='PRCL' price='$0.4673' percent="-3.05%"/>
                </ul>
            </div>
        </div>
        <div className="h-[100px] w-[620px] bg-[#FFFFFF] rounded-[4px] mt-[46px] flex justify-between items-center p-4">
            <div>
                <h3 className="font-[IBMPlexSans-Bold]">Булл-Ран</h3>
                
                <div className="flex gap-2">
                    <p className="text-[#81858C] text-[14px]">Заработайте до 1 ETH в виде бонусов</p>
                    <img src='./arrow-right.png'/>
                </div>
            </div>
            <div className="w-[86px] h-[86px]">
                <img src='./bull.png'/>
            </div>
        </div>
    </section>
}

export default Info;