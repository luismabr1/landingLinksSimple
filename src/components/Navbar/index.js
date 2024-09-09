 
'use client'
import {useState} from 'react';
import { useTheme } from "next-themes";
import ToggleModeIcon from '../ToggleModeIcon';
import Link from 'next/link';
import BarsIcon from '../BarsIcon';


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const {setTheme, theme } = useTheme();
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 dark:text-white bg-white mb-3 dark:bg-slate-900">
		
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
             <span className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black dark:text-white">MoDo Link</span> 
            </Link>
            <button
              className="flex text-white dark:text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden  outline-none focus:outline-none"
              type="button"
            >			
				<span className="space-x-4 mr-5"  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
					<ToggleModeIcon />
				</span>
            </button>
            <button
              className="flex text-white dark:text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden  outline-none focus:outline-none"
              type="button"
            >			
			<span className='invert dark:invert-0' onClick={() => setNavbarOpen(!navbarOpen)}>
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
					<span
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
					
					>
					<i className="text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Modo</span>
					</span>
				</Link>
              </li>
              <li className="nav-item">
				<Link href="/salumeriaChacao">
					<span
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
					
					>
					<i className="text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Salumeria Chacao</span>
					</span>
				</Link>
              </li>
              <li className="nav-item">
				<Link href="/conceptStore">
					<span
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
					>
					<i className="text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Concept Store</span>
					</span>
				</Link>
              </li>
			  <li className="nav-item">
				<Link href="/modoExpress">
					<span
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
					>
					<i className="text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Produccion y Acopio Piquin</span>
					</span>
				</Link>
              </li>
			  <li className="nav-item">
				<Link href="/modoSanLuis">
					<span
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
					>
					<i className="text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">MoDo San Luis</span>
					</span>
				</Link>
              </li>
			  <li className="nav-item">
				<Link href="/modoGlpi">
					<span
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
					>
					<i className="text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Soporte GLPI</span>
					</span>
				</Link>
              </li>
			  <li className="nav-item">
				<Link href="/modoAulaVirtual">
					<span
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
					>
					<i className="text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">MoDo Aula Virtual</span>
					</span>
				</Link>
              </li>
			  <div className={"space-x-4" + (navbarOpen ? " hidden" : " flex")}>
				<span onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
					<ToggleModeIcon />
				</span>
			  </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;