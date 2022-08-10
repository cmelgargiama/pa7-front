import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Operaciones',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    options: 
    [
      {title: 'Altas Pre Solicitudes', rol:'1.2.1'},
      {title: 'Actualizaciones Pre Solicitudes', rol:'1.2.2'},
      {title: 'Actualizacion Operaciones', rol:'1.2.3'},
      {title: 'Alta Cartera', rol:'1.2.4'},
      {title: 'AAPE', rol:'1.2.5'},
      {title: 'Scoring', rol:'1.2.6'},
      {title: 'Conciliacion Tarjetas', rol:'1.2.7'},
      {title: 'Reporte Personalizado', rol:'1.2.8'},
      {title: 'Excel Datos', rol:'1.2.9'},
      {title: 'Buscar Operaciones', rol:'1.2.10'},
      {title: 'Importaciones', rol:'1.2.11'},
      {title: 'Control de solicitudes', rol:'1.2.12'},
      {title: 'Control de Recibos', rol:'1.2.13'},
      {title: 'Control Transferencias', rol:'1.2.14'},
      {title: 'Impresion Recibos', rol:'1.2.15'},
      {title: 'Reclamos', rol:'1.2.16'},
      {title: 'Licitaciones', rol:'1.2.17'},
      {title: 'Rep Micro Emprendedores', rol:'1.2.20'},
      {title: 'Reportes', rol:'1.2.21'},
      {title: 'Agrupamientos', rol:'1.2.22'},
    
    ]
  },
  {
    title: 'Mora',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    options: 
    [
      {title: 'Cuotas Encuadre', rol:'1.4.1'},
      {title: 'Recupero cuotas encuadre', rol:'1.4.2'},
      {title: 'Pagos y recuperos encuadre', rol:'1.4.3'},
      {title: 'Cuadro Performance', rol:'1.4.4'},
      {title: 'Asignacion De Mora', rol:'1.4.5'},
      {title: 'Mora Tecnica', rol:'1.4.6'},
      {title: 'Gestion Mora Temprana', rol:'1.4.7'},
      {title: 'Gestion Mora Especializada', rol:'1.4.8'},
      {title: 'Cola De Llamados Mora Temprana', rol:'1.4.9'},
      {title: 'Cola De Llamados Mora Especializada', rol:'1.4.10'},
      {title: 'Supervisor Mora', rol:'1.4.11'},
      {title: 'Ver Toda La Mora', rol:'1.4.12'},
      
      
    ], 
  },

  {
    title: 'Call Center',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    options: [
      {title: 'Definicion Campana Mails', rol:'1.5.1'},
      {title: 'Definicion Campana SMS', rol:'1.5.2'}, 
      {title: 'Generacion Bases Neotel', rol:'1.5.3'}, 
      {title: 'Envio y Recepcion de Mails', rol:'1.5.4'}, 
      {title: 'Envio y Recepcion de SMS', rol:'1.5.5'}, 
      {title: 'Definicion Fecha Vto Agendado Camapana', rol:'1.5.6'}, 
      {title: 'Administracion Mails Enviados Y Recibidos', rol:'1.5.7'}, 
      {title: 'Administracion SMS Enviados Y Recibidos Encuadre', rol:'1.5.8'}, 
  ],
  },
  {
    title: 'Personal',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    options: [
      {title: 'Legajos', rol:'1.6.1'},
      {title: 'Reportes', rol:'1.6.2'}, 
      {title: 'Importacion Sueldos', rol:'1.6.3'}, 
      {title: 'Generacion TXT Acreditacion Haberes', rol:'1.6.4'}, 
    ]

  },
  {
    title: 'Configuracion de Datos Generales',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    options: 
    [
      {title: 'Vendedores', rol:'1.7.1'},
      {title: 'Supervisores', rol:'1.7.2'},
      {title: 'Sucursales', rol:'1.7.3'},
      {title: 'Cambio Modelo', rol:'1.7.4'},
      {title: 'Cambio De Contraseña Sueldos', rol:'1.7.5'},
      {title: 'Modelos', rol:'1.7.6'},
      {title: 'Lista de Precios', rol:'1.7.7'},
      {title: 'Datos Oficiales', rol:'1.7.8'},
      {title: 'Puntos de Venta', rol:'1.7.9'},
      {title: 'Cambio de Contraseña', rol:'1.7.10'},
      {title: 'Objetivos X Marca', rol:'1.7.11'},
      {title: 'Objetivos Mora', rol:'1.7.12'},
      {title: 'Objetivos X Grupo Mora', rol:'1.7.13'},
      {title: 'Objetivos Altas Bajas Mesa de Planes', rol:'1.7.14'},
      {title: 'Parametros', rol:'1.7.15'},
      {title: 'Usuarios', rol:'1.7.16'},
      {title: 'ABM Intereses', rol:'1.7.17'},
      {title: 'Gerentes', rol:'1.7.18'},
      {title: 'Team Leader', rol:'1.7.19'},
      {title: 'Estructura Comercial', rol:'1.7.20'},
      {title: 'Entrega Asegurada', rol:'1.7.21'},
    
    ]
  },
  {
    title: 'Contabilidad',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    options: 
    [
      {title: 'Tesoreria', rol:'1.8.1'},
      {title: 'Ventas', rol:'1.8.2'},
      {title: 'Bancos', rol:'1.8.3'},
      {title: 'Contabilidad General', rol:'1.8.4'},
      {title: 'Compras', rol:'1.8.5'},
      {title: 'Centro de Costos', rol:'1.8.6'},
      {title: 'Proveedores', rol:'1.8.7'},
      {title: 'Presupuestos', rol:'1.8.8'},
      {title: 'Patentamientos Plan de Ahorro', rol:'1.8.9'},
    ]
  },
  {
    title: 'Reportes',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    options: 
    [
      {title: 'Ejecuta InterEmpresa', rol:'1.10.0'},
      {title: 'Administracion de Planes', rol:'1.10.1'},
      {title: 'Ventas', rol:'1.10.2'},
      {title: 'Mora', rol:'1.10.3'},
      {title: 'Facturacion', rol:'1.10.4'},
      {title: 'Call Center', rol:'1.10.5'},
      {title: 'Mesa de Planes', rol:'1.10.6'},
      {title: 'Scoring', rol:'1.10.7'},
      {title: 'Micro Emprendedores', rol:'1.10.8'},
    ]
  },
  {
    title: 'Emprendedores',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    options: 
    [
      {title: 'Circulares', rol:'1.13.1'},
    ]
  },
  {
    title: 'Usados',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    options: 
    [
      {title: 'Cotizaciones', rol:'1.15.1'},
      {title: 'Recepcion de Unidades Plan de Ahorro', rol:'1.15.2'},
      {title: 'Recepcion de Unidades Convencional', rol:'1.15.3'},
      {title: 'Stock', rol:'1.15.4'},
      {title: 'Egreso de Unidades', rol:'1.15.5'},
      {title: 'Envio de Mails', rol:'1.15.6'},
      {title: 'Cotizacion Gerencia', rol:'1.15.7'},
      {title: 'Listado De Ventas', rol:'1.15.8'},
      {title: 'Listado de Ventas Interempresa', rol:'1.15.9'},
      {title: 'Ventas Interempresa', rol:'1.15.10'},
      {title: 'Usados Interempresa', rol:'1.15.11'},
      {title: 'Cargar PVS', rol:'1.15.12'},
      {title: 'Modificar Tasa Por Tenencia', rol:'1.15.13'},
      {title: 'Imagenes', rol:'1.15.14'},
      {title: 'Vendedores ABM', rol:'1.15.15'},
      {title: 'Capital Vehiculos Usados', rol:'1.15.16'},
      {title: 'Control Precio Toma', rol:'1.15.17'},
      {title: 'Analisis Ingreso-Egreso', rol:'1.15.18'},
    ]
  },
  {
    title: 'Seguros',
    path: '/gerentes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    options: 
    [
      {title: 'Alta', rol:'1.18.0'},
      {title: 'Modificar', rol:'1.18.1'},
      {title: 'Asignar Oficial', rol:'1.18.2'},
      {title: 'Excel', rol:'1.18.3'},
    ]
  },
];