import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const Calidad = () => {

    const {link, setLink}= useLinks()
    return (
            <div className='flex items-center justify-center h-60'>
                        <Link href={link.calidad.urlBackOffice.interno}>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.calidad.urlBackOffice.name} Interno</a>
                        </Link>
                        <Link href={link.calidad.urlBackOffice.externo}>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.calidad.urlBackOffice.name} Externo</a>
                        </Link>
{/*                         <Link href={link.calidad.urlBackEnd.interno}>
                            <button className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">{link.calidad.urlBackEnd.name} Interno</button>
                        </Link>
                        <Link href={link.calidad.urlBackEnd.externo}>
                            <button className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">{link.calidad.urlBackEnd.name} Externo</button>
                        </Link>  */}
</div>
    )
}

export default Calidad;