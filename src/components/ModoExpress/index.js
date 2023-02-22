import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const ModoExpress = () => {

    const {link, setLink}= useLinks()

    return (
<div className='flex items-center justify-center h-60'>
                        <Link href={link.produccionPiquin.urlBackOffice.interno}>
                            <a className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.produccionPiquin.urlBackOffice.name} Interno</a>
                        </Link>
                        <Link href={link.produccionPiquin.urlBackOffice.externo}>
                            <a className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.produccionPiquin.urlBackOffice.name} Externo</a>
                        </Link>
                        <Link href={link.produccionPiquin.urlBackOffice.alternoExterno}>
                            <a className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.produccionPiquin.urlBackOffice.name} Alternativo Externo</a>
                        </Link>
                        <Link href={link.produccionPiquin.urlBackEnd.interno}>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.produccionPiquin.urlBackEnd.name} Interno</a>
                        </Link>
                        <Link href={link.produccionPiquin.urlBackEnd.externo}>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.produccionPiquin.urlBackEnd.name} Externo</a>
                        </Link>
                        <Link href={link.produccionPiquin.urlBackEnd.alternoExterno}>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.produccionPiquin.urlBackEnd.name} Alternativo Externo</a>
                        </Link>
                    </div>
    );
};

export default ModoExpress;