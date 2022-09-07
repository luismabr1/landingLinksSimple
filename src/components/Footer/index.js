import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <Link
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className='flex items-center justify-center text-modo-negro dark:text-white'>

                    Powered by{' '}
                    <span className='invert-0 h-8 ml-2 dark:invert'>
                    <Image src="/logomodo.png" alt="Modo Logo" width={94} height={30} />
                    </span>
                </div>
                </Link>
            </footer>   
        </>
    );
};

export default Footer;