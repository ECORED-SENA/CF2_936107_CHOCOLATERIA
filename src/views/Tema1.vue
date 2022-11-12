<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Órdenes de pedido y entrega 
      
    .bg2   
      p(data-aos="fade-down").pt-5 El éxito de una empresa dedicada a la transformación del cacao en los subproductos es contar con proveedores que suministren el grano del cacao en óptimas condiciones. Por esta razón, se debe realizar una verificación en campo a los posibles productores, para realizar un análisis previo de la calidad de producto que suministran.        

      .row.justify-content-center.align-items-center        
        .col-lg-10
          .row.justify-content-center.align-items-center.mb-5.bgw.brad.sha           
            .col-lg-7
              .p-2.ps-4
                h5.bwn Importante…  
                p(data-aos="fade-down").mb-0 Teniendo en cuenta lo anterior, se debe establecer la capacidad de compra y de venta de la empresa; de esta manera, se cuantifican las necesidades de materia prima y los posibles productores que tengan la capacidad de suministro en los tiempos necesarios y en la calidad requerida.         
            .col-lg-5.img-e
              img.img-e(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')  

      p(data-aos="fade-down") Cualquier empresa del siglo XXI que busque la implementación de la transformación e innovación digital debe implementar sistemas informáticos o softwares que proporcionen un apoyo digital en la creación de las órdenes de compra y de entrega de los productos, los cuales permiten el registro, control de las cantidades, descripción de productos, costos de compra y venta, etc.

      p(data-aos="fade-down").mb-5 Por lo anterior, las organizaciones pueden usar algunos formatos que se encuentran gratis en la web o, si lo prefieren, realizar la compra de todo el sistema digital a un proveedor, quien realizará una capacitación en el manejo y registro de cada formato. A continuación, podrá ver un ejemplo de un formato de control de inventarios:

      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
        h5 Figura 1. 
        span Ejemplo formato de control de inventarios
      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.svg', alt='') 

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10(data-aos="flip-down")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Para ampliar la información sobre los requisitos de composición que debe tener cada tipo de chocolate descargar el documento: 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anex1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes1(data-aos="fade-left") 
        img.img-flotante1(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='Imagen decorativa') 
    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1  Tipos de formatos

    p(data-aos="fade-down") El establecimiento de un sistema de calidad en la empresa proporcionará los mecanismos para la ejecución de las diferentes actividades de los procesos de producción, así como los formatos necesarios y su guía de elaboración, los cuales deben ser socializados con todos los colaboradores y designar las responsabilidades de los encargados de su diligenciamiento. 

    p(data-aos="fade-down").mb-5 Entre los formatos que se destacan en el proceso del cacao, se encuentran los siguientes: 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10    
        ImagenInfograficaB.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/7.svg', alt='')

          div(x="10%" y="21.5%" tooltip="Ver más" numero="+")
            .row    
              .col-auto            
                .titulo-sexto.color-primario.bg3
                  h5.mb-0.pe-3 Ingreso de materias primas 
            p El formato debe consignar la información básica del producto, #[b.bwn desde el proveedor, la cantidad, peso, valor de la carga, información del transportador, hora y fecha de entrega], entre otros puntos que #[b.bwn describen la calidad] del producto recibido.

          div(x="90%" y="21.5%" tooltip="Ver más" numero="+")
            .row    
              .col-auto            
                .titulo-sexto.color-primario.bg3
                  h5.mb-0.pe-3 Formatos de almacenamiento 
            p Si bien es preciso mencionar que los almacenamientos de los productos del cacao deben estar #[b.bwn acordes con su especie], estos deben estar registrados en formatos que fortalezcan la base de datos y que, a su vez, #[b.bwn faciliten el manejo y cantidades reales], sin que se presenten posibles alteraciones de los valores originales.            

          div(x="14%" y="56%" tooltip="Ver más" numero="+")
            .row    
              .col-auto            
                .titulo-sexto.color-primario.bg3
                  h5.mb-0.pe-3 Formatos de calidad 
            p Para este aparte, se pueden establecer varios formatos dependiendo del proceso de calidad ejecutado, ya sea por #[b.bwn clasificación, corte, limpieza, color, propiedades organolépticas], entre otros. 

            p La #[b.bwn descripción de la actividad] debe estar relacionada con los datos generales del lote (carga) y #[b.bwn la proporción de las muestras debe ser acorde con la cantidad o volumen total.]  Es importante que los formatos sean diligenciados con la totalidad de la información, para #[b.bwn garantizar la eficiencia de los datos registrados.] 

          div(x="86.5%" y="56%" tooltip="Ver más" numero="+")
            .row    
              .col-auto            
                .titulo-sexto.color-primario.bg3
                  h5.mb-0.pe-3 Formatos de recibo y entrega 
            p Estos formatos deben contener la información tanto de los #[b.bwn proveedores como de los compradores] de los productos finales, con el fin de llevar un control de las acciones realizadas.  

          div(x="49%" y="83.5%" tooltip="Ver más" numero="+")
            .row    
              .col-auto            
                .titulo-sexto.color-primario.bg3
                  h5.mb-0.pe-3 Formatos adicionales 
            p Como en toda empresa, deberán tener relación de #[b.bwn otros ítems] que, si bien están relacionados con las actividades de la empresa, #[b.bwn no contienen información de los procesos de transformación del cacao.] 

            p Ejemplo de estos casos son: #[b.bwn producción de residuos sólidos comunes, residuos peligrosos, consumos de aguas, consumos de energías, listados de asistencia, listados de capacitación,] etc.
            
    p(data-aos="fade-down").mb-5 Uno de los formatos más usados en las empresas de producción de cacao es el #[b.bwn Libro de diario], ya que en él se deben hacer registros permanentes de los procesos internos y de las actividades realizadas para la ejecución del producto final. A continuación, se presenta un modelo de este tipo de formato:

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
      h5 Figura 2. 
      span Ejemplo formato de libro diario.
    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='')

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10(data-aos="flip-down")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/9.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 ¨La Cosecha¨ Productores de Cacao
                  p.mb-0 Figura 2, ejemplo formato de libro diario.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anex2.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes2(data-aos="fade-left") 
        img.img-flotante2(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='Imagen decorativa') 

    .bg4
      Separador 
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.2 Técnicas de diligenciamiento
      p(data-aos="fade-down").mb-5 Una vez establecidos los formatos finales por parte de la gestión de calidad de la empresa, o en su defecto desde la dirección, estos deberán ser socializados con el personal mediante capacitaciones que faciliten el aprendizaje de los mismos.
      .row.justify-content-center.align-items-center        
        .col-lg-10
          .row.justify-content-center.align-items-center.mb-5.bgw.brad.sha           
            .col-lg-7
              .p-2.ps-4
                h5.bwn Importante…  
                p(data-aos="fade-down").mb-0 En estos procesos, es importante contar con los puntos de vista de los colaboradores, ya que fortalecen el contenido de los formatos, mejorando su efectividad y uso.      
            .col-lg-5.img-e
              img.img-e(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')  

      .row.justify-content-center.align-items-center.mb-4        
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')  

        .col-lg-6.my-3
          p(data-aos="fade-down") El correcto diligenciamiento de estos formatos permite tener registro de cada una de las acciones realizadas, ya sea físico o digital. En ocasiones, es recomendable realizar un registro físico y uno digital por cuestiones de seguridad en el almacenamiento de la información, ya que así no se corre el riesgo de perder los datos por posibles contratiempos que se puedan presentar. 

          p(data-aos="fade-down") Como se mencionó anteriormente, el sistema de calidad es una herramienta necesaria y eficaz para el manejo de la información registrada, debido a que permite conocer los mecanismos de diligenciamiento de los formatos a través de guías para los mismos, así como la metodología para el manejo de la información.

          p(data-aos="fade-down") Partiendo de lo anterior, se presenta a continuación una serie de recomendaciones que se deben tener en cuenta para su diligenciamiento: 

    ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/curso/temas/13.svg', alt='')

      .tarjeta.color-acento-botones.p-3(x="8%" y="25%" numero="+")
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/14.svg', alt='')      
        h5.mb-2 Tiempo 
        p.mb-0 Registrará siempre la fecha y hora del registro.  
      .tarjeta.color-acento-botones.p-3(x="18.5%" y="25%" numero="+")
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/15.svg', alt='')      
        h5.mb-2 Datos
        p.mb-0 Registrar en los formatos de gastos + para ingresos y - para gastos 
      .tarjeta.color-acento-botones.p-3(x="31%" y="25%" numero="+")
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/16.svg', alt='')      
        h5.mb-2 Responsable
        p.mb-0 Los encargados de los registros deberán tener mucho cuidado en las cantidades diligenciadas.  
      .tarjeta.color-acento-botones.p-3(x="44.5%" y="25%" numero="+")
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/17.svg', alt='')      
        h5.mb-2 Correcciones
        p.mb-0 Cualquier error que se detecte se debe corregir en el menor tiempo posible.      
      .tarjeta.color-acento-botones.p-3(x="56.5%" y="25%" numero="+")
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/18.svg', alt='')      
        h5.mb-2 Revisiones
        p.mb-0 Realizar una revisión del registro periódicamente (auditoría interna).   
      .tarjeta.color-acento-botones.p-3(x="68%" y="25%" numero="+")
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/19.svg', alt='')      
        h5.mb-2 Errores
        p.mb-0 Cualquier dato que no esté registrado deberá responder el encargado del diligenciamiento.    
      .tarjeta.color-acento-botones.p-3(x="80%" y="25%" numero="+")
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/20.svg', alt='')      
        h5.mb-2 Recolección de información
        p.mb-0 Para la recolección de datos es recomendable realizarlo usando métodos electrónicos y tecnología disponible.    
      .tarjeta.color-acento-botones.p-3(x="92%" y="25%" numero="+")
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/21.svg', alt='')      
        h5.mb-2 Seguridad de la información
        p.mb-0 Realizar copias de seguridad de la información registrada.

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10(data-aos="flip-down")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/9.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Red cacaotera del Nariño
                  p.mb-0 Diligenciamiento de los formatos.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anex3.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download         
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
