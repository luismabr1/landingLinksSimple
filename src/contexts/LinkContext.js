'use client'
import React, { useContext, useState, useEffect } from 'react'

const links = {
    modo:{
        id: 1,
        nameLink:'MoDo',
        route: 'modo',
        urlBackOffice: {
          name: 'MoDo BackOffice',
          interno: 'http://xetuxpro:9090/posadmin/login.xhtml',
          externo: 'http://modoccs.ddns.net:9091/posadmin/login.xhtml',
          alternoExterno:'http://modoccs.sytes.net:9091/posadmin/login.xhtml',
        },
        urlBackEnd: {
          name: 'MoDo BackEnd',
          interno: 'http://xetuxpro.modo.local:9090/xc-one-pos/Logout/login/index.xhtml',
          externo: 'http://modoccs.ddns.net:9091/xc-one-pos/Logout/login/index.xhtml',
          alternoExterno:'http://modoccs.sytes.net:9091/xc-one-pos/Logout/login/index.xhtml'
      },
    },
      conceptStore:{
        id: 2,
        route: 'conceptStore',
        urlBackOffice: {
          name: 'Concept Store BackOffice',
          interno: 'http://xeconcept:9090/posadmin/login.xhtml',
          externo: 'http://modoccs.ddns.net:9093/posadmin/login.xhtml',
          alternoExterno:'http://modoccs.sytes.net:9093/posadmin/login.xhtml',
        },
        urlBackEnd: {
          name: 'Concept Store BackEnd',
          interno: 'http://xeconcept:9090/xc-one-pos/Logout/login/index.xhtml',
          externo: 'http://modoccs.ddns.net:9093/xc-one-pos/Logout/login/index.xhtml',
          alternoExterno:'http://modoccs.sytes.net:9093/xc-one-pos/Logout/login/index.xhtml',
          
      },
      },

      salumeriaC:{
        id: 4,
        route: 'salumeriaChacao',
        urlBackOffice: {
          name: 'Salumeria Chacao BackOffice',
          interno: 'http://xesacentral:9090/posadmin/login.xhtml',
          externo: 'http://modoccs.ddns.net:9094/posadmin/login.xhtml',
          alternoExterno:'http://modoccs.sytes.net:9094/posadmin/login.xhtml',
        },
        urlBackEnd: {
          name: 'Salumeria Chacao BackEnd',
          interno: 'http://xesacentral:9090/xc-one-pos/Logout/login/index.xhtml',
          externo: 'http://modoccs.ddns.net:9094/xc-one-pos/Logout/login/index.xhtml',
          alternoExterno:'http://modoccs.sytes.net:9094/xc-one-pos/Logout/login/index.xhtml',
      },
      },
    modoAulaVirtual:{
      id: 5,
      route: 'calidad',
      urlBackOffice: {
        name: 'MoDo Aula Virtual',
        interno: 'http://xetuxmodoqa:9090/posadmin/login.xhtml',
        externo: 'https://modoccs.com/campus/login/index.php',
      }
    },
    modoCandelaria:{
      id: 6,
      route: 'modoCandelaria',
      urlBackOffice: {
        name: 'BackOffice Sambil Candelaria',
        interno: 'http://xetuxbar:9090/posadmin/login.xhtml',
        externo: 'http://xetuxbar.ddns.net:9095/posadmin/login.xhtml',
      },
      urlBackEnd: {
        name: 'Calidad BackEnd',
        interno: 'http://xetuxbar:9090/xc-one-pos/Logout/login/index.xhtml',
        externo: 'http://xetuxbar.ddns.net:9095/xc-one-pos/Logout/login/index.xhtml',
      },
    },
    modoGlpi:{
      id: 6,
      route: 'modoGlpi',
      url: {
        name: 'Glpi',
        interno: 'http://glpi.modo.local/',
        externo: 'http://modoccs.ddns.net:8095/',
      },
  },

    extractoresXetux:{
      id: 7,
      route: 'exetux',
      urlCompras: {
        name: 'Compras EX',
        interno: '/ExCompras',
      },
      urlVentas: {
        name: 'Ventas EX',
        interno: '/ExVentas',
      },
      urlPay: {
        name: 'Pay EX',
        interno: '/ExPay',
      },
      urlComprasCandelaria: {
        name: 'Compras EX Candelaria',
        interno: '/ExComprasCandelaria',
      },
      urlVentasCandelaria: {
        name: 'Ventas EX Candelaria',
        interno: '/ExVentasCandelaria',
      },
      urlPayCandelaria: {
        name: 'Pay EX Candelaria',
        interno: '/ExPayCandelaria',
      },
      urlAudit: {
        name: 'EX Auditoria',
        interno: '/ExAudit',
      },
    },
}
// Crea el contexto
export const LinkContext = React.createContext({
  links: links,
});

// Hook personalizado para usar el contexto
export const useLinks = () => useContext(LinkContext);

// Proveedor del contexto
export const LinkProvider = ({ children }) => {
  const [link, setLink] = useState(links);


  return (
    <LinkContext.Provider value={{ link}}>
      {children}
    </LinkContext.Provider>
  );
};

