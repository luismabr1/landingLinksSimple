import { useState, useEffect } from "react";
import ModoConceptStore from "../ModoConceptStore";
import ModoGlpi from "../ModoGlpi";
import ModoExpress from "../ModoExpress";
import Salumeria from "../Salumeria";
import ModoCandelaria from "../ModoCandelaria";
import ModoSanLuis from "../ModoSanLuis"; 
import ModoAulaVirtual from "../ModoAulaVirtual";
import Extractores from "../Extractores";
import Modo from "../Modo";
import URLBuilder from "../URLBuilder";

const compras = `http://${process.env.NEXT_PUBLIC_SERVER_URL_MODO}:${process.env.NEXT_PUBLIC_PORT_MODO}/xconnect/api/ExtractionData/PurchaseFull`;
const ventas = `http://${process.env.NEXT_PUBLIC_SERVER_URL_MODO}:${process.env.NEXT_PUBLIC_PORT_MODO}/xconnect/api/ExtractionData/SalesFull`
const pay = `http://${process.env.NEXT_PUBLIC_SERVER_URL_MODO}:${process.env.NEXT_PUBLIC_PORT_MODO}/xconnect/api/ExtractionData/SalesPay`


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
}, {
    id:'5',
    name:'salumeriaHatillo'
}, {
  id:'6',
  name:'modoCandelaria'
},{
  id:'7',
  name:'modoGlpi'
},{
  id:'8',
  name:'modoAulaVirtual'
},{
  id:'9',
  name:'exetux'
},{
  id:'10',
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
      case "modoSanLuis":
        return <ModoSanLuis />;
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
        default:
            return null; 

     } 
  };

  return(
      <main className='min-h-fit pt-10 flex-1 flex flex-col justify-center items-center'>
          <FormRender company={compania} /> 
      </main>
  )

}
  

export default SelectCompany;