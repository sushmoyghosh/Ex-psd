jQuery(document).ready(function($) {

  // sticky header
  $(window).scroll(function(){
    var scrolling= $(this).scrollTop();
  
    if(scrolling > 200 ){
        $('.navbar').addClass('bbg');
    }
    else {
        $('.navbar').removeClass('bbg')
    }
  });
  
  
  // banner
  $('.banner_part').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  
    prevArrow: '<span class="left_arrow"><i class="fa fa-chevron-left"></i></span>',
      nextArrow: '<span class="right_arrow"><i class="fa fa-chevron-right"></i></span>',
    
  });
  // banner
  
  
      // counterup
      $('.counter').counterUp({
          delay: 10,
          time: 1000
      });
      // counterup
      // slick slider
      
    //   blog_slider
    $('.couurrse').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      centerMode:true,
      centerPadding:false,
      prevArrow: '<span class="prev_arrow"><i class="fa fa-chevron-left"></i></span>',
      nextArrow: '<span class="next_arrow"><i class="fa fa-chevron-right"></i></span>',
    });
      // slick slider
  
  
   // faq1
   $('.faq_1_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    
  
    prevArrow: '<span class="lefttt_arrow"><i class="fa fa-chevron-left"></i></span>',
      nextArrow: '<span class="righttt_arrow"><i class="fa fa-chevron-right"></i></span>',
  });
  // faq
   // about
   $('.about_part').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:800,
    autoplaySpeed: 1000,
    arrows:false,
    dots:true,
     
  
    
  });
  //about
  
  
  
  
      // logo
      $('.tttttttccc').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 500,
          arrows:false,
          centerMode:true,
          centerPadding:false,
          
        });
      // logo
      // logo
      $('.last_d').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 1500,
          arrows:false,
          
          
        });
      // logo
      // client_item
      $('.clieennt_slk').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          centerMode:true,
          centerPadding:false,
          prevArrow: '<span class="prev_arrow"><i class="fa fa-angle-double-left"></i></span>',
          nextArrow: '<span class="next_arrow"><i class="fa fa-angle-double-right"></i></span>',
        });
      // client_item
  
  
      
  
  
  //   wow js 
  new WOW().init();
  //   wow js 
  
  });
  
   const questions = document.querySelectorAll(".question");
  
   questions.forEach(question => {
    question.addEventListener("click", () => {
      let answer = question.nextElementSibling;
      let questionIcon = question.previousElementSibling;
  
      answer.classList.toggle("active");
      questionIcon.classList.toggle("active");
    });
  });
  
  
  
  // scrollup
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
      $('.back-to-top').fadeIn(200)
    } else{
      $('.back-to-top').fadeOut(200)
    }
  });
   
  // animated the scroll to top
  $('.back-to-top').on('click', function(event) {
      event.preventDefault();
  
      $('html, body').animate({
        scrollTop: 0,
      }, 1000);
  });
  // scrollup