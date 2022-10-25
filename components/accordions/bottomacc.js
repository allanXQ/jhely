import { AppsIcon,ArrowDownSIcon, ArrowUpSIcon } from "@remixicons/react/line"
import { useState } from "react"

const Bottomacc = ({styles}) => {
    const [accordion, setaccordion] = useState(true)

    const handleaccordion = ()=>{
        accordion ? setaccordion(false) : setaccordion(true)
    }
    const containerstyle = styles.containerstyle
    const iconstyle = styles.iconstyle
    const headerstyle = styles.headerstyle
    const headercontentstyle = styles.headercontentstyle
    const arrowstyle = "h-6 fill-white absolute ml-[90%] sm:ml-[85%] xmd:ml-[86%] hover:cursor-pointer"


  return (
    <div className='flex flex-col items-start pb-10 bg-accblack h-max max-w-xl rounded relative w-[100vw] mb-5'>
    <div className="flex items-center  my-5 sm:pl-10 " onClick={handleaccordion}>
        <div className="flex items-center space-x-1">
            <AppsIcon className={iconstyle} />
            <p>Lorem ipsum</p>
        </div>
        {accordion ? 
            <ArrowUpSIcon className={arrowstyle}/>
          : <ArrowDownSIcon className={arrowstyle}/>}
    </div>
      {/* content */}  
    </div>
  )
}

export default Bottomacc