<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Cacao y materias primas 
    .bg1
      p(data-aos="fade-down").mb-5.pt-5 El sector del cacao y sus derivados está conformado por dos eslabones:
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10      
          .row.justify-content-start.align-items-center        
            .col-auto
              .list(data-aos="fade-down")
                .list__item
                  .list__item__icon
                    img(src='@/assets/curso/temas/v.svg', alt='')
                .list__txt
                  h3.mb-0.mt-1.bwn #[b.or A.] La producción de cacao en grano: 
            p(data-aos="fade-down").mt-5 Este eslabón es importante porque es determinante en la calidad del producto final, ya que es en este proceso donde se definen algunos elementos importantes, como el sabor, el olor, el aroma y el color, que tanto marcan la diferencia del producto. Por lo anterior, se presenta a continuación un video que sintetiza la información de la transformación del grano:   
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ertzWvG-I2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10      
        .row.justify-content-start.align-items-center        
          .col-auto
            .list(data-aos="fade-down")
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/v.svg', alt='')
              .list__txt
                h3.mb-0.mt-1.bwn #[b.or B.] La fabricación de productos derivados del cacao, como licor de cacao, manteca de cacao, polvo de cacao, chocolates y confites:  

    p(data-aos="fade-down").mb-5 Para la elaboración del chocolate, se necesitan diversos subproductos del cacao, como son: el polvo del cacao, manteca del cacao y azúcar. 

    .row.justify-content-center.align-items-center.mb-5.bg10.p-1          
      .col-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.svg', alt='')
      .col-9.my-3
        p(data-aos="fade-down").mb-0 #[b.bwn Los subproductos se obtienen realizando un proceso de sustracción del grano del cacao], que es sometido a los procesos de #[b.bwn tostado, molienda, alcalinización, mezcla, molino, conchado, temperado, moldeado y envasado]. Cada uno de estos procesos es necesario para convertir la materia prima del cacao en el chocolate apto para consumo. Por lo anterior, se le invita a revisar los siguientes contenidos que le permitirán ampliar los conocimientos:

    .bg11
      .row.justify-content-center.align-items-center.my-5           
        .col-lg-10(data-aos="flip-down")
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/v1.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4 Elaboración del chocolate 1
                    p.mb-0 Tv Agro, Cómo sembrar y convertir cacao en chocolate.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=CscHPgftTaQ" target="_blank")
                      span Ver video
                      i.fas.fa-play-circle    

      .row.justify-content-center.align-items-center.my-5           
        .col-lg-10(data-aos="flip-down")
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/v1.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4 Elaboración del chocolate 2 
                    p.mb-0 Tv Agro, Transformación del cacao en chocolate.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=IEvB2qJ_SYE" target="_blank")
                      span Ver video
                      i.fas.fa-play-circle

      .row.justify-content-center.align-items-center.my-5           
        .col-lg-10(data-aos="flip-down")
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/v2.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4 Manual técnico buenas prácticas 
                    p.mb-0 Manual Técnico de cultivo de cacao, buenas prácticas para América Latina, Manejo de Postcosecha del Cacao. páginas 84 a 99. 
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_tecnico_buenas_practicas.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

      Separador 
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 3.1 Condiciones de recibo   

      p(data-aos="fade-down").mb-5 Las condiciones de recibo del cacao deben ser #[b.bwn muy estrictas] en cuanto a la exposición que este presenta con los #[b.bwn colaboradores de la planta], ya que desde el primer momento de manipulación se deben aplicar todas las #[b.or medidas de asepsia] al tratarse de un alimento en transformación.

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          .row.justify-content-center.align-items-center.bg12.p-3.mb-4         
            .col-auto.up
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.svg', alt='')
            .col.up  
              p(data-aos="fade-down").mb-0 Una de las buenas prácticas en las empresas agroindustriales es cumplir con los sistemas de gestión de calidad en la producción y elaboración de alimentos, por lo que en las empresas cacaoteras deben también cumplir las normas básicas para la seguridad e inocuidad del producto, las cuales se mencionan a continuación:  

    .row.justify-content-center.align-items-center          
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/34.svg', alt='')

          .tarjeta.color-acento-botones.p-3(x="13%" y="33%" numero="+")
            p.mb-0 Prohibido:  comer, beber alcohol o fumar en las instalaciones.   
          .tarjeta.color-acento-botones.p-3(x="21.5%" y="13%" numero="+")
            p.mb-0 Uso de mallas, gorras, o algo que sostenga el cabello.  
          .tarjeta.color-acento-botones.p-3(x="79%" y="16%" numero="+")
            p.mb-0 Uso de tapabocas, máscaras, caretas o gafas.  
          .tarjeta.color-acento-botones.p-3(x="86%" y="32%" numero="+")
            p.mb-0 No permitir el ingreso de mascotas a la sección de producción y elaboración de cacao.    
          .tarjeta.color-acento-botones.p-3(x="92.5%" y="51.5%" numero="+")
            p.mb-0 Uso de ropa adecuada.    
          .tarjeta.color-acento-botones.p-3(x="83.5%" y="82%" numero="+")
            p.mb-0 El lugar debe garantizar un espacio adecuado para el personal.
          .tarjeta.color-acento-botones.p-3(x="50%" y="66%" numero="+")
            p.mb-0 Solo debe entrar el personal autorizado.    
          .tarjeta.color-acento-botones.p-3(x="16.5%" y="83%" numero="+")
            p.mb-0 Lavado de manos antes de iniciar la actividad, con agua y jabón, y uso de guantes si se requiere.  
          .tarjeta.color-acento-botones.p-3(x="7%" y="53%" numero="+")
            p.mb-0 Cumplimiento de estándares internacionales de calidad de exportación para poder ser competitivos a nivel internacional.   

    .row.justify-content-center.align-items-center        
      .col-lg-10(data-aos="flip-down")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Manipulación de alimentos
                  p.mb-0 Para profundizar en el aprendizaje, le invitamos a conocer el contenido del "Manual de capacitación para manipuladores de alimentos" de la OPS.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_capacitacion_manipuladores-alimentos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

        p(data-aos="fade-down").my-5 En el proceso de recepción del cacao, se debe tener en cuenta que el producto llegue debidamente identificado con los siguientes elementos: 

    .bg13
      .row.justify-content-center.align-items-center.mb-0         
        .col-lg-10.d-none.d-lg-block.bgw.p-4.pt-0       
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
            h5 Figura 5. 
            span Identificación del producto.
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='') 
        .col-lg-10.d-block.d-lg-none.bgw.p-4.pt-0    
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
            h5 Figura 5. 
            span Identificación del producto.
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35_1.png', alt='')
      .row.justify-content-center.align-items-stretch.mb-4.mt-0          
        .col-lg-4.bgw
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='')
        .col-lg-6.bgw.p-5.pt-0.mov 
          p(data-aos="fade-down") El área de trabajo siempre debe permanecer en condiciones de limpieza acordes con la actividad (elaboración de alimentos); por tal razón, para la recepción de las materias primas, se debe contar con recipientes adecuados y limpios para evitar contaminar el producto, y, así mismo, los materiales y equipos usados en el proceso de recepción deben estar calibrados y limpiarse diariamente.

          p(data-aos="fade-down").mb-0 En la evaluación inicial del producto, se debe tener dispuestos unos equipos, entre los que se destacan una balanza debidamente calibrada, etiquetas de identificación, una cuchara para las tomas de muestras, una guillotina de corte, recipientes para separación, entre otros.            

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Clasificación y almacenamiento 

    p(data-aos="fade-down").mb-5 El cacao se clasifica en tres grupos genéricos, descritos en el siguiente video: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/EnyKh59GG98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .bg14
      p(data-aos="fade-down").mb-5 Como se puede concluir en el video, los tipos de cacao más producidos en Colombia son: el criollo, el forastero y el trinitario; cada uno de ellos tiene sus propias características en cuanto a color, sabor, textura, aroma, y por ende los subproductos que se logran también varían en calidad, como son: #[b.bwn pasta o licor, manteca, tortas y polvo de cacao]. En adición, los productos finales son principalmente los chocolates y demás artículos elaborados a base de chocolate, tales como: #[b.bwn coberturas, golosinas, barras de chocolate amargo, de leche, blanco, con frutas, nueces, bombones], entre otros. 
      .row.justify-content-center.align-items-center        
        .col-lg-10
          .row.justify-content-center.align-items-center.mb-5.bgw.brad.sha           
            .col-lg-7
              .p-2.ps-4
                h5.bwn Importante…  
                p(data-aos="fade-down").mb-0 Uno de los subproductos más usados en el proceso de transformación industrial de los granos de cacao es la manteca de cacao, por sus características químicas y físicas, que le confieren propiedades funcionales muy solicitadas en la industria alimentaria.      
            .col-lg-5.img-e
              img.img-e(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')
      p(data-aos="fade-down") Estas propiedades son muy convenientes en la manufactura de una gran variedad de productos en la industria <b>chocolatera, cosmética y farmacéutica</b>.

      p(data-aos="fade-down").mb-5 No siendo comparable con el resto de las grasas vegetales comestibles, la principal razón de su uso es su inapreciable <b>característica de fusión</b>; a temperatura normal, por debajo de 26 ºC, es dura y brillante, por lo que se funde rápidamente y por completo a la temperatura corporal. Es amplio el espectro de rangos de fusión que cubre la manteca de cacao; la fusión incipiente está comprendida entre 31,2 - 32,7 ºC, y la completa, entre 32 - 34 ºC.

      .row.justify-content-center.align-items-center    
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/39.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 #[b.bwn El almacenamiento del cacao se debe realizar en un lugar con buenas condiciones de ventilación y que esté libre de humedades,] ya que las condiciones de humedad relativa deben estar en el rango del 5 al 70 %, pues el fruto es susceptible de absorber la humedad del ambiente, provocando daños en su interior. Asimismo, el lugar debe estar libre de olores o combustibles, productos agrícolas u otros que afecten sus propiedades físicas.   
      p(data-aos="fade-down").mb-5 #[b.bwn También es importante que, antes de realizar el almacenamiento de las cargas, pasarlas por un proceso de limpieza, para evacuar los sólidos e impurezas que se producen en el proceso de cosecha y transporte.] 

      .row.justify-content-center.align-items-center          
        .col-lg-10
          .row.justify-content-center.align-items-center.mb-5.bg10.p-1
            .col-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.svg', alt='')
            .col-10.my-3
              p(data-aos="fade-down").mb-0 El saco de cacao tiene alrededor de 60 kg de peso y no se deben almacenar por más de 6 filas, ya que el propio peso puede fracturar los granos, generando nuevamente residuos no aceptables para el proceso de transformación. #[b.bwn Los granos deben estar enteros, libres de insectos, basuras y piedras. Los sacos se estiban o colocan sobre polines de madera para evitar que entren en contacto con el suelo.]

      .row.justify-content-center.align-items-center.mb-3           
        .col-lg-10(data-aos="flip-down")
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/41.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4 Red Cacaotera de Colombia
                    p.mb-0 Para ampliar sus conocimientos sobre el cultivo del cacao en Colombia, le invito a ingresar a las siguientes dos páginas <i>web</i> y navegarlas.

                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.redcacaotera.com.co/" target="_blank")
                      span Enlace <i>web</i>
                      i.fas.fa-link    

      .row.justify-content-center.align-items-center           
        .col-lg-10(data-aos="flip-down")
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/41.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4 Procasur
                    p.mb-0 En adición, es importante conocer el proceso de cosecha y beneficio del cacao, como parte de su clasificación y almacenamiento, por lo que le invitamos a revisar el siguiente video.
                  .col-sm-auto.my-3
                    a.boton.color-acento-botones(href="https://aprocasur.org/" target="_blank")
                      span Enlace <i>web</i>
                      i.fas.fa-link  
                  .col-sm-auto.my-3
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=BOGWZWfrxHw" target="_blank")
                      span ver video
                      i.fas.fa-play-circle                        

      Separador 
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 3.3 Conservación y rotulado 

      p(data-aos="fade-down").mb-5 #[b.bwn El proceso de conservación del chocolate es muy delicado, dado que este producto y sus derivados son muy sensibles a los cambios de temperatura], por lo que, para una correcta conservación y refrigeración industrial del chocolate y para que mantenga todas sus propiedades, el chocolate debe estar, de forma general, en las siguientes condiciones:

      .row.justify-content-center.align-items-center.mb-5.bg15          
        .col-lg-4.my-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.png', alt='')

        .col-lg-7.my-4
          ul.lista-ul(data-aos="fade-down")
            li 
              i.lista-ul__vineta.colorv1
              p.mb-0 Debe permanecer en un sitio fresco y seco.
            li 
              i.lista-ul__vineta.colorv1
              p.mb-0 Debe mantener una temperatura entre 14 y 18 ºC.
            li 
              i.lista-ul__vineta.colorv1
              p.mb-0 Es muy importante que no sufra variaciones bruscas de temperatura.
            li 
              i.lista-ul__vineta.colorv1
              p.mb-0 Debe mantenerse alejado de olores, ya que atrapa rápidamente los que estén en su entorno.
            li 
              i.lista-ul__vineta.colorv1
              p.mb-0 No debe estar en sitios húmedos.

          p(data-aos="fade-down").mb-0 Por lo anterior, esta industria necesita, por tanto, un diseño e instalación de un #[b.bwn sistema frigorífico adecuado], que permita mantener el chocolate en silo o cámara, con #[b.bwn ambiente muy controlado], que permita mantener en perfecto estado el chocolate hasta el momento de su utilización industrial o consumo final.                                                
      
    p(data-aos="fade-down").mb-5 #[b.bwn Debido a esto, al realizar el rotulado de los subproductos a mano], se debe tener en cuenta la temperatura de manipulación y, en especial, el cuidado de las pastas susceptibles de deformación. En el #[b.bwn rotulado mecánico], la calibración de la maquinaria empleada debe revisarse antes del inicio del proceso, para evitar la aparición de no conformidades; es por eso que, en la figura a continuación, podrá analizar un ejemplo de un rótulo de una barra de chocolate con la información nutricional que debe llevar para dar a conocer al usuario final lo que contiene el producto:
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes1(data-aos="fade-left") 
        img.img-flotante1(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='Imagen decorativa')      
    .row.justify-content-center.align-items-center.mb-0         
      .col-lg-10.d-none.d-lg-block.bgw.p-5       
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
          h5 Figura 6. 
          span  Ejemplo información nutricional de una barra de chocolate.
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.png', alt='') 
      .col-lg-10.d-block.d-lg-none.bgw.p-5  
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
          h5 Figura 6. 
          span  Ejemplo información nutricional de una barra de chocolate.
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43_1.png', alt='')  

        
</template>

<script>
export default {
  name: 'Tema3',
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
