import React from 'react'
import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Header = ({darkMode, setDarkMode}) => {
  return (
    <header className="bg-emerald-200 dark:bg-gray-800	background-color: rgb(167 243 208); text-teal-800 font-bold">
        <nav className="flex justify-between items-center p-5"> 
        <h1 className="text-lg">CLEO CLYADE</h1>

        <div onClick={() => setDarkMode (!darkMode)}>
            {darkMode ? (
                <MdNightsStay className="text-2xl cursor-pointer"/>
            ) : (
                <MdWbSunny className="text-2xl cursor-pointer" />
            )} 
            
        </div>
        </nav>
    </header>
  )
}

export default Header