import Bottomacc from "./accordions/bottomacc"
import Leftacc from "./accordions/leftacc"
import Rightacc from "./accordions/rightacc"

const Accordions = () => {
    const containerstyle = //sm:pl-10  md:pl-10
     'flex flex-col items-start pb-10  bg-accblack h-max max-w-xl rounded relative w-[100vw] mb-5 xlg:mr-2'
    const iconstyle ="h-4 fill-white"
    const headerstyle = "flex items-center  my-5"
    const headercontentstyle = "flex items-center space-x-1"
    const arrowdownstyle = "h-6 fill-white absolute ml-[90%] hover:cursor-pointer"

    const styleprops = {
        iconstyle
    }
  return (
    <div className="flex flex-wrap xlg:space-x-2 xlg:space-y-0 items-start justify-evenly text-white mb-2 ">
        {/* left accordion */}
        <Leftacc styles={styleprops}/>

        {/* right accordions div */}
        <div className="flex flex-col max-w-xl">
            <Rightacc styles={styleprops}/>
            <Bottomacc styles={styleprops}/>
        </div>           
    </div>                      
  )
}

export default Accordions