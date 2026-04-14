
export default function Button(props) {
    const {children} = props
    return (
        <>
        <button className="py-[9px] px-[35px] bg-[#167FFE] text-[white] text-[17px]" >
            {children}
        </button>
        </>
    )
}
