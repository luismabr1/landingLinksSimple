'use client'
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import SelectCompany from '../../../components/SelectCompany'
import Loading from '../../../components/Loading';

const Company = () => {
    const router = useRouter()

    const {nid} = useParams()
    console.log('Company click',nid)
    console.log('Path click',nid)
    const {name, setName} = useState(nid)
    const {loading, setLoading} = useState(true)

    useEffect(() => {
        if (!nid) {
            return
        }
        router.push(`/${nid}`)
    }, [nid])

    return (
            <div className='h-fit p-16 flex flex-col flex-auto justify-center items-center'>
                            <p className='text-black dark:text-white text-2xl'>
                                    Elija la opción más conveniente{' '}
                            </p>

                                    {nid ? <SelectCompany company={nid} /> : <Loading />}


            </div>
                
    )
}
export default Company