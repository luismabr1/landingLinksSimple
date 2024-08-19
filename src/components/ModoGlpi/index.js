import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const ModoGlpi = () => {
    const {links, setLink}= useLinks()
    return (
        <>
            <div className='grid grid-cols-3 gap-4'>
                        <Link href={links.modoGlpi.url.interno}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.modoGlpi.url.name} Interno</span>
                        </Link>
                        <Link href={links.modoGlpi.url.externo}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.modoGlpi.url.name} Externo</span>
                        </Link>
                    </div>
        </>
    );
};

export default ModoGlpi;