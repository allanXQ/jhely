import { AppsIcon, PriceTagIcon } from "@remixicons/react/line"
const Pills = () => {
    
  const iconstyle ="h-4 fill-white"
  const pillstyle = "m-5 flex flex-wrap justify-center items-center space-x-1 bg-pill px-10 py-2"
  return (
    <div className="flex items-center justify-center md:space-x-12  flex-wrap text-white my-5">
        <div className={pillstyle}>
            <img src='/Vector.svg' className={iconstyle}/>
            <p>Lorem ipsum</p>
        </div>
        
        <div className="m-5 flex flex-wrap justify-center items-center space-x-1 bg-pillblack px-10 py-2">
            <AppsIcon className={iconstyle}/>
            <p>Lorem ipsum</p>
        </div>
        
        <div className={pillstyle}>
            <PriceTagIcon className={iconstyle}/>
            <p>Lorem ipsum</p>
        </div>
    </div>
  )
}

export default Pills