import React from 'react';
import {useRouter} from 'next/router';
import SelectCompany from '../components/SelectCompany'
import Loading from '../components/Loading';
import Layout from '@components/Layout';

const Company = () => {
    const router = useRouter()
    const name = router.query.nid 
    return (
        <Layout>
            <div className='min-h-screen, p-16 flex-1 flex flex-col justify-center items-center'>
                            <p className='text-black dark:text-white text-2xl'>
                                    Elija la opcion mas conveniente{' '}
                            </p>

                                    {name ?
                                        <SelectCompany company={name}/>
                                        :
                                        <Loading />
                                    }
            </div>
        </Layout>
                
    )
}
export default Company