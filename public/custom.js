/* Custom JS code Start */

 //blog slider

 $('.single-item').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    // responsive: [
    //     {
    //       breakpoint: 1920,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 991,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
           
    //       }
    //     }
    //     // You can unslick at a given breakpoint now by adding:
    //     // settings: "unslick"
    //     // instead of a settings object
    //   ]
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
     list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
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


// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
    {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab-example'),
        targetEl: document.querySelector('#profile-example')
    },
    {
        id: 'dashboard',
        triggerEl: document.querySelector('#dashboard-tab-example'),
        targetEl: document.querySelector('#dashboard-example')
    },
    {
        id: 'settings',
        triggerEl: document.querySelector('#settings-tab-example'),
        targetEl: document.querySelector('#settings-example')
    },
    {
        id: 'contacts',
        triggerEl: document.querySelector('#contacts-tab-example'),
        targetEl: document.querySelector('#contacts-example')
    }
];

// options with default values
const options = {
    defaultTabId: 'profile',
    activeClasses: 'text-green-600 hover:text-green-600 dark:hover:text-blue-400 border-green-600',
    inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {
        console.log('tab is shown');
    }
};

const tabs = new Tabs(tabElements, options);
