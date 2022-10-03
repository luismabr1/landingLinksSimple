import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import React from 'react';

const Layout = ({children}) => {
    return (
        <>
<div className='h-fit'>
            <Navbar /> 
                {children} 
            <Footer />  
</div>
        </>
    );
};

export default Layout;