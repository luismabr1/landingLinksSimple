import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const ModoSanLuis = () => {

    const {links, setLink}= useLinks()

    return (
<div className='grid grid-cols-3 gap-4'>
{/*                         <Link href={link.produccionPiquin.urlBackOffice.interno}>
                            <Link className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.produccionPiquin.urlBackOffice.name} Interno</Link>
                        </Link> */}
                        <Link href={links.modoSanLuis.url.externo}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.modoSanLuis.url.name} Externo</span>
                        </Link>
{/*                         <Link href={link.produccionPiquin.urlBackOffice.alternoExterno}>
                            <Link className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.produccionPiquin.urlBackOffice.name} Alternativo Externo</Link>
                        </Link> */}
                       {/*  <Link href={link.produccionPiquin.urlBackEnd.interno}>
                            <Link className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.produccionPiquin.urlBackEnd.name} Interno</Link>
                        </Link>
                        <Link href={link.produccionPiquin.urlBackEnd.externo}>
                            <Link className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.produccionPiquin.urlBackEnd.name} Externo</Link>
                        </Link>
                        <Link href={link.produccionPiquin.urlBackEnd.alternoExterno}>
                            <Link className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.produccionPiquin.urlBackEnd.name} Alternativo Externo</Link>
                        </Link> */}
                    </div>
    );
};

export default ModoSanLuis;