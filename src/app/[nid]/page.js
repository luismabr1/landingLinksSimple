'use client'
import React, {useEffect} from 'react';
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import SelectCompany from '../../components/SelectCompany'
import Loading from '../../components/Loading';

const Company = () => {
    const router = useRouter()

    const {nid} = useParams() 

    useEffect(() => {
        if (!nid) {
            return
        }
        router.push(`/${nid}`)
    }, [nid])

    return (
            <div className='pb-2 pt-10 h-fit p-20 justify-center items-center'>
                            <p className='pb-2 pt-2 text-black dark:text-white text-2xl'>
                                    Elija la opción más conveniente{' '}
                            </p>

                                    {nid ? <SelectCompany company={nid} /> : <Loading />}


            </div>
                
    )
}
export default Company 


