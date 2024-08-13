import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const Modo = () => {

    const {link, setLink}= useLinks()

    return (

            <div className='flex items-center justify-center h-60'>
                        <Link href={link.modo.urlBackOffice.interno} passHref>
                            <Link className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.modo.urlBackOffice.name} Interno</Link>
                        </Link>
                        <Link href={link.modo.urlBackOffice.externo} passHref>
                            <Link className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.modo.urlBackOffice.name} Externo</Link>
                        </Link>
                        <Link href={link.modo.urlBackOffice.alternoExterno} passHref>
                            <Link className="bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9" target="_blank" rel="noreferrer">{link.modo.urlBackOffice.name} Alternativo Externo</Link>
                        </Link>
                        <Link href={link.modo.urlBackEnd.interno} passHref>
                            <Link className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.modo.urlBackEnd.name} Interno</Link>
                        </Link>
                        <Link href={link.modo.urlBackEnd.externo} passHref>
                            <Link className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.modo.urlBackEnd.name} Externo</Link>
                        </Link>
                        <Link href={link.modo.urlBackEnd.alternoExterno} passHref>
                            <Link className='bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-5 p-9' target="_blank" rel="noreferrer">{link.modo.urlBackEnd.name} Alternativo Externo</Link>
                        </Link>
</div>

    );
};

export default Modo;