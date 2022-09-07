import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const Salumeria = () => {

    const {link, setLink}= useLinks()

    return (
<div className='flex items-center justify-center h-60'>
                        <Link href={link.salumeriaH.url.interno}>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-9">{link.salumeriaH.name} Interno</button>
                        </Link>
                        <Link href={link.salumeriaH.url.externo}>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-9">{link.salumeriaH.name} Externo</button>
                        </Link>
                    </div>
    );
};

export default Salumeria;