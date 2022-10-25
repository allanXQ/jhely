import { AppsIcon,ArrowDownSIcon, ArrowUpSIcon } from "@remixicons/react/line"
import { useState } from "react"

const Leftacc = ({styles}) => {
    const [accordion, setaccordion] = useState(true)

    const handleaccordion = ()=>{
        accordion ? setaccordion(false) : setaccordion(true)
    }
    const iconstyle = styles.iconstyle
    const arrowstyle = "h-6 fill-white absolute ml-[90%] sm:ml-[85%] xmd:ml-[86%] hover:cursor-pointer"
    const linkscontainerstyle = "flex flex-col items-start"
    const linkstyle = "flex mt-4 flex-wrap items-center justify-center "

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
    <div className={`${accordion?'flex':'hidden'} flex-col sm:pl-10 `}>
        <div className="flex text-left xsm:pr-10 text-sm">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   
        </div>
        <div className="flex flex-wrap items-start xxsm:space-x-2 xsm:flex-row xsm:space-x-10">
            <div className={linkscontainerstyle}> 
                <div className={linkstyle}>
                    <img src='/boxarrow.svg' className={iconstyle}/>
                    <p className="text-linered">Lorem ipsum.com</p>
                </div>

                <div className={linkstyle}>
                    <img src='/ig.svg' className={iconstyle}/>
                    <p className="text-linered">@Lorem ipsum</p>
                </div>    
            </div>

            <div className={linkscontainerstyle}> 
                <div className={linkstyle}>
                    <img src='/discord.svg' className={iconstyle}/>
                    <p className="text-linered">@Lorem ipsum</p>
                </div>

                <div className={linkstyle}>
                    <img src='/twitter.svg' className={iconstyle}/>
                    <p>@Lorem ipsum</p>
                </div>    
            </div>   
        </div>
    </div>
</div>
  )
}

export default Leftacc