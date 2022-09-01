import React from 'react';
import {useTheme} from 'next-themes'
import SearchIcon from '../SearchIcon';
import ToggleModeIcon from '../ToggleModeIcon';
import UserIcon from '../UserIcon';


const Navbar = () => {
    const {theme, setTheme} = useTheme()
    return (
        <>
            <nav className="hidden lg:flex w-full h-14 bg-white justify-between p-4 dark:bg-gray-800 motion-safe:animate-fadeIn">
            <div className="w-auto h-auto">
				<p className="font-black text-principal text-lg  dark:text-white">Platzi Travel</p>
			</div>
			<div className=" flex flex-row space-x-10">
				<a href="/home" className="font-bold text-principal dark:text-white">Inicio</a>
				<a href="/recomendados"className="font-bold text-principal dark:text-white">Recomendados</a>
				<a href="/rentas_destacadas"className="font-bold text-principal dark:text-white">Rentas</a>
				<a href="/faqs"className="font-bold text-principal dark:text-white">FAQS</a>
				<a href="/nosotros"className="font-bold text-principal dark:text-white">Sobre nosotros</a>
			</div>
			<div className="flex space-x-4">
				<SearchIcon />
				<button  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
					<ToggleModeIcon />
				</button>
				<UserIcon />
			</div>
		</nav>
        </>
    );
};

export default Navbar;