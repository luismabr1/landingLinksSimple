import React from 'react';
import Link from 'next/link'
import PrivateContent from '../PrivateContent'
import AuthStatus from '../AuthStatus'
import {useLinks} from '../../contexts/LinkContext'
import { useAuth } from '../../contexts/AuthContext'
import LoginHistory from '../LoginHistory'

const Extractores = () => {
    const {links, setLink}= useLinks()
      const { isAuthenticated } = useAuth()
    return (
        <>
            <AuthStatus />
            <LoginHistory />
            <div className={`md:grid ${isAuthenticated ? 'md:grid-cols-3' : 'md:grid-cols-1'} items-center content-center flex-wrap`}>
                <PrivateContent>
                        <Link  href={links.extractoresXetux.urlCompras.interno}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.extractoresXetux.urlCompras.name} MoDO</span>
                        </Link>
                        <Link href={links.extractoresXetux.urlVentas.interno}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.extractoresXetux.urlVentas.name} MoDO</span>
                        </Link>
                        <Link href={links.extractoresXetux.urlPay.interno}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.extractoresXetux.urlPay.name} MoDO</span>
                        </Link>
                        <Link href={links.extractoresXetux.urlComprasCandelaria.interno}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.extractoresXetux.urlCompras.name} Candelaria</span>
                        </Link>
                        <Link href={links.extractoresXetux.urlVentasCandelaria.interno}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.extractoresXetux.urlVentas.name} Candelaria</span>
                        </Link>
                        <Link href={links.extractoresXetux.urlPayCandelaria.interno}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.extractoresXetux.urlPay.name} Candelaria</span>
                        </Link>
                        <Link href={links.extractoresXetux.urlAudit.interno}>
                            <span className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded" target="_blank" rel="noreferrer">{links.extractoresXetux.urlAudit.name}</span>
                        </Link>
                </PrivateContent>
            </div>
        </>
    );
};

export default Extractores;