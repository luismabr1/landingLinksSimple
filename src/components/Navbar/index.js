import React from 'react';
import {useTheme} from 'next-themes'
import SearchIcon from '../SearchIcon';
import ToggleModeIcon from '../ToggleModeIcon';
import UserIcon from '../UserIcon';
import Link from 'next/link';


const Navbar = () => {
    const {theme, setTheme} = useTheme()
    return (
        <>
            <nav className="hidden lg:flex w-full h-14 bg-white justify-between p-4 dark:bg-gray-800 motion-safe:animate-fadeIn">
            <div className="w-auto h-auto">
				<p className="font-black text-principal text-lg  dark:text-white">Platzi Travel</p>
			</div>
			<div className=" flex flex-row space-x-10">
				<Link href="/" className="font-bold text-principal dark:text-white">Inicio</Link>
				<Link href="/modo"className="font-bold text-principal dark:text-white">MoDo</Link>
				<Link href="/salumeriaChacao"className="font-bold text-principal dark:text-white">Salumeria Chacao</Link>
				<Link href="/SalumeriaHatillo"className="font-bold text-principal dark:text-white">Salumeria Hatillo</Link>
				<Link href="/cds"className="font-bold text-principal dark:text-white">MoDo Delivery</Link>
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