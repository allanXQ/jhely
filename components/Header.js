import Image from 'next/image'

import {MenuIcon, SearchIcon} from '@remixicons/react/line'
import Link from 'next/link'
import { useState } from 'react'
const Header = () => {
    const [click, setclick] = useState(false)
    const [search, setsearch] = useState(false)
    const handlesearch = ()=>{
        if(window.screen.width < 480){
        search ? setsearch(false) : setsearch(true)
        }
    }
    const handleclick = ()=>{
        click ? setclick(false) : setclick(true)
    }
  return (
    <div>
        <nav className="relative flex items-center justify-between md:justify-evenly md:py-3 bg-neutral-900">
            {/* logo */}
            <div className={`${search?'hidden':'flex'} `}>
                <img src='/logo.svg' alt="Frontier Logo" width={150} height={20}/>
            </div>

            <div className='flex items-center justify-between md:justify-evenly space-x-5 lg:space-x-10'>
                {/* searchbar */}
                <div className='flex ml-2 items-center bg-inputblack p-2 rounded-lg shrink'>
                    <SearchIcon className='h-6 fill-searchgrey' onMouseEnter={handlesearch}/>
                    <input type='text' placeholder='Lorem ipsum'                     
                    className=
                    {`${search?'flex':'hidden'} sm:flex flex-grow w-[40vw] h-inph bg-transparent outline-none placeholder-searchgrey text-white`}
                    
                    ></input>
                </div>
                {/* links */}
                <div className='hidden md:flex items-center text-white space-x-10'>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                </div>
            </div>

            <MenuIcon className='hover:cursor-pointer h-6 fill-white right-5 md:hidden' onClick={handleclick}/>
            <div className='md:hidden'>
                <div className={`${click ? 'flex' : 'hidden'} absolute flex-col items-center py-8 mt-5 space-y-6 
                justify-center text-white bg-neutral-900 z-20 sm:self-center left-0 right-0
                
                `}>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                </div>
            </div>
            
        </nav>   
        <div className='h-1.5 bg-gradient-to-r from-lineblue to-linered'></div>
    </div>        
     )
}

export default Header