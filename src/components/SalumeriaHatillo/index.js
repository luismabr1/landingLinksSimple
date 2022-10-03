import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const Salumeria = () => {

    const {link, setLink}= useLinks()

    return (
        <div className='flex items-center justify-center h-60'>
                        <Link href={link.salumeriaH.urlBackOffice.interno}>
                        <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.salumeriaH.urlBackOffice.name} Interno</a>
                        </Link>
                        <Link href={link.salumeriaH.urlBackOffice.externo}>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.salumeriaH.urlBackOffice.name} Externo</a>
                        </Link>
                        <Link href={link.salumeriaH.urlBackEnd.interno}>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.salumeriaH.urlBackEnd.name} Interno</a>
                        </Link>
                        <Link href={link.salumeriaH.urlBackEnd.externo}>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.salumeriaH.urlBackEnd.name} Externo</a>
                        </Link>
                    </div>
    );
};

export default Salumeria;