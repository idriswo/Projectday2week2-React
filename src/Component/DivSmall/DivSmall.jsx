

export default function DivSmall(props) {
    const { img10, prag, price,icon1 , icon2, icon3 ,  icon4  ,xatak} = props
    return (
        <>
            <div className="w-[300px] h-[487px] flex flex-col gap-[20px]">
                <img className="w-[300px] h-[240px]" src={img10} alt="" />
                <div className="p-[15px] flex flex-col gap-[15px]">
                    <img src={xatak} alt="" />
                    <p>{prag}</p>
                    <h3 className="text-[33px] text-[#167FFE] font-bold">{price}</h3>
                    <div className="flex gap-[10px] justify-center items-center">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                        <img src={icon4} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
