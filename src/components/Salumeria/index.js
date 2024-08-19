import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const Salumeria = () => {
    const {links, setLink}= useLinks()
    return (
<div className='grid grid-cols-3 gap-4'>
                        <Link href={links.salumeriaC.urlBackOffice.interno}>
                            <span className='flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded' target="_blank" rel="noreferrer">{links.salumeriaC.urlBackOffice.name} Interno</span>
                        </Link>
                        <Link href={links.salumeriaC.urlBackOffice.externo}>
                            <span className='flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded' target="_blank" rel="noreferrer">{links.salumeriaC.urlBackOffice.name} Externo</span>
                        </Link>
                        <Link href={links.salumeriaC.urlBackOffice.alternoExterno}>
                            <span className='flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded' target="_blank" rel="noreferrer">{links.salumeriaC.urlBackOffice.name} Alternativo Externo</span>
                        </Link>
                        <Link href={links.salumeriaC.urlBackEnd.interno}>
                            <span className='flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded' target="_blank" rel="noreferrer">{links.salumeriaC.urlBackEnd.name} Interno</span>
                        </Link>
                        <Link href={links.salumeriaC.urlBackEnd.externo}>
                            <span className='flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded' target="_blank" rel="noreferrer">{links.salumeriaC.urlBackEnd.name} Externo</span>
                        </Link>
                        <Link href={links.salumeriaC.urlBackEnd.alternoExterno}>
                            <span className='flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded' target="_blank" rel="noreferrer">{links.salumeriaC.urlBackEnd.name} Alternativo Externo</span>
                        </Link>
                    </div>
    );
};

export default Salumeria;