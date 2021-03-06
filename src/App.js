
import './App.css';
import MetaTags from 'react-meta-tags';
import "animate.css/animate.min.css";
import Work from './Components/Work/Work';
import HeaderKale from './Components/HeaderKale/HeaderKale';
import camara from './images/camara2.jpg';
import lagalera from './images/lagalera.jpg';
import renova from './images/renova.jpg';
import libreria from './images/libreria770.jpg'
import polosales from './images/polosales.jpg'
import pedidos from './images/sistemaDePedidos.jpg'
import almacen from './images/almacen.jpg'
import gangadeco from './images/gangaDeco.jpg'
import elfuerte from  './images/elfuerte.jpg'
import quehacemoshoy from './images/quehacemoshoy.jpg'
import Footer from './Components/Footer/Footer';
import Language from './Components/LanguageButton/Language';
import Contact from './Components/Contact/Contact';
 import Title from './Components/Title/Title';
 import yo from './images/yoyo2.png';
import { AppProvider } from './Context/UseAppContext'


function App() {

    
  return (<>
  		<AppProvider>
        <HeaderKale/>
     
        <Work project={portfolio[0]}/>
        <Work project={portfolio[1]}/>
        <Work project={portfolio[2]}/>
        <Work project={portfolio[3]}/>
        <Work project={portfolio[4]}/>
        <Work project={portfolio[5]}/>
        <Work project={portfolio[6]}/>
        <Work project={portfolio[7]}/>
        <Work project={portfolio[8]}/>
        <Work project={portfolio[9]}/>
       
        <Contact/>
        <Footer/>

        </AppProvider>
   

    </>
  );
}

export default App;


