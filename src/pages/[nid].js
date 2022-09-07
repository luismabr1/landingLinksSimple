import React from 'react';
import {useRouter} from 'next/router';
import SelectCompany from '../components/SelectCompany'
import Loading from '../components/Loading';

const Company = () => {
    const router = useRouter()
    const name = router.query.nid 
    console.log(`El name de la compañia es ${name}`)
    return (
            <div>
                <div className='grid items-center justify-center h-screen'>
                    <h1>ELIJA EL LINK DE SU UTILIDAD</h1>
                        {name ?
                            <SelectCompany company={name}/>
                            :
                            <Loading />
                        }
                </div>
            </div>           
    )
}
export default Company