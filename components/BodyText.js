import Pills from "./Pills"

const BodyText = () => {
  return (


    <div className="flex flex-col justify-center items-center text-white 
    text-sm font-normal leading-5 mt-[8%]">
        <div className="flex flex-col items-center text-sm xsm:text-base sm:ml-3 text-center md:space-y-2 md:ml-5">
        <p className="font-extrabold  md:text-4xl">Lorem ipsum</p>
        <p className="font-normal md:text-base">Created by: <span className="text-linered">Lorem ipsum</span></p>
        <p className="font-normal md:text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
        </div>
        
        
        
        <Pills/>
    </div> 
     
  )
}

export default BodyText