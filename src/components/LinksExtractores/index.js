import React from 'react';
import Link from 'next/link'
import PrivateContent from '../PrivateContent'
import {useLinks} from '../../contexts/LinkContext'

const LinkExtractores = () => {
    const {links, setLink}= useLinks()
    return (
        <>
            <div className="md:grid md:grid-cols grid-cols-1 items-center content-center flex-wrap">
                <PrivateContent>
                        <Link href={links.extractoresXetux.url.externo}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.extractoresXetux.url.name} Externo</span>
                        </Link>
                </PrivateContent>
            </div>
        </>
    );
};

export default LinkExtractores;