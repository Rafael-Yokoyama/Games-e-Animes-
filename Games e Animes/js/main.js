$(document).ready(function () {
    $(".hamburguer").click(function () {
      $(this).toggleClass("hamburguer-active");
      $(".itens-mobile").toggleClass("active");
    });
  })