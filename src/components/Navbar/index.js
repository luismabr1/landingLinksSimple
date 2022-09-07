/* import React from 'react';
import {useTheme} from 'next-themes'
import ToggleModeIcon from '../ToggleModeIcon';
import Link from 'next/link';


const Navbar = () => {
    const {theme, setTheme} = useTheme()
    return (
        <>
            <nav className="hidden lg:flex h-14 bg-white justify-between p-4 dark:bg-gray-800 motion-safe:animate-fadeIn w-full">
            <div className="w-auto h-auto">
				<p className="font-black text-black text-principal text-lg  dark:text-white">Modo Link</p>
			</div>
			<div className=" flex flex-row space-x-10 text-black dark:text-white">
				<Link href="/" className="font-bold text-principal">Inicio</Link>
				<Link href="/modo"className="font-bold text-principal">MoDo</Link>
				<Link href="/salumeriaChacao"className="font-bold text-principal">Salumeria Chacao</Link>
				<Link href="/salumeriaHatillo"className="font-bold text-principal">Salumeria Hatillo</Link>
				<Link href="/modoExpress"className="font-bold text-principal">MoDo Delivery</Link>
			</div>
			<div className="flex space-x-4">
				<button  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
					<ToggleModeIcon />
				</button>
			</div>
		</nav>
        </>
    );
}; 
export default Navbar; */

 
import React, {useState} from 'react';
import {useTheme} from 'next-themes'
import ToggleModeIcon from '../ToggleModeIcon';
import Link from 'next/link';
import BarsIcon from '@components/BarsIcon';

const Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const {theme, setTheme} = useTheme()
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 dark:bg-gray-800">
		
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
             <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black dark:text-white">MoDo Link</a> 
            </Link>

            <button
              className="flex text-white dark:text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden  outline-none focus:outline-none"
              type="button"
            >
			<div className="space-x-4 mr-5">
				<button  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
					<ToggleModeIcon />
				</button>
			</div>
			<span onClick={() => setNavbarOpen(!navbarOpen)}>
              <BarsIcon />
			</span>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
				<Link href="/modo">
					<a
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
					
					>
					<i className="fab fa-facebook-square text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Modo</span>
					</a>
				</Link>
              </li>
              <li className="nav-item">
				<Link href="/salumeriaChacao">
					<a
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
					
					>
					<i className="fab fa-twitter text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Salumeria Chacao</span>
					</a>
				</Link>
              </li>
			  <li className="nav-item">
				<Link href="/salumeriaHatillo">
					<a
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
					
					>
					<i className="fab fa-twitter text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Salumeria Hatillo</span>
					</a>
				</Link>
              </li>
              <li className="nav-item">
				<Link href="/conceptStore">
					<a
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
					>
					<i className="fab fa-pinterest text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Concept Store</span>
					</a>
				</Link>
              </li>
			  <li className="nav-item">
				<Link href="/modoExpress">
					<a
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
					>
					<i className="fab fa-pinterest text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Modo Delivery</span>
					</a>
				</Link>
              </li>
			  <div className={"space-x-4" + (navbarOpen ? " hidden" : " flex")}>
				<button  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
					<ToggleModeIcon />
				</button>
			  </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;