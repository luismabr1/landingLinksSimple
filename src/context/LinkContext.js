import React, { useContext, useState } from 'react'

export const links = {
    modo:{
        id: 1,
        route: 'modo',
        urlBackOffice: {
          name: 'MoDo BackOffice',
          interno: 'http://xetuxpro:9090/posadmin/login.xhtml',
          externo: 'http://modoccs.ddns.net:9091/posadmin/login.xhtml',
        },
        urlBackEnd: {
          name: 'MoDo BackEnd',
          interno: 'http://xetuxpro.modo.local:9090/xc-one-pos/Logout/login/index.xhtml',
          externo: 'http://modoccs.ddns.net:9091/xc-one-pos/Logout/login/index.xhtml',
      },
    },
      conceptStore:{
        id: 2,
        route: 'conceptStore',
        urlBackOffice: {
          name: 'Concept Store BackOffice',
          interno: 'http://xeconcept:9090/posadmin/login.xhtml',
          externo: 'http://modoccs.ddns.net:9093/posadmin/login.xhtml',
        },
        urlBackEnd: {
          name: 'Concept Store BackEnd',
          interno: 'http://xeconcept:9090/xc-one-pos/Logout/login/index.xhtml',
          externo: 'http://modoccs.ddns.net:9093/xc-one-pos/Logout/login/index.xhtml',
      },
      },
      modoExpress:{
        id: 3,
        route: 'modoExpress',
        urlBackOffice: {
          name: 'MoDo Delivery BackOffice',
          interno: 'http://xetuxcds:9090/posadmin/login.xhtml',
          externo: 'http://modoccs.ddns.net:9090/posadmin/login.xhtml',
        },
        urlBackEnd: {
          name: 'MoDo Delivery BackEnd',
          interno: 'http://xetuxcds:9090/xc-one-pos/Logout/login/index.xhtml',
          externo: 'http://modoccs.ddns.net:9090/xc-one-pos/Logout/login/index.xhtml',
      },
      },
      salumeriaC:{
        id: 4,
        route: 'salumeriaChacao',
        urlBackOffice: {
          name: 'Salumeria Chacao BackOffice',
          interno: 'http://xesacentral:9090/posadmin/login.xhtml',
          externo: 'http://modoccs.ddns.net:9094/posadmin/login.xhtml',
        },
        urlBackEnd: {
          name: 'Salumeria Chacao BackEnd',
          interno: 'http://xesacentral:9090/xc-one-pos/Logout/login/index.xhtml',
          externo: 'http://modoccs.ddns.net:9094/xc-one-pos/Logout/login/index.xhtml',
      },
      },
      salumeriaH:{
        id: 4,
        route: 'salumeriaHatillo',
        urlBackOffice: {
          name: 'Salumeria Hatillo BackOffice',
          interno: 'http://xesaha:9090/posadmin/login.xhtml',
          externo: 'http://salumeriahatillo.ddns.net:9090/posadmin/login.xhtml',
        },
        urlBackEnd: {
          name: 'Salumeria Hatillo BackEnd',
          interno: 'http://xesaha:9090/xc-one-pos/Logout/login/index.xhtml',
          externo: 'http://salumeriahatillo.ddns.net:9090/xc-one-pos/Logout/login/index.xhtml',
      },
      },
    calidad:{
      id: 5,
      route: 'calidad',
      urlBackOffice: {
        name: 'Calidad BackOffice',
        interno: 'http://xetuxmodoqa:9090/posadmin/login.xhtml',
        externo: 'http://modoccs.ddns.net:9092/posadmin/login.xhtml',
      },
      urlBackEnd: {
        name: 'Calidad BackEnd',
        interno: 'http://xetuxmodoqa:9090/xc-one-pos/Logout/login/index.xhtml',
        externo: 'http://modoccs.ddns.net:9092/xc-one-pos/Logout/login/index.xhtml',
      },
    },
    modoCandelaria:{
      id: 6,
      route: 'modoCandelaria',
      urlBackOffice: {
        name: 'BackOffice Sambil Candelaria',
        interno: 'http://xetuxbar:9090/posadmin/login.xhtml',
        externo: 'http://modoletonia.ddns.net:9095/posadmin/login.xhtml',
      },
      urlBackEnd: {
        name: 'Calidad BackEnd',
        interno: 'http://xetuxbar:9090/xc-one-pos/Logout/login/index.xhtml',
        externo: 'http://modoletonia.ddns.net:9095/xc-one-pos/Logout/login/index.xhtml',
      },
    }
  }


  

export const LinkContext = React.createContext({
  links: undefined,
  setLinks: async (links) => null
})

export const useLinks = () => useContext(LinkContext)

export const LinkProvider = ({ children }) => {
  const [link, setLink] = useState(links)

  return <LinkContext.Provider value={{ link, setLink }}>{children}</LinkContext.Provider>
}