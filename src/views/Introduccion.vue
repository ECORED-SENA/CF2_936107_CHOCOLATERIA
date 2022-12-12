<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg1     
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10.pt-5
          .tarjeta.position-relative.bg2_1.p-4.mb-5(data-aos="flip-down")
            .row.justify-content-center.align-items-center
              .col-lg-2.col-5.mb-lg-0.mb-3.d-none.d-lg-block
                .imagen-absolute
                  img(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')
              .col-lg-2.col-5.mb-lg-0.mb-3.d-block.d-lg-none
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')                  
              .col-lg-10
                p(data-aos="fade-down").mb-0.ps-3 Colombia es un país que está ubicado en el centro del continente americano, lo que le permite ser un lugar ideal para la inversión extranjera; es por esa razón que la visión país que se ha venido desarrollando a nivel agroindustrial es el apoyo en la producción del cacao y el aguacate Hass para la exportación, con el fin de aumentar el ingreso de divisas por esos rubros. Los precios de venta han aumentado en las últimas exportaciones de cacao, según Agronet (2022). Por lo anterior, le invitamos a ver el siguiente video introductorio, el cual tiene que ver con la recepción y verificación del cacao y materias primas:  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/DccA-bRsxwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                   
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
