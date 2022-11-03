/* Custom JS code Start */

 //blog slider

 $('.single-item').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
             
            }
          },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    // nextArrow: '.arrow_next'
    
  });


//   customer review slider

$('.customer-review').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    // nextArrow: '.arrow_next'
  });

/* Custom JS code End */

//preloader
$(window).on("load", function () { 

    $(".preloader").fadeOut(1000);
    
});

//menu responsive
function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'),
     list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'),
      list.classList.remove('opacity-100'))
}

//menu header fixed on scroll
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 150) {
      $(".top-menu").removeClass("scroll-header");
    
    //   $(".brand-logo img").attr("src","img/logo.png");
    } else {
      $(".top-menu").addClass("scroll-header");
    

    //   $(".brand-logo img").attr("src","img/Foodtuck.png");

    }
  });


//   $(document).ready(function() {
//     $(window).on("scroll", function() {
//       console.log($(this).scrollTop())

//       if($(this).scrollTop() >= 30){
//         // set to new image
//         $(".brand-logo img").attr("src","http://placekitten.com/300/300");
//       } else {
//         //back to default
//         $(".brand-logo img").attr("src","http://placekitten.com/200/200");
//       }
//     })
//   })


//tab menu
const tabElements = [
    {
        id: 'breakfast',
        triggerEl: document.querySelector('#breakfast-tab'),
        targetEl: document.querySelector('#breakfast')
    },
    {
        id: 'lunch',
        triggerEl: document.querySelector('#lunch-tab'),
        targetEl: document.querySelector('#lunch')
    },
    {
        id: 'dinner',
        triggerEl: document.querySelector('#dinner-tab'),
        targetEl: document.querySelector('#dinner')
    },
    {
        id: 'dessert',
        triggerEl: document.querySelector('#dessert-tab'),
        targetEl: document.querySelector('#dessert')
    },
    {
        id: 'drink',
        triggerEl: document.querySelector('#drink-tab'),
        targetEl: document.querySelector('#drink')
    },
    {
        id: 'snack',
        triggerEl: document.querySelector('#snack-tab'),
        targetEl: document.querySelector('#snack')
    }
];

// options with default values
const options = {
    defaultTabId: 'breakfast',
    activeClasses: 'text-green-600 hover:text-green-600 dark:hover:text-blue-400 border-green-600',
    inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {
        console.log('tab is shown');
    }
};

const tabs = new Tabs(tabElements, options);


//menu smooth scroll

// $('.nav-menu a').click(function(e){

//     e.preventDefault();
//      var hash = this.hash;
//      var position = $(hash).offset().top;
//    // alert(position);
//      $('html').animate({
//          scrollTop:position
//      },800);
//  });


// const button = document.querySelector('#menu-button');
// const menu = document.querySelector('#menu');


// button.addEventListener('click', () => {
//   menu.classList.toggle('hidden');
// });

//scroll to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){
    $(".scroll").click(function(){
    $("html,body").animate({scrollTop:$(".top").offset().top},"1000");
    return false
    })
})



