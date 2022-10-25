import Image from "next/image"
import Accordions from "./Accordions"
import BodyImages from "./BodyImages"
import BodyText from "./BodyText"

const Body = () => {
  return (
    <div className='bg-gradient-to-r from-mainstart to-mainend bg-right bg-cover xlg:bg-[length:87vw] bg-no-repeat'>
        <div className='flex flex-col h-fit'>
          <BodyImages/>
          <BodyText/>
          {/* <Pills/> */}
          <Accordions/>
        </div>
        <div className="flex items-center justify-center pt-12 pb-2 md:pt-20 pb-8 bg-neutral-900">
          <Image src='/flogo.svg' alt="Frontier Logo" width={150} height={56}/>
        </div>
    </div>
  )
}

export default Body