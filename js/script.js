"use strict";
(function($){

	$('#first-tab-ico img.example-image').click(function(){
	    $('#first-tab-ico img.bigPhoto').attr('src', $(this).attr('src'));
      $('#first-tab-ico img.example-image').removeClass('active');
      $(this).addClass('active');
	});

  $('#second-tab-ico img.example-image').click(function(){
      $('#second-tab-ico img.bigPhoto').attr('src', $(this).attr('src'));
      $('#second-tab-ico img.example-image').removeClass('active');
      $(this).addClass('active');
  });

  $('#third-tab-ico img.example-image').click(function(){
      $('#third-tab-ico img.bigPhoto').attr('src', $(this).attr('src'));
      $('#third-tab-ico img.example-image').removeClass('active');
      $(this).addClass('active');
  });

  $('#fourth-tab-ico img.example-image').click(function(){
      $('#fourth-tab-ico img.bigPhoto').attr('src', $(this).attr('src'));
      $('#fourth-tab-ico img.example-image').removeClass('active');
      $(this).addClass('active');
  });

  $('#fifth-tab-ico img.example-image').click(function(){
      $('#fifth-tab-ico img.bigPhoto').attr('src', $(this).attr('src'));
      $('#fifth-tab-ico img.example-image').removeClass('active');
      $(this).addClass('active');
  });

  $('#first1-tab-ico img.example-image').click(function(){
      $('#first1-tab-ico img.bigPhoto').attr('src', $(this).attr('src'));
      $('#first1-tab-ico img.example-image').removeClass('active');
      $(this).addClass('active');
  });

  $('#second1-tab-ico img.example-image').click(function(){
      $('#second1-tab-ico img.bigPhoto').attr('src', $(this).attr('src'));
      $('#second1-tab-ico img.example-image').removeClass('active');
      $(this).addClass('active');
  });

  $('#third1-tab-ico img.example-image').click(function(){
      $('#third1-tab-ico img.bigPhoto').attr('src', $(this).attr('src'));
      $('#third1-tab-ico img.example-image').removeClass('active');
      $(this).addClass('active');
  });

   $('#first2-tab-ico img.example-image').click(function(){
      $('#first2-tab-ico img.bigPhoto').attr('src', $(this).attr('src'));
      $('#first2-tab-ico img.example-image').removeClass('active');
      $(this).addClass('active');
  });

   $('#second2-tab-ico img.example-image').click(function(){
      $('#second2-tab-ico img.bigPhoto').attr('src', $(this).attr('src'));
      $('#second2-tab-ico img.example-image').removeClass('active');
      $(this).addClass('active');
  });

    $('#third2-tab-ico img.example-image').click(function(){
      $('#third2-tab-ico img.bigPhoto').attr('src', $(this).attr('src'));
      $('#third2-tab-ico img.example-image').removeClass('active');
      $(this).addClass('active');
  });
  



new WOW().init();

$(function(){
 

  var two_modal = function(id_modal_1,id_modal_2) { 
  var show_modal_2 = false;
  $('a[href="' + id_modal_2 + '"]').click(function(e) {
    e.preventDefault();
    show_modal_2 = true;
    $(id_modal_1).modal('hide');
  });
  
  $(id_modal_1).on('hidden.bs.modal', function (e) {
    if (show_modal_2) {
      show_modal_2 = false;
      $(id_modal_2).modal('show');
    }
  })
 
}('#myModal','#myModal1');
 
});

$(function(){
  var two_modal = function(id_modal_1,id_modal_2) {
  var show_modal_2 = false;
  $('a[href="' + id_modal_2 + '"]').click(function(e) {
    e.preventDefault();
    show_modal_2 = true;
    $(id_modal_1).modal('hide');
  });
  
  $(id_modal_1).on('hidden.bs.modal', function (e) {
    if (show_modal_2) {
      show_modal_2 = false;
      $(id_modal_2).modal('show');
    }
  })
 
}('#myModalMedium','#myModal1');
 
});


$(function(){
var two_modal = function(id_modal_1,id_modal_2) {
  var show_modal_2 = false;
  $('a[href="' + id_modal_2 + '"]').click(function(e) {
    e.preventDefault();
    show_modal_2 = true;
    $(id_modal_1).modal('hide');
  });
 
  $(id_modal_1).on('hidden.bs.modal', function (e) {
    if (show_modal_2) {
      show_modal_2 = false;
      $(id_modal_2).modal('show');
    }
  })
 
}('#myModalSmall','#myModal1');
 
});


$(function(){
var two_modal = function(id_modal_1,id_modal_2) {
  var show_modal_2 = false;
  $('a[href="' + id_modal_2 + '"]').click(function(e) {
    e.preventDefault();
    show_modal_2 = true;
    $(id_modal_1).modal('hide');
  });
  
  $(id_modal_1).on('hidden.bs.modal', function (e) {
    if (show_modal_2) {
      show_modal_2 = false;
      $(id_modal_2).modal('show');
    }
  })
 
}('#myModalShampur','#myModal1');
 
});



  $("#down").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;    
          $('html,body').animate({ scrollTop: destination }, 1100);
      
      return false; 
  });

  
  $('a[href="#contact-home"]').click(function(event) {
    event.preventDefault()
    var el = $('#contact-home');
    $('body,html').animate({
      scrollTop: $(el).offset().top
    }, 1300);
  });

  $('a[href="#contact-footer"]').click(function(event) {
    event.preventDefault()
    var el = $('#contact-home');
    $('body,html').animate({
      scrollTop: $(el).offset().top
    }, 1100);
  });

  }) (jQuery);