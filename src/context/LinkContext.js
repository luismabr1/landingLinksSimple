import React, { useContext, useState } from 'react'

export const links = {
    modo:{
        id: 1,
        name: 'MoDo',
        route: 'modo',
        url: {
          interno: 'http://xetuxpro:9090/posadmin/login.xhtml',
          externo: 'http://modoccs.ddns.net:9091/posadmin/login.xhtml',
        }
      },
      conceptStore:{
        id: 2,
        name: 'Concept Store',
        route: 'conceptStore',
        url: {
          interno: 'http://xeconcept:9090/posadmin/login.xhtml',
          externo: 'http://modoccs.ddns.net:9093/posadmin/login.xhtml',
        }
      },
      modoExpress:{
        id: 3,
        name: 'MoDo Express',
        route: 'modoExpress',
        url: {
          interno: 'http://xetuxcds:9090/posadmin/login.xhtml',
          externo: 'http://comercializadoracds.ddns.net:9090/posadmin/login.xhtml'
        }
      },
      salumeriaC:{
        id: 4,
        name: 'Salumeria Chacao',
        route: 'salumeriaChacao',
        url: {
          interno: 'http://xesacentral:9090/posadmin/login.xhtml',
          externo: 'http://modoccs.ddns.net:9094/posadmin/login.xhtml',
        }
      },
      salumeriaH:{
        id: 4,
        name: 'Salumeria Hatillo',
        route: 'salumeriaHatillo',
        url: {
          interno: 'http://xesacentral:9090/posadmin/login.xhtml',
          externo: 'http://modoccs.ddns.net:9094/posadmin/login.xhtml',
        }
      },
}

  

export const LinkContext = React.createContext({
  links: undefined,
  setLinks: async (links) => null,
})

export const useLinks = () => useContext(LinkContext)

export const LinkProvider = ({ children }) => {
  const [link, setLink] = useState(links)

  return <LinkContext.Provider value={{ link, setLink }}>{children}</LinkContext.Provider>
}