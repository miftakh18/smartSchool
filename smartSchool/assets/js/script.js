
// responsive
function Menu(ukuran) {
    var target = document.querySelector(".respon");
    if (ukuran.matches) {
        target.classList.remove("d-flex");
        target.classList.remove("justify-content-end");
    } else {
        target.classList.add("d-flex");
        target.classList.add("justify-content-end");

    }
}
var ukuran_window = window.matchMedia("(max-width: 1000px)");
Menu(ukuran_window);
ukuran_window.addListener(Menu);

// efek
$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".perlahan").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });


  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".kanan").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
          /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).animate({
            paddingLeft:'0px',
            paddingRight:'200px',
            opacity:'1'
          },1000);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).animate({
            paddingLeft:'200px',
            paddingRight:'0px',
            opacity:'0'
          });}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });