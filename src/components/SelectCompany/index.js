import { useState, useEffect } from "react";
import Modo from "../Modo";
import ModoConceptStore from "../ModoConceptStore";
import ModoExpress from "../ModoExpress";
import Salumeria from "../Salumeria";
import SalumeriaHatillo from "../SalumeriaHatillo";
import Calidad from "../Calidad";

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
}

];
const FormRender = ( {company} ) => {
     switch (company) {
      case "modo":
        return <Modo />;
      case "salumeriaChacao":
        return <Salumeria />;
      case "salumeriaHatillo":
        return <SalumeriaHatillo />;
        case "modoExpress":
            return <ModoExpress />;
        case "conceptStore":
            return <ModoConceptStore />;
        case "calidad":
          return <Calidad />;
        default:
            return null; 

/*       case "modoExpress":
        return <FormUsuarios departamentos={departamentos}
        cargos={cargos}
        equipos={equipos}
        />;
      case "conceptStore":
        return <FormCargos departamentos={departamentos}
        cargos={cargos}
        equipos={equipos} 
        />;
      case "salumeriaHatillo":
        return <FormMarcas />; */

     } 
  };

  return(
      <>
    <FormRender company={compania} /> 
      </>
  )

}
  

export default SelectCompany;