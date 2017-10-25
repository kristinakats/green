$(document).ready(function(){
  $('.img-slide').bxSlider({
  	controls:false
  });

  $('.text').bxSlider({
     adaptiveHeight: true,
     // mode: 'fade',
     speed: 200,
     pager:false,
     controls: true,
   });
});
