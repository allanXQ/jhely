import { AppsIcon,ArrowDownSIcon, ArrowUpSIcon } from "@remixicons/react/line"
import { useState } from "react"

const Rightacc = ({styles}) => {
    const [accordion, setaccordion] = useState(true)

    const handleaccordion = ()=>{
        accordion ? setaccordion(false) : setaccordion(true)
    }
    const containerstyle = styles.containerstyle
    const iconstyle = styles.iconstyle
    const headerstyle = styles.headerstyle
    const headercontentstyle = styles.headercontentstyle
    const arrowstyle = "h-6 fill-white absolute ml-[90%] xmd:ml-[85%] hover:cursor-pointer"
    const boxstyle="text-achead text-xs "

    const acc_content = [
        {head:'Accessories & Ears', percent:'9%'},
        {head:'Arms',percent:'15%'},
        {head:'Background',percent:'2%'},
        {head:'Eye',percent:'32%'},
        {head:'Glasses',percent:'3%'},
        {head:'Hair & Hats',percent:'2%'},
        {head:'Head',percent:'92%'},
        {head:'Legs & Clothes',percent:'2%'},
        {head:'Mouth',percent:'46%'},
        {head:'Hair & Hats',percent:'2%'},
        {head:'Head',percent:'92%'},
        {head:'Legs & Clothes',percent:'2%'},
        {head:'Mouth',percent:'46%'}
    ]

  return (
    <div className='flex flex-col items-start pb-10  bg-accblack h-max max-w-xl rounded relative w-[100vw] mb-5 xlg:mr-2'
    >
        <div className="flex items-center my-5 sm:pl-[1rem] xmd:pl-12" onClick={handleaccordion}>
            <div className="flex items-center space-x-1">
                <AppsIcon className={iconstyle} />
                <p>Lorem ipsum</p>
                <img src='/question.svg' className={iconstyle}/>
            </div>
            {accordion ? 
            <ArrowUpSIcon className={arrowstyle}/>
          : <ArrowDownSIcon className={arrowstyle}/>}
        </div>
        {/* content */}
        <div className={`scrollbar overflow-y-scroll max-h-96
        ${accordion?'grid':'hidden'} px-2 py-3  place-self-center gap-y-3 gsm:pl-1 gsm:grid-cols-2 gsm:gap-2 ssm:grid-cols-3 ssm:gap-x-1 sm:gap-x-3 xmd:pr-3`}>
            {acc_content.map(content=>{
                return(
                    <div key={content.head} className="flex bg-black justify-evenly w-[148px] mb-1  hover:outline outline-2 outline-linered rounded">
                        <div className="flex flex-col text-center justify-evenly px-4 py-7">
                            <span className={boxstyle}>{content.head}</span>
                            <span>Lorem ipsum</span>
                            <span className={boxstyle}>{content.percent}</span>
                        </div>
                    </div>      
                )
            })}
        </div>
</div>

  )
}

export default Rightacc