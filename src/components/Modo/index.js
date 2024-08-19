import Link from 'next/link'
import {useLinks} from '../../context/LinkContext'

const Modo = () => {

    const {links, setLink}= useLinks()
    
    
      if (!links) {
        return <div>Cargando...</div>;
      }
    return (

            <div className='grid grid-cols-3 gap-4' >
                    <Link className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded" target="_blank" rel="noreferrer" href={links.modo.urlBackOffice.interno} passHref>
                        {links.modo.urlBackOffice.name} Interno
                    </Link>
                     <Link className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded" target="_blank" rel="noreferrer" href={links.modo.urlBackOffice.externo} passHref>
                            <span >{links.modo.urlBackOffice.name} Externo</span>
                        </Link>
                           
                        <Link className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded" target="_blank" rel="noreferrer" href={links.modo.urlBackOffice.alternoExterno} passHref>
                            <span >{links.modo.urlBackOffice.name} Alternativo Externo</span>
                        </Link>
                        <Link className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded" target="_blank" rel="noreferrer" href={links.modo.urlBackEnd.interno} passHref>
                            <span >{links.modo.urlBackEnd.name} Interno</span>
                        </Link>
                        <Link className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded" target="_blank" rel="noreferrer" href={links.modo.urlBackEnd.externo} passHref>
                            <span >{links.modo.urlBackEnd.name} Externo</span>
                        </Link>
                        <Link className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border border-black hover:border-transparent rounded" target="_blank" rel="noreferrer" href={links.modo.urlBackEnd.alternoExterno} passHref>
                            <span >{links.modo.urlBackEnd.name} Alternativo Externo</span>
                        </Link> 
</div>

    );
};

export default Modo;