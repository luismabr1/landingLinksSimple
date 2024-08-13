import { useState, useEffect } from "react";
/* 
import ModoGlpi from "../ModoGlpi";
import ModoConceptStore from "../ModoConceptStore";
import ModoExpress from "../ModoExpress";
import Salumeria from "../Salumeria";
import ModoCandelaria from "../ModoCandelaria";
import ModoSanLuis from "../ModoSanLuis"; */
import Modo from "../Modo";


const SelectCompany = (props) =>{
  const [compania, setCompania] = useState(props.company)
  console.log('Company click 2', compania)

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
  id:'7',
  name:'modoSanLuis'
}

];
const FormRender = ( {company} ) => {
     switch (company) {
      case "/modo":
        return <Modo />;
/*      case "/salumeriaChacao":
        return <Salumeria />;
         case "/modoExpress":
            return <ModoExpress />;
        case "/conceptStore":
            return <ModoConceptStore />;
        case "/modoCandelaria":
          return <ModoCandelaria />;
        case "/modoGlpi":
          return <ModoGlpi />;
          case "/modoSanLuis":
            return <ModoSanLuis />; */
        default:
            return null; 

     } 
  };

  return(
      <>
    <FormRender company={compania} /> 
      </>
  )

}
  

export default SelectCompany;