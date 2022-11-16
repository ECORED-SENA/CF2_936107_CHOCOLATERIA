<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Toma de muestra: tamaño, procedimiento, medición
    .bg16
      p(data-aos="fade-down").mb-5.pt-5 Una evaluación de calidad se realiza con aproximadamente 2 kg de cacao seco, #[b.bwn llamada muestra representativa]. Para que esta cantidad represente el lote de cacao, existen #[b.bwn procedimientos internacionales] para su obtención, que se describen a continuación:

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/45.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El tamaño y método de obtención de la muestra es determinante para contar con información confiable y veraz. La metodología está estipulada en el Reglamento para el Proceso de Recepción, Entrega y Evaluación de Calidad del Cacao de 2014, cuya base son los estándares internacionales (Estándares ISO 2292:1973). La incorrecta obtención de esta muestra acarreará errores en la apreciación de la calidad. 
      .row.justify-content-center.align-items-center.my-5           
        .col-lg-10(data-aos="flip-down")
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/41.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4 Normatividad
                    p.mb-0 Para consultar sobre la normatividad vigente en temas de calidad del grano del cacao, puede acceder a las siguientes páginas:
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.iso.org/standard/7116.html" target="_blank")
                      span Enlace web
                      i.fas.fa-link    
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://colombiamide.inm.gov.co/nuevas-normas-o-estandares-disponibles-para-las-cadenas-de-cacao-y-aguacate-hass-aprobados-por-icontec-y-gestionados-por-colombiamide/" target="_blank")
                      span Enlace web
                      i.fas.fa-link                          

      p(data-aos="fade-down").mb-5 En este proceso, se hace necesario conocer cómo y en qué forma se hace la toma de muestras del cacao, con el fin de mantener la calidad del producto, lo que puede revisar en el siguiente contenido:
      .row.justify-content-center.align-items-center      
        .col-lg-10(data-aos="fade-right")
          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg6")
            .row.justify-content-center.align-items-start(titulo="Muestra representativa del lote")
              .col-lg-5.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/47.png', alt='')      
              .col-lg-6.my-3.mb-4.mb-md-0
                p La muestra deberá ser representativa del lote. Este es un conjunto de granos #[b.bwn extraídos al azar,] que será utilizado para obtener información sobre la calidad de un lote, donde el lote es una cantidad de cacao homogéneo: de un mismo ciclo de los mismos cultivadores y procedente de las mismas fincas, en una misma etapa de certificación y que haya sido beneficiado bajo un mismo método. 

                p A manera de ejemplo, si un embarque tiene cacao orgánico y otro cacao convencional, cada uno de ellos es un lote diferente y se deberá realizar una muestra de cada uno de estos lotes.
            .row.justify-content-center.align-items-start(titulo="Toma de muestra primaria")
              .col-lg-5.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/48.png', alt='')      
              .col-lg-6.my-3.mb-4.mb-md-0
                p La obtención de la muestra se realiza extrayendo granos al azar, #[b.bwn con un calador de sacos] que penetre a la mitad de la profundidad del saco. 

                p Cada saco de 60 a 65 kg se muestrea en tres puntos, para obtener 100 gramos en cada punto, lo que equivale a aproximadamente 300 gramos por saco. A este conjunto se le conoce como la #[b.bwn muestra primaria.]
  
            .row.justify-content-center.align-items-start(titulo="Reducción de muestra")
              .col-lg-5.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/49.png', alt='')      
              .col-lg-6.my-3.mb-4.mb-md-0
                p Una vez obtenida la muestra primaria de cada saco, estas muestras se vierten en un recipiente limpio y seco para conformar la #[b.bwn muestra compuesta.] Aquí, es necesario homogeneizar la muestra mezclando los granos durante al menos 3 minutos.

                p Generalmente, es suficiente una muestra de 2.0 kg de granos de cacao para hacer los análisis de calidad. Sin embargo, el tamaño de la muestra puede variar de acuerdo con el cliente y con las pruebas a realizar (pruebas de corte, pruebas organolépticas, de contenido de cadmio y pruebas de análisis químicos para verificar residuos de agroquímicos, etc.).
              .col-md-10
                p Una #[b.bwn parte de esta muestra es para el vendedor, otra para el comprador y otra para un tercero,] como, por ejemplo, el Laboratorio de Calidad de Cacao del Departamento de Postcosecha de la FHIA o algún organismo de certificación acreditado.

                img.img-a.img-t(src='@/assets/curso/temas/51.svg', alt='')      

            .row.justify-content-center.align-items-start(titulo="Empaque, etiquetado y envío")
              .col-lg-5.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/50.png', alt='')      
              .col-lg-6.my-3.mb-4.mb-md-0
                p Las muestras reducidas y la muestra representativa para evaluación en el laboratorio se almacenan en envases o empaques limpios y secos elaborados con material que #[b.bwn no afecte el olor, sabor o composición del grano,] como tejidos tupidos, papel fuerte, cartón, metal, plástico adecuado, vidrio u otro.

                p En el caso de medir el contenido de humedad, este envase o empaque debe estar lleno completamente y herméticamente cerrado, para obtener resultados confiables. 

                p Al recibir la muestra, #[b.bwn el laboratorio debe llenar un registro] con información básica del lugar de procedencia del grano e incluir el número de la muestra recibida, que será usada para identificarla en cada una de las evaluaciones a realizarse. El empaque debe ser identificado con el #[b.bwn número] correspondiente, con #[b.bwn una etiqueta durable y adhesiva].

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10(data-aos="flip-down")
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/52.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4 Toma de muestra del cacao
                    p.mb-0 Para profundizar en el tema, le invitamos a revisar el documento ¨Manual para la evaluación de la calidad del grano del cacao¨, de la Fundación Hondureña de Investigación Agrícola, capítulo cuarto.

                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_para_la_Evaluacion_de_la_Calidad_del_Grano_de_Cacao.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download 

      .row.justify-content-center.align-items-center        
        .col-lg-10
          p(data-aos="fade-down") Aquí es vital aclarar que para las exportaciones se hace un proceso de toma de muestra, que sirve para revisar la calidad del producto seleccionado para exportar, ya que se debe verificar si este cumple con las condiciones de calidad internacionales. 

          p(data-aos="fade-down").mb-5 Por lo anterior, se le invita a revisar el siguiente video:

      .row.justify-content-center.align-items-center       
        .col-lg-10(data-aos="flip-down")
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/52.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4 FEDECACAO 
                    p.mb-0 Proceso de selección y exportación de cacao.

                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ecTDQzFXZEE " target="_blank")
                      span Ver video
                      i.fas.fa-play-circle 

</template>

<script>
export default {
  name: 'Tema4',
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
