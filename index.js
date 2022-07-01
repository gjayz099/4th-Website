$(document).ready(function(){

    // Menu bar
    $(".mobile-menu").on("click", function() {
        $("ul").toggleClass("showing");
    })
    //    // Menu bar
    $("ul li a").on("click", function() {
        $("ul").removeClass("showing");
    })

    // Scroll 
    $(document).on("scroll", function() {
        if($(window).scrollTop()) {
          $('nav').addClass('sticky')
          $('ul li a').addClass('white')
        }else{
          $('nav').removeClass('sticky')
          $('ul li a').removeClass('white')
        }
    })
    url = window.Location.href 
    $("ul li a").on("click", function(){
      if(url== (this.href)){
        $(this).closest("ul li").toggleClass("link-active")
      }
    })

    $(".btn-i").on("click", function(){
      $(this).addClass("active").siblings().removeClass("active")

      var filter = $(this).attr("data-filter")

      if(filter == "all"){
          $(".item-menu ").show().addClass("show");
      }else{
          $(".item-menu ").not("."+filter).hide();
          $(".item-menu ").filter("."+filter).show().addClass("show");
      }
    })

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        lazyLoad: true,
        nav:true,
        navText: false,
        autoplay: true,
        responsive:{
            2000:{
              items:1
            }
        }
      })

      // Count aminite
      $('.count').each(function () {
        $(this).prop('Counter',1).animate({
            Counter: $(this).text()
        }, {
            duration: 6000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now))
            }
        })
    })
    var slider = tns({
      container: '.my-slider',
      items: 3,
      autoplay: true,
      loop:true,
      navText: false,
      nav: false,  
      responsive: {
        1200: {
          items: 3
        },
        800:{
          items: 2
        },
        400:{
          items: 1
        }

      }
    })
    // 
   
    
})

