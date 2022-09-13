import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const ModoConceptStore = () => {

    const {link, setLink}= useLinks()

    return (
<div className='flex items-center justify-center h-60'>
<Link href={link.modo.urlBackOffice.interno}>
                            <button className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">{link.conceptStore.urlBackOffice.name} Interno</button>
                        </Link>
                        <Link href={link.conceptStore.urlBackOffice.externo}>
                            <button className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">{link.conceptStore.urlBackOffice.name} Externo</button>
                        </Link>
                        <Link href={link.conceptStore.urlBackEnd.interno}>
                            <button className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">{link.conceptStore.urlBackEnd.name} Interno</button>
                        </Link>
                        <Link href={link.conceptStore.urlBackEnd.externo}>
                            <button className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">{link.conceptStore.urlBackEnd.name} Externo</button>
                        </Link>
                    </div>
    );
};

export default ModoConceptStore;