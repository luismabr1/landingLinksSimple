import { useState, useEffect } from "react";
import ModoConceptStore from "../ModoConceptStore";
import ModoGlpi from "../ModoGlpi";
import ModoExpress from "../ModoExpress";
import Salumeria from "../Salumeria";
import ModoCandelaria from "../ModoCandelaria";
import ModoAulaVirtual from "../ModoAulaVirtual";
import Extractores from "../Extractores";
import Modo from "../Modo";
import URLBuilder from "../URLBuilder";

const compras = `${process.env.NEXT_PUBLIC_SERVER_URL_MODO}:${process.env.NEXT_PUBLIC_PORT_MODO}/xconnect/api/ExtractionData/PurchaseFull`;
const ventas = `${process.env.NEXT_PUBLIC_SERVER_URL_MODO}:${process.env.NEXT_PUBLIC_PORT_MODO}/xconnect/api/ExtractionData/SalesFull`
const pay = `${process.env.NEXT_PUBLIC_SERVER_URL_MODO}:${process.env.NEXT_PUBLIC_PORT_MODO}/xconnect/api/ExtractionData/SalesPay`
const comprasCandelaria = `${process.env.NEXT_PUBLIC_SERVER_URL_CANDELARIA}:${process.env.NEXT_PUBLIC_PORT_CANDELARIA}/xconnect/api/ExtractionData/PurchaseFull`;
const ventasCandelaria = `${process.env.NEXT_PUBLIC_SERVER_URL_CANDELARIA}:${process.env.NEXT_PUBLIC_PORT_CANDELARIA}/xconnect/api/ExtractionData/SalesFull`
const payCandelaria = `${process.env.NEXT_PUBLIC_SERVER_URL_CANDELARIA}:${process.env.NEXT_PUBLIC_PORT_CANDELARIA}/xconnect/api/ExtractionData/SalesPay`


const SelectCompany = (props) =>{
  const [compania, setCompania] = useState(props.company)

  const Forms = [{
    id: '1',
    name: 'modo'
}, {
   id: '2',
   name: 'salumeriaChacao'
}, {
    id:'3',
    name:'modoExpress'
}, {
    id:'4',
    name:'conceptStore'
},{
  id:'5',
  name:'modoCandelaria'
},{
  id:'6',
  name:'modoGlpi'
},{
  id:'7',
  name:'modoAulaVirtual'
},{
  id:'8',
  name:'exetux'
},{
  id:'9',
  name:'urlbuilder'
}

];
const FormRender = ( {company} ) => {
     switch (company) {
      case "modo":
        return <Modo />;
      case "conceptStore":
        return <ModoConceptStore />;
      case "salumeriaChacao":
        return <Salumeria />;
      case "modoExpress":
        return <ModoExpress />;
      case "modoCandelaria":
        return <ModoCandelaria />;
      case "modoGlpi":
        return <ModoGlpi />;
      case "modoAulaVirtual":
        return <ModoAulaVirtual />;
      case "Extractores":
        return <Extractores />;
      case "ExCompras":
        return <URLBuilder baseUrl={compras} title='Excompras' />;
      case "ExVentas":
        return <URLBuilder baseUrl={ventas} title='ExVentas'/>;
      case "ExPay":
        return <URLBuilder baseUrl={pay} title='ExPay'/>;
        case "ExComprasCandelaria":
          return <URLBuilder baseUrl={comprasCandelaria} title='Excompras Candelaria' />;
        case "ExVentasCandelaria":
          return <URLBuilder baseUrl={ventasCandelaria} title='ExVentas Candelaria'/>;
        case "ExPayCandelaria":
          return <URLBuilder baseUrl={payCandelaria} title='ExPay Candelaria'/>;
        default:
            return null; 

     } 
  }

  return(
    <>
        <main className='min-h-fit pt-10 flex-1 flex flex-col justify-center items-center text-white bg-red dark:bg-red'>
          <FormRender company={compania} /> 
        </main>
    </>

  )

}
  

export default SelectCompany;