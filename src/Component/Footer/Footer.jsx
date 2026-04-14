import imgFooter from '../../assets/Footer.images/Group 43.png'
import imgFooter2 from '../../assets/Footer.images/Group 7.png'


import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaHome } from "react-icons/fa";



export default function Footer() {
    return (
        <footer className="bg-[#1E2126] mwax-w-[1560px] m-auto">
            <div className="max-w-[1300px] m-auto flex justify-between items-start py-[90px]">
                <div className='text-[gray] flex flex-col gap-[20px] items-start'>
                    <img src={imgFooter} alt="" />
                    <h3 className='text-[white]'>8-800-550-01-09</h3>
                    <p>postav.irk@mail.ru</p>
                    <img src={imgFooter2} alt="" />
                    <h3>© 2023 все права защищены</h3>
                </div>
                <div className='flex justify-between items-start gap-[80px]'>
                    <div className='text-[gray] flex flex-col gap-[20px] items-start'>
                        <h3 className='text-[white]'>Информация</h3>
                        <p>Оплата</p>
                        <p>Доставка</p>
                        <p>Политика обработки персональных данных</p>
                        <p>Согласие на обработку персональных данных</p>
                    </div>
                    <div className='text-[gray] flex flex-col gap-[20px] items-start'>
                        <h3 className='text-[white]'>Центральный офис и склад</h3>
                        <div className='flex gap-[10px] items-center'>
                            <FaLocationDot className='text-[#167FFE]' />
                            <p>г. Иркутск ул. Ракитная стр 4 корп 11</p>
                        </div>
                        <div className='flex gap-[10px] items-center'>
                            <FaPhoneAlt className='text-[#167FFE]' />
                            <p>8-800-550-01-09</p>
                        </div>
                        <div className='flex gap-[10px] items-center'>
                            <FaClock className='text-[#167FFE]' />
                            <p>Режим работы: Пн-Пт с 9:00 до 18:00, Сб с 9:00 до 14:00</p>
                        </div>
                        <div className='flex gap-[10px] items-center'>
                            <FaHome className='text-[#167FFE]' />
                            <p>Региональные склады</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
