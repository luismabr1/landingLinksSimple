import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import SelectCompany from '../components/SelectCompany'
import Loading from '../components/Loading';

const Company = () => {
    const router = useRouter()
    const company = router.query.nid
    const {name, setName} = useState(company)
    const {loading, setLoading} = useState(true)

    useEffect(() => {
        if (company) {
            router.push(`/${company}`)
        }
    }, [company])

    return (
            <div className='h-fit p-16 flex flex-col flex-auto justify-center items-center'>
                            <p className='text-black dark:text-white text-2xl'>
                                    Elija la opcion mas conveniente{' '}
                            </p>

                                    {company ? <SelectCompany company={company} /> : <Loading />}


            </div>
                
    )
}
export default Company