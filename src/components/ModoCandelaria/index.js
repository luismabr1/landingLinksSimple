import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const ModoExpress = () => {

    const {links, setLink}= useLinks()

    return (
<div className="md:grid md:grid-cols grid-cols-4 items-center content-center flex-wrap">
                        <Link href={links.modoCandelaria.urlBackOffice.interno}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.modoCandelaria.urlBackOffice.name} Interno</span>
                        </Link>
                        <Link href={links.modoCandelaria.urlBackOffice.externo}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.modoCandelaria.urlBackOffice.name} Externo</span>
                        </Link>
                        <Link href={links.modoCandelaria.urlBackEnd.interno}>
                            <span className='flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded' target="_blank" rel="noreferrer">{links.modoCandelaria.urlBackEnd.name} Interno</span>
                        </Link>
                        <Link href={links.modoCandelaria.urlBackEnd.externo}>
                            <span className='flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded' target="_blank" rel="noreferrer">{links.modoCandelaria.urlBackEnd.name} Externo</span>
                        </Link>
                    </div>
    );
};

export default ModoExpress;