const portfolio=[
   {   
      title:
          {
              es:"GangaDeco",
              en:"GangaDeco ",
              pt:"GangaDeco "
          },
      type:{  
              es:"E-commerce", 
              en:"E-commerce",
              pt:"E-commerce"
          },
      desc:{  
              es:"E-commerce armado para tienda de articulos de bazar y decoracion",
              en:"deco e-commerce",
              pt:"E-commerce de produtos de decoracao"
          },
      link:"https://gangadeco.vercel.app",
      img:gangadeco,
      icons:{html:1, css:0, react:1, node:0, bootstrap:0, mysql:0, firebase:1, sass:1, js:0, google:1, next:1, firebase:1 },
      color: "yellow",
      postion:1
  },
  {   
   title:
       {
           es:"Mayorista El Fuerte",
           en:"Mayorista El Fuerte",
           pt:"Mayorista El Fuerte",
       },
   type:{  
           es:"Web design", 
           en:"Web design",
           pt:"Web design"
       },
   desc:{  
           es:"Web para distribuidora mayorista. Se hizo foco en el dise??o de un sistema de lista de precios agiles",
           en:"WEb design for food wholesaler. Focused on builidng a dynamic price list for clients ",
           pt:"Disenho web para atacadista de produtos naturais. Foco em lista de precos"
       },
   link:"https://www.mayoristaelfuerte.com",
   img:elfuerte,
   icons:{html:1, css:1, react:1, node:0, bootstrap:0, mysql:0, firebase:0, sass:0, js:0, google:1, next:0, firebase:0},
   color: "yellow",
   postion:1
},
  
   {   
      title:
          {
              es:"Camara Gastronomica ",
              en:"Gastronomic Chamber ",
              pt:"C??mara Gastronomica "
          },
      type:{  
              es:"web Design", 
              en:"web Design",
              pt:"web Design"
          },
      desc:{  
              es:"Primera etapa de proyecto que agrupa agentes gastronomicos con el fin de compartir informaci??n para mejorar la competitividad del sector",
              en:"First phase of a long term plan which seekes to group gastonomic agents which share information in order to improve competitiveness",
              pt:"Primeira etapa do projeto que re??ne agentes gastron??micos com o objetivo de compartilhar informa????es para melhorar a competitividade do setor"
          },
      link:"https://camaraquilmes.netlify.app",
      img:camara,
      icons:{html:1, css:0, react:1, node:0, bootstrap:0, mysql:0, firebase:1, sass:1, js:0, google:1 },
      color: "yellow",
      postion:1
  },
    {   
        title:
        {
            es:"La Galera Market",
            en:"La Galera Market",
            pt:"La Galera Market"
        },
        type:{  
            es:"E-commerce", 
            en:"E-commerce",
            pt:"E-commerce"
        },
        desc:{  
            es:"Dise??o centrado en el usuario que permite agregar y quitar productos de manera dinamica, y poder visualizar promociones de manera efectiva",
            en:"User-centered desgin which allows to add or elminate products from cart, and clearly visualize specific promotions ",
            pt:"Disenho centrado no usuario que permite adicionar e remover produtos de forma din??mica, e poder visualizar as promo????es de forma eficaz"
        },
        link:"https://lagalera.netlify.app",
        img:lagalera,
        icons:{html:1, css:0, react:1, node:0, bootstrap:0, mysql:0, firebase:0, sass:1, js:0 , google:1, firebase:1},
        color: "blue",
        postion:0
    },
    {   
        title:
        {
            es:"Distribuidora autopartes",
            en:"Car Wholesaler",
            pt:"Distribuidor autope??as"
        },
        type:{es:"web App"},
        desc:{  
            es:"A partir de un sistema de gesti??n en SQL, se hizo una conexi??n via Node.js, generando una vista web para mostrar precios y stock de manera din??mica",
            en:"Web view for ERP software based on SQL. Using Node.js a friendly interface was built for clients to access key information",
            pt:"A partir de um sistema de gest??o em SQL, se fez uma conex??o via Node.js, gerando uma vista web para mostrar pre??os e estoque de forma din??mica"
        },       
        link:"https://listasrenova.netlify.app/views/html/indexofertas.html",
        img:renova,
        icons:{html:1, css:1, react:0, node:1, bootstrap:1, mysql:1, firebase:0, sass:0, js:1 },
        color: "orange",
        postion:1
    },

    {   
        title:
        {
            es:"Librer??a Mayorista",
            en:"Office supplies Wholesaler",
            pt:"Livrer??a de atacado "
        },
        type:{es:"Web Design"},
        desc:{  
            es:"Web comercial para librer??a. Se armaron secciones de ofertas de productos puntuales para diferentes tipos de clientes",
            en:"Commercial web for office supplies company. Specific section were designed for different tpo of clients",
            pt:"Site comercial para livrar??a. Se????es de ofertas de produtos espec??ficos foram disenhadas para diferentes tipos de clientes"
        },
        link:"https://www.libreria770.com",
        img:libreria,
        icons:{html:1, css:1, react:0, node:0, bootstrap:1, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },
    {   
        title:
        {
            es:"Polo Sales",
            en:"Polo Sales",
            pt:"Polo Sales"
        },
 
        type:{es:"Rapid prototyping"},
        desc:{  
            es:"Prototipo funcional de plataforma de remate de caballos. Se busco generar un producto r??pido, para corroborar demanda del mismo e iterar la version",
            en:"Polo horses auctioning rapid prototype. aimed to rapidly generate a version, in order to test demand and iterate it",
            pt:"Prot??tipo funcional de plataforma de leil??o de cavalos. O objetivo era gerar um produto r??pido, para confirmar a demanda e logo iterar a vers??o"
        },
        link:"https://polosales.netlify.app",
        img:polosales,
        icons:{html:1, css:1, react:0, node:0, bootstrap:1, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },
    {   
        title:
        {
            es:"Sistema de Pedidos",
            en:"Micro logisitcs",
            pt:"Sistema de Peididos"
        },
        type:{es:"UX/UI Prototyping"},
        desc:{  
            es:"Prototipo funcional para sistema de pedidos log??sticos de distribuidora mayorista",
            en:"Prototype to manage intern wholesaler logistics ",
            pt:"Prot??tipo funcional para o sistema de pedidos de log??stica de distribuidor de atacado"
        },
        link:"https://www.behance.net/gallery/94688655/_",
        img:pedidos,
        icons:{html:1, css:1, react:0, node:0, bootstrap:0, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },


    {   
        title:
        {
            es:"Almacen de Productores",
            en:"Almacen de Productores",
            pt:"Almacen de Productores"
        },

        type:{es:"Web design"},
        desc:{  
            es:"Showroom virtual de productos regionales. Se hizo foco en la est??tica de la presentaci??n del producto, marca y branding",
            en:"Virtual showroom for dely prodcuts. Aimed to develop unique design & branding",
            pt:"Showroom virtual de produtos regionais. O foco foi feito na est??tica da apresenta????o do produto, marca e branding"
        },
        link:"https://www.behance.net/gallery/94639591/Almacen-de-Productores",
        img:almacen,
        icons:{html:1, css:1, react:0, node:0, bootstrap:0, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },


    {   
        title:
        {
            es:"Que Hacemos Hoy",
            en:"Que Hacemos Hoy",
            pt:"Que Hacemos Hoy"
        },

        type:{es:"UX/UI Prototyping"},
        desc:{  
            es:"Prototipo funcional de apliaci??n de informaci??n de eventos culturales",
            en:"App prototype for cultural events and gatherings",
            pt:"Showroom virtual de produtos regionais. O foco foi feito na est??tica da apresenta????o do produto, marca e branding"
        },
        link:"https://www.behance.net/gallery/96068307/QueHacemosHoy",
        img:quehacemoshoy,
        icons:{html:1, css:1, react:0, node:0, bootstrap:0, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },

]
