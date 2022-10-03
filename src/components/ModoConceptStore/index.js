import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const ModoConceptStore = () => {

    const {link, setLink}= useLinks()

    return (
<div className='flex items-center justify-center h-60'>
<Link href={link.conceptStore.urlBackOffice.interno} passHref>
                            <a className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.conceptStore.urlBackOffice.name} Interno</a>
                        </Link>
                        <Link href={link.conceptStore.urlBackOffice.externo} passHref>
                            <a className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.conceptStore.urlBackOffice.name} Externo</a>
                        </Link>
                        <Link href={link.conceptStore.urlBackEnd.interno}passHref>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.conceptStore.urlBackEnd.name} Interno</a>
                        </Link>
                        <Link href={link.conceptStore.urlBackEnd.externo} passHref>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.conceptStore.urlBackEnd.name} Externo</a>
                        </Link>
                    </div>
    );
};

export default ModoConceptStore;