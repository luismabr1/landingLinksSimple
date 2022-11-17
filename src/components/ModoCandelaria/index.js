import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const ModoExpress = () => {

    const {link, setLink}= useLinks()

    return (
<div className='flex items-center justify-center h-60'>
                        <Link href={link.modoCandelaria.urlBackOffice.interno}>
                            <a className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.modoCandelaria.urlBackOffice.name} Interno</a>
                        </Link>
                        <Link href={link.modoCandelaria.urlBackOffice.externo}>
                            <a className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.modoCandelaria.urlBackOffice.name} Externo</a>
                        </Link>
                        <Link href={link.modoCandelaria.urlBackEnd.interno}>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.modoCandelaria.urlBackEnd.name} Interno</a>
                        </Link>
                        <Link href={link.modoCandelaria.urlBackEnd.externo}>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.modoCandelaria.urlBackEnd.name} Externo</a>
                        </Link>
                    </div>
    );
};

export default ModoExpress;