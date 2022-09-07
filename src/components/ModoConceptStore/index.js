import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const ModoConceptStore = () => {

    const {link, setLink}= useLinks()

    return (
<div className='flex items-center justify-center h-screen'>
                        <Link prefetch href={link.conceptStore.url.interno}>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-9">{link.conceptStore.name} Interno</button>
                        </Link>
                        <Link prefetch href={link.conceptStore.url.externo}>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-9">{link.conceptStore.name} Externo</button>
                        </Link>
                    </div>
    );
};

export default ModoConceptStore;