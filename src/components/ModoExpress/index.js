import React from 'react';
import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const ModoExpress = () => {

    const {link, setLink}= useLinks()

    return (
<div className='flex items-center justify-center h-60'>
<Link href={link.modo.urlBackOffice.interno}>
                            <button className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">{link.modoExpress.urlBackOffice.name} Interno</button>
                        </Link>
                        <Link href={link.modoExpress.urlBackOffice.externo}>
                            <button className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">{link.modoExpress.urlBackOffice.name} Externo</button>
                        </Link>
                        <Link href={link.modoExpress.urlBackEnd.interno}>
                            <button className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">{link.modoExpress.urlBackEnd.name} Interno</button>
                        </Link>
                        <Link href={link.modoExpress.urlBackEnd.externo}>
                            <button className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9">{link.modoExpress.urlBackEnd.name} Externo</button>
                        </Link>
                    </div>
    );
};

export default ModoExpress;