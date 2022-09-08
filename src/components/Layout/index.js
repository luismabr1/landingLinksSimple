import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import React from 'react';

const Layout = ({children}) => {
    return (
        <>
<div className='w-full'>
            <Navbar /> 
          
                {children} 
            <Footer />  

</div>
        </>
    );
};

export default Layout;