import Link from 'next/link'
import Image from 'next/image'
import '@/app/Home.css'
import LogoModo from '../LogoModo'


const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <Link
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className='pt-10 flex items-center justify-center text-modo-negro dark:text-white'>

                    Powered by{' '}
                    <span className='invert-0 h-8 ml-2 dark:invert'>
                    <LogoModo />
                    </span>
                </div>
                </Link>
            </footer>   
        </>
    );
};

export default Footer;