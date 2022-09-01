import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const Salumeria = () => {

    const {link, setLink}= useLinks()

    return (
<div className='flex items-center justify-center h-screen'>
                        <Link href={link.salumeriaC.url.interno}>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-9">{link.salumeriaC.name} Interno</button>
                        </Link>
                        <Link href={link.salumeriaC.url.externo}>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-9">{link.salumeriaC.name} Externo</button>
                        </Link>
                    </div>
    );
};

export default Salumeria;