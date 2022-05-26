$(document).ready(function () { const e = document.querySelector(".bars"), o = document.querySelector(".Navbar"), t = document.querySelector(".close"); e.addEventListener("click", function () { o.classList.toggle("show-Navbar"); }), t.addEventListener("click",
function () { o.classList.remove("show-Navbar"); }), $(".owl-carousel.clients-carousal").owlCarousel({ loop: !0,center:true, margin: 10, nav: !0, rtl: !0, autoplay:true,autoplayTimeout:2500, responsive: { 0: { items: 2 }, 600: { items: 3 }, 1000: { items: 5 } } }), $(".owl-carousel.owl-portofolio").owlCarousel({
loop: !0, margin: 10, nav: !0, rtl: !0, autoplay:true,autoplayTimeout:2500, navText: ["<img src='images/next-btn.png' height='40' width='40'>", "<img src='images/prev-btn.png' height='40' width='40'>"], responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 }
}, }), $(".owl-carousel.owl-team").owlCarousel({ loop: !0,navText: ["<img src='images/next-btn.png' height='40' width='40'>", "<img src='images/prev-btn.png' height='40' width='40'>"], margin: 0,center:true, nav: !0, rtl: !0, autoplay:true,autoplayTimeout:2500, responsive: { 0: { items: 1 }, 600: { items: 2 }, 800: { items: 3 }, 1200: { items: 4 } } }); });


jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.touchmove = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.wheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("wheel", handle, { passive: true });
    }
};
jQuery.event.special.mousewheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("mousewheel", handle, { passive: true });
    }
};


$('.owl-carousel.owl-four').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


//ScrollNavbar
    let navbar = document.querySelector('.main-navbar');
        window.addEventListener('scroll' , function(){
            navbar.classList.toggle("sticky" , window.scrollY > 10);
        })




// $("#navMenus").on('click','li',function(e){
//     // remove classname 'active' from all li who already has classname 'active'
//     $("#navMenus li.active").removeClass("active"); 
//     // adding classname 'active' to current click li 
//     $(this).addClass("active"); 
// });

 $(function () {
      $('[data-toggle="tooltip"]').tooltip()
});