import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const Modo = () => {

    const {link, setLink}= useLinks()

    return (

            <div className='flex items-center justify-center h-60'>
                        <Link href={link.modo.urlBackOffice.interno} passHref>
                            <a className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.modo.urlBackOffice.name} Interno</a>
                        </Link>
                        <Link href={link.modo.urlBackOffice.externo} passHref>
                            <a className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.modo.urlBackOffice.name} Externo</a>
                        </Link>
                        <Link href={link.modo.urlBackOffice.alternoExterno} passHref>
                            <a className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.modo.urlBackOffice.name} Alternativo Externo</a>
                        </Link>
                        <Link href={link.modo.urlBackEnd.interno} passHref>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.modo.urlBackEnd.name} Interno</a>
                        </Link>
                        <Link href={link.modo.urlBackEnd.externo} passHref>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.modo.urlBackEnd.name} Externo</a>
                        </Link>
                        <Link href={link.modo.urlBackEnd.alternoExterno} passHref>
                            <a className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.modo.urlBackEnd.name} Alternativo Externo</a>
                        </Link>
</div>

    );
};

export default Modo;