import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>MoDo Link</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className='grid gap-10 text-modo-negro no-underline mt-10
         leading-5 m-0 text-6xl text-center dark:text-white'>
          Bienvenido a <a className= 'hover:text-neutral-200 dark:hover:text-neutral-200 text-rose-500 active:bg-violet-700 ' href="#" /* target="_blank" rel="noreferrer" */>MoDo </a> Link!
        </h1>
      <main className='min-h-fit pt-16 flex-1 flex flex-col justify-center items-center'>

        <p className='text-black dark:text-white mb-1 text-2xl'>
          Elija una empresa{' '}

        </p>

        <div className='max-w-fit md:grid grid-cols-5 items-center content-center flex-wrap '>

        <Link href="/modo" className='m-3 p-4 text-left text-inherit no-underline border-solid border border-gray-800 rounded-lg transition-colors delay-50 hover:text-indigo-600  hover:border-indigo-600 duration-100 max-w-xs'>

           <button className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">MoDo</button>
        </Link>

        <Link href="/conceptStore" className='m-3 p-4 text-left text-inherit no-underline border-solid border border-gray-800 rounded-lg transition-colors delay-50 duration-100 max-w-xs'>
          <button className="bg-transparent hover:bg-black text-black dark:hover:bg-white dark:hover:text-black dark:text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">Concept Store</button>
          </Link>

          <Link href="/salumeriaChacao" className='m-3 p-4 text-left text-inherit no-underline border-solid border border-gray-800 rounded-lg transition-colors delay-50 hover:text-indigo-600  hover:border-indigo-600 duration-100 max-w-xs'>
          <button className="bg-transparent hover:bg-black text-black dark:hover:bg-white dark:hover:text-black dark:text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">Salumeria Chacao</button>
          </Link>

          <Link href="/salumeriaHatillo" className='m-3 p-4 text-left text-inherit no-underline border-solid border border-gray-800 rounded-lg transition-colors delay-50 hover:text-indigo-600  hover:border-indigo-600 duration-100 max-w-xs'>
          <button className="bg-transparent hover:bg-black text-black dark:hover:bg-white dark:hover:text-black dark:text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">Salumeria Hatillo</button>
          </Link>

          <Link href="/modoExpress" className='m-3 p-4 text-left text-inherit no-underline border-solid border border-gray-800 rounded-lg transition-colors delay-50 hover:text-indigo-600  hover:border-indigo-600 duration-100 max-w-xs'>
          <button className="bg-transparent hover:bg-black text-black dark:hover:bg-white dark:hover:text-black dark:text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">MoDo Delivery</button>
          </Link>
          <Link href="/modoCandelaria" className='m-3 p-4 text-left text-inherit no-underline border-solid border border-gray-800 rounded-lg transition-colors delay-50 hover:text-indigo-600  hover:border-indigo-600 duration-100 max-w-xs'>
          <button className="bg-transparent hover:bg-black text-black dark:hover:bg-white dark:hover:text-black dark:text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">MoDo Candelaria</button>
          </Link>
          <Link href="/modoGlpi" className='m-3 p-4 text-left text-inherit no-underline border-solid border border-gray-800 rounded-lg transition-colors delay-50 hover:text-indigo-600  hover:border-indigo-600 duration-100 max-w-xs'>
          <button className="bg-transparent hover:bg-black text-black dark:hover:bg-white dark:hover:text-black dark:text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">MoDo GLPI</button>
          </Link>
{/*           <Link href="/calidad" className='m-3 p-4 text-left text-inherit no-underline border-solid border border-gray-800 rounded-lg transition-colors delay-50 hover:text-indigo-600  hover:border-indigo-600 duration-100 max-w-xs'>
          <button className="bg-transparent hover:bg-black text-black dark:hover:bg-white dark:hover:text-black dark:text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">MoDo Calidad</button>
          </Link> */}



        </div>
      </main>
</>
  )
}
