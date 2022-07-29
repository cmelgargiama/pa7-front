import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    rol: '1'
  },
  {
    title: 'Gerentes',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    rol: '1'
  },
  {
    title: 'Mesa de Planes',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    options: [{title:'Mesa de Planes'}, {title:'Scoring'}, {title:'Stock Para Ventas'}, {title:'Autorizador Clasificaciones'}, {title:'Stock Contable'}, {title:'Gestion de Señas Anuladas'}, {title:'Haberes Netos'}],
    rol: '1'
  },
  {
    title: 'Mora',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    rol: '1'
  },
  {
    title: 'Personal',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    rol: '1'
  },
  {
    title: 'Emprendedores',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    rol: '1'
  },
  {
    title: 'Configuracion de Datos Generales',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    rol: '1'
  },
  {
    title: 'Contabilidad',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    rol: '1'
  },
  {
    title: 'Reportes',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    rol: '1'
  },
  {
    title: 'Usados',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    rol: '1'
  },
  {
    title: 'Seguros',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    rol: '1'
  },
];