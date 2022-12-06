export default {
  global: {
    componenteFormativo: 'Recepción y verificación del cacao y materias primas',
    descripcionCurso:
      'Los productos finales tienen gran relación con la calidad de las materias primas que ingresan a la planta, ya que el estado de estas define las propiedades organolépticas que los chocolates presentan ante el consumidor. Es por ello que este contenido de formación se adentra en las recomendaciones que se deben tener para garantizar la calidad de los procesos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Órdenes de pedido y entrega ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de formatos ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas de diligenciamiento ',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Carga ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Condiciones y movilización',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cacao y materias primas ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Condiciones de recibo ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Clasificación y almacenamiento',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Conservación y rotulado ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Toma de muestra: tamaño, procedimiento, medición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Registros ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Almacenamiento ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Tipos, logística ',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Producto no conforme ',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Rotulado, tipo y disposición',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Residuos y disposición',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Carga',
      referencia:
        'Centro de Comercio Internacional [CCI]. (2001). <i>Cacao: guía de prácticas comerciales.</i> FAO.',
      tipo: 'Documento',
      link:
        'https://agris.fao.org/agris-search/search.do?recordID=DO2006103846',
    },
    {
      tema: '3. Cacao y materias primas',
      referencia:
        'Tv Agro. (2016). <i>Cómo sembrar y convertir cacao en chocolate</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CscHPgftTaQ',
    },
    {
      tema: '3. Cacao y materias primas',
      referencia:
        'Tv Agro. (2021). <i>Cómo es el proceso de transformación del cacao en chocolate</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IEvB2qJ_SYE',
    },
    {
      tema: '3. Cacao y materias primas',
      referencia:
        'Arvelo, M, González, D, Maroto, S., Delgado, T. y Montoya, P. (2017). <i>Manual Técnico del cultivo del cacao. Buenas prácticas Para América Latina</i>. Instituto Interamericano de Cooperación para la Agricultura.',
      tipo: 'Documento',
      link:
        'https://repositorio.iica.int/bitstream/11324/6181/1/BVE17089191e.pdf',
    },
    {
      tema: '3.1. Condiciones de recibo',
      referencia:
        'Organización Panamericana de la Salud. (s. f.). <i>Manual de capacitación para manipuladores de alimentos.</i> ',
      tipo: 'Documento',
      link:
        'https://www.paho.org/hq/dmdocuments/manual-manipuladores-alimentos-2014.pdf',
    },
    {
      tema: '3.2 Clasificación y almacenamiento ',
      referencia:
        'Tv Agro. (2018). <i>Proceso de cosecha y beneficio del cacao</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BOGWZWfrxHw',
    },
  ],
  glosario: [
    {
      termino: 'Cacao Criollo',
      significado:
        'es el árbol que da el fruto con mejor calidad, pero se caracteriza por ser menos fructífero y representa una pequeña proporción de la elaboración mundial.',
    },
    {
      termino: 'Cacao Forastero',
      significado:
        'el cacao Forastero o Amazonia es la variedad más común. Su sabor es fuerte, amargo, un poco ácido y representa el 70 % del consumo de cacao del mundo.',
    },
    {
      termino: 'Cacao Trinitario',
      significado:
        'es un híbrido obtenido a partir del Criollo y el Forastero. Su producción es claramente superior, en comparación con el criollo, y combinando las características gustativas de ambos.',
    },
    {
      termino: 'Calidad en los alimentos',
      significado:
        'se refiere al conjunto de cualidades que son aceptadas o valoradas por el consumidor (es decir, nosotros mismos). Estas cualidades incluyen tanto las percibidas por los sentidos (sabor, olor, color, textura, forma y apariencia) como también las higiénicas y nutricionales.',
    },
    {
      termino: 'Cascarilla de cacao',
      significado:
        'la cascarilla de cacao rodea al grano de cacao y se obtiene a partir del descascarillado de la semilla. Este material representa aproximadamente el 12 % del peso de la semilla, es seca, crujiente y de color marrón.',
    },
    {
      termino: 'ECA',
      significado: '<i>European Cocoa Association.</i> ',
    },
    {
      termino: 'Empaquetamiento',
      significado:
        'se trata de la acción que lleva a guardar o a recubrir el producto en cuestión, de manera tal que quede preparado para el transporte, la exhibición o el consumo.',
    },
    {
      termino: 'Producto no conforme',
      significado:
        'es todo producto o servicio cuyo resultado no cumple con las disposiciones planificadas o con los requisitos establecidos por las partes.',
    },
    {
      termino: 'Residuos de cacao',
      significado:
        'se conocen como residuos de cacao la cáscara, la placenta y el mucílago, que afectan a los cultivos, pues son una fuente para la dispersión de enfermedades y disminuyen el pH del suelo.',
    },
    {
      termino: 'Xocolatl',
      significado:
        'término como los antiguos indígenas de América del Sur llamaban al chocolate. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, H. (2016). Manual para la Evaluación de la Calidad del Cacao. Fundación Hondureña de Investigación Agrícola.',
      link:
        'http://www.fhia.org.hn/descargas/Proyecto_de_Cacao_SECO/Manual_para_la_Evaluacion_de_la_Calidad_del_Grano_de_Cacao.pdf',
    },
    {
      referencia:
        'Colombiadmin. (2021). Nuevas normas o estándares disponibles para las cadenas de cacao y aguacate Hass, aprobados por ICONTEC y gestionados por ColombiaMide. ColombiaMide.',
      link:
        'https://colombiamide.inm.gov.co/nuevas-normas-o-estandares-disponibles-para-las-cadenas-de-cacao-y-aguacate-hass-aprobados-por-icontec-y-gestionados-por-colombiamide/',
    },
    {
      referencia:
        'Icontec. (2021). Cacao en grano. Especificaciones y requisitos de calidad [NTC 1252:2021].',
      link:
        'https://tienda.icontec.org/gp-cacao-en-grano-especificaciones-y-requisitos-de-calidad-ntc1252-2021.html',
    },
    {
      referencia: 'ISO. (2017). Cocoa beans — Sampling [ISO 2292:1973].',
      link: 'https://www.iso.org/standard/7116.html',
    },
    {
      referencia: 'MinAgricultura. (2021). Cadena de cacao.',
      link:
        'https://sioc.minagricultura.gov.co/Cacao/Documentos/2021-03-31%20Cifras%20Sectoriales.pdf',
    },
    {
      referencia:
        'MinAgricultura. (2022). Así será la selección de las muestras de cacao para participar en el programa Cocoa of Excellence edición 2023 de los International Cocoa Awards. Agronet.',
      link:
        'https://agronet.gov.co/Noticias/Paginas/As%C3%AD-ser%C3%A1-la-selecci%C3%B3n-de-las-muestras-de-cacao-para-participar-en-el-programa-Cocoa-of-Excellence-edici%C3%B3n-2023-de-los-Inter.aspx',
    },
    {
      referencia:
        'Ministerio de Ambiente y Agua [MAAE] y Ministerio de Agricultura y Ganadería [MAG]. (2020). Manual de Procesos de Centro de Acopio de Cacao. PNUD.',
      link:
        'https://www.proamazonia.org/wp-content/uploads/2021/05/Manual_cacao_2021.pdf',
    },
    {
      referencia:
        'Prensa Jurídica. (2021). FINAGRO: “Colombia es Cacao” la plataforma que digitaliza el comercio del cacao en el país.',
      link:
        'https://www.prensajuridica.com/details/item/4172-finagro-%E2%80%9Ccolombia-es-cacao%E2%80%9D-la-plataforma-que-digitaliza-el-comercio-del-cacao-en-el-pa%C3%ADs.html#:~:text=obtener%20el%20valor%E2%80%A6-,FINAGRO%3A%20%E2%80%9CColombia%20es%20Cacao%E2%80%9D%20la%20plataforma%20que%20digitaliza%20el,del%20cacao%20en%20el%20pa%C3%ADs&text=El%20pasado%20mes%20de%20diciembre,productores%20y%20las%20asociaciones%20aliadas',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Karly Julieth Cediel Martínez',
        cargo: 'Experta Temática',
        centro:
          'Regional Norte de Santander - Centro de la Industria, La Empresa y los Servicios',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
