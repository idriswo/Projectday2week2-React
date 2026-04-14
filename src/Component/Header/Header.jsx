import imgNavbar from '../../assets/Header.images/Group 42.png'
import { FaPhoneAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



export default function Header() {
    return (
        <>
            <nav className="max-w-[1300px] m-auto  flex justify-between py-[20px]">
                <div className='flex gap-[40px] items-center'>
                    <img src={imgNavbar} alt="" />
                    <p className='text-[gray] text-[17px]'>От завода без посредников</p>
                </div>
                <div className='flex gap-[70px] items-center'>
                    <p className='text-[#167FFE]'>Доставка</p>
                    <p className='text-[#167FFE]'>Оплата</p>
                    <p className='text-[#167FFE]'>Контакты</p>
                    <div className='flex gap-[20px] items-center'>
                        <FaPhoneAlt className='text-[#167FFE]'/>
                        <h3 className='text-[20px] font-bold'>8-800-550-01-09</h3>
                    </div>
                    <FaShoppingCart className='text-[#167FFE]'/>
                </div>
            </nav>
        </>
    )
}
