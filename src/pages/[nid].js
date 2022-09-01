import React from 'react';
import { useState } from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router';
import {useLinks} from '../context/LinkContext'
import SelectCompany from '../components/SelectCompany'
import Modo from '../components/Modo';
import Loading from '../components/Loading';

const company = () => {
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
export default company