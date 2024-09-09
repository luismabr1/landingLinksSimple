
'use client'
import {useState} from 'react';
import { useTheme } from "next-themes";
import ToggleModeIcon from '../ToggleModeIcon';
import Link from 'next/link';
import BarsIcon from '../BarsIcon';


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [navbarOpenMobile, setNavbarOpenMobile] = useState(false)
  const {setTheme, theme } = useTheme();
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 dark:text-white bg-white mb-3 dark:bg-black">
		
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-end">
            <Link href="/">
             <span className="text-sm font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-black dark:text-white">MoDo Link</span> 
            </Link>
            <button
              className="flex text-white dark:text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden  outline-none focus:outline-none"
              type="button"
            >	

			<div onClick={() => setNavbarOpenMobile(!navbarOpenMobile)} className='flex relative  text-left'>
			<div className=" w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ">
				<div className={"space-x-4"}>
					<span onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
						<ToggleModeIcon />
					</span>
				</div>	
				<span className='invert dark:invert-0 '>
					<BarsIcon />
				</span>

			<ul transition='true' className={"absolute flex-col right-0 z-10 mt-3 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in" + (navbarOpenMobile ? " flex" : " hidden")}>
				<div className="py-1">
					<Link href="/modo"
					className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
					>
				              MoDo
					</Link>
				</div>
				<div className="py-1">
					<Link href="/salumeriaChacao"
					className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
					>
				              Salumeria
					</Link>
				</div>
				<div className="py-1">
					<Link href="/conceptStore"
					className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
					>
				             Concept Store
					</Link>
				</div>
				<div className="py-1">
					<Link href="/modoExpress"
					className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
					>
				             Produccion Piquin
					</Link>
				</div>
				<div className="py-1">
					<Link href="/modoSanLuis"
					className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
					>
				             MoDo San Luis
					</Link>
				</div>
				<div className="py-1">
					<Link href="/modoGlpi"
					className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
					>
				             Soporte GLPI
					</Link>
				</div>
				<div className="py-1">
					<Link href="/modoAulaVirtual"
					className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
					>
				             Aula Virtual
					</Link>
				</div>

			</ul>
			</div>
			
		</div>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center sm:hidden md:hidden " + (navbarOpen ? " flex" : " hidden")
            }
            id="menu"
          >
			<ul className={"flex flex-col lg:flex-row list-none lg:ml-auto" } >
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
					<i className="text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Salumeria</span>
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
					<i className="text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Produccion Piquin</span>
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
					<i className="text-lg leading-lg text-black dark:text-white opacity-75"></i><span className="ml-2">Aula Virtual</span>
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
