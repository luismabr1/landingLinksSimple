import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const ModoGlpi = () => {
    const {link, setLink}= useLinks()
    return (
        <>
            <div className='flex items-center justify-center h-60'>
                        <Link href={link.modoGlpi.url.interno}>
                            <a className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.modoGlpi.url.name} Interno</a>
                        </Link>
                        <Link href={link.modoGlpi.url.externo}>
                            <a className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.modoGlpi.url.name} Externo</a>
                        </Link>
                    </div>
        </>
    );
};

export default ModoGlpi;