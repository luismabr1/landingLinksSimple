import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../contexts/LinkContext'

const ModoConceptStore = () => {

    const {links, setLinks}= useLinks()

    return (
<div className="md:grid md:grid-cols grid-cols-4 items-center content-center flex-wrap">
                        <Link href={links.conceptStore.urlBackOffice.interno} passHref>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.conceptStore.urlBackOffice.name} Interno</span>
                        </Link>
                        <Link href={links.conceptStore.urlBackOffice.externo} passHref>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.conceptStore.urlBackOffice.name} Externo</span>
                        </Link>
                        <Link href={links.conceptStore.urlBackOffice.alternoExterno} passHref>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.conceptStore.urlBackOffice.name} Alternativo Externo</span>
                        </Link>
                        <Link href={links.conceptStore.urlBackEnd.interno}passHref>
                            <span className='flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded' target="_blank" rel="noreferrer">{links.conceptStore.urlBackEnd.name} Interno</span>
                        </Link>
                        <Link href={links.conceptStore.urlBackEnd.externo} passHref>
                            <span className='flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded' target="_blank" rel="noreferrer">{links.conceptStore.urlBackEnd.name} Externo</span>
                        </Link>
                        <Link href={links.conceptStore.urlBackEnd.alternoExterno} passHref>
                            <span className='flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded' target="_blank" rel="noreferrer">{links.conceptStore.urlBackEnd.name} Alternativo Externo</span>
                        </Link>
                    </div>
    );
};

export default ModoConceptStore;