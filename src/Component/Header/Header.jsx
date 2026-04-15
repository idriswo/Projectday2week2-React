import imgNavbar from '../../assets/Header.images/Group 42.png'
import { FaPhoneAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



export default function Header() {
    return (
        <>
            <nav className="xl:max-w-[1300px] xl:m-auto  flex justify-between items-center py-[20px] px-[20px] xl:px-[0px]">
                <div className='flex gap-[40px] items-center'>
                    <img src={imgNavbar} alt="" />
                    <p  className='xl:text-[gray] xl:text-[17px] xl:block hidden '>От завода без посредников</p>
                </div>
                <div className='xl:block xl:flex xl:gap-[70px] xl:items-center hidden '>
                    <p className='text-[#167FFE]'>Доставка</p>
                    <p className='text-[#167FFE]'>Оплата</p>
                    <p className='text-[#167FFE]'>Контакты</p>
                    <div className='flex gap-[20px] items-center'>
                        <FaPhoneAlt className='text-[#167FFE]'/>
                        <h3 className='text-[20px] font-bold'>8-800-550-01-09</h3>
                    </div>
                    <FaShoppingCart className='text-[#167FFE]'/>
                </div>
                <h1 className='xl:hidden block text-[36px] font-bold'>≡</h1>
            </nav>
        </>
    )
}
