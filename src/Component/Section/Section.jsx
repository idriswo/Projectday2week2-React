import './style.css'
import img10 from '../../assets/Section.images/йййй 1.png'
import Button from '../Shared/Button.jsx'
import Div4ta from '../../Component/Div4ta/Div4ta.jsx'

import imgr from '../../assets/Section.images/Group 31.png'
import imgL from '../../assets/Section.images/Group 74.png'
export default function Section() {
    return (
        <section className='xl:max-w-[1560px] xl:m-auto'>
            <div className={`image relative z-0`} >
                <div className='xl:w-[1520px] xl:m-auto bg-[#000000b1] absolute z-10 h-[600px]'>
                    <div className='text-[white]'>
                        <div className='xl:max-w-[1300px] xl:m-auto flex xl:flex-row  xl:justify-between items-center flex-col gap-[50px] xl:pt-[100px] pt-[30px]'>
                            <div className='text-[white] flex flex-col xl:gap-[20px] gap-[10px]  items-start '>
                                <h1 className='text-[40px]'>Новинка в России</h1>
                                <p className='text-[17px]'>Север - теплоизоляция <br /> для сурового климата</p>
                                <h3 className='text-[40px] font-bold'>от 850 ₽ за 3м2</h3>
                                <Button>
                                    <p>Подробнее</p>
                                </Button>
                            </div>
                            <img src={img10} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className='xl:max-w-[1300px] xl:m-auto'>
                <Div4ta title={"Теплоизоляция"} imgL={imgL} imgR={imgr} />
            </div>


            <div className='xl:max-w-[1300px] xl:m-auto'>
                <Div4ta title={"Строительные блоки"} imgL={imgL} imgR={imgr} />
            </div>


            <div className='xl:max-w-[1300px] xl:m-auto'>
                <Div4ta title={"Листовые материалы"} imgL={imgL} imgR={imgr} />
            </div>


            <div className='xl:max-w-[1300px] xl:m-auto'>
                <Div4ta title={"Кровля и водосток"} imgL={imgL} imgR={imgr} />
            </div>

            <div className='xl:max-w-[1300px] xl:m-auto flex justify-center items-center py-[50px]'>
                <Button>Показать еще</Button>

            </div>
        </section>
    )
}
