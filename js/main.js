"use strict";


  $(document).ready(function(){
    $(".hamburguer").click(function(){
      $(".nav").toggleClass("show");
    });
    
    $(".day").click(function(){
      $("header").css("background-color", "red");
      $(".amount").css("background-color", "red");
    });
  });
