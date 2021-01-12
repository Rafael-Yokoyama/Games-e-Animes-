
$(document).ready(function () {
    $(".hamburguer").click(function () {
      $(this).toggleClass("hamburguer-active");
      $(".itens-mobile").toggleClass("active");
    });
  })




  
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})