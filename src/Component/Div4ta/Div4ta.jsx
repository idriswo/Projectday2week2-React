import DivSmall from "../DivSmall/DivSmall.jsx"
import img10 from '../../assets/Section.images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1.png' 
import imgxatak from '../../assets/Section.images/Group 73.png' 
import Button from "../Shared/Button.jsx"

import imgIcon1 from '../../assets/DivSmall/Group 85.png'
import imgIcon2 from '../../assets/DivSmall/Group 86.png'
import imgIcon3 from '../../assets/DivSmall/Group 87.png'
import imgIcon4 from '../../assets/DivSmall/Group 88.png'

export default function Div4ta(props) {
    const { title, imgL, imgR } = props
    return (
        <>
            <div className="max-w-[1300px] m-auto py-[100px] my-[50px] border-b-[3px] border-[#bcbaba]">
                <div className="flex  justify-between items-center max-w-[1200px] m-auto py-[20px] mr-[20px]">
                    <h1 className="text-[40px]">{title}</h1>
                    <Button>Смотреть все</Button>
                </div>
                <div className="flex justify-between items-center pt-[20px]">
                    <img className="mr-[30px]" src={imgL} alt="" />
                    <div className="max-w-[1200px] m-auto flex gap-[20px] justify-between items-center text-center">
                        <DivSmall img10={img10} xatak={imgxatak} prag={'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3'} price={"2 491 ₽/шт."} icon1={imgIcon1} icon2={imgIcon2} icon3={imgIcon3} icon4={imgIcon4} />
                        <DivSmall img10={img10} xatak={imgxatak} prag={'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3'} price={"2 491 ₽/шт."} icon1={imgIcon1} icon2={imgIcon2} icon3={imgIcon3} icon4={imgIcon4} />
                        <DivSmall img10={img10} xatak={imgxatak} prag={'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3'} price={"2 491 ₽/шт."} icon1={imgIcon1} icon2={imgIcon2} icon3={imgIcon3} icon4={imgIcon4} />
                        <DivSmall img10={img10} xatak={imgxatak} prag={'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3'} price={"2 491 ₽/шт."} icon1={imgIcon1} icon2={imgIcon2} icon3={imgIcon3} icon4={imgIcon4} />
                    </div>
                    <img className="ml-[30px]" src={imgR} alt="" />
                </div>
            </div>
        </>
    )
}
