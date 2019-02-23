
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("moveToTop").style.display = "block";
  } else {
    document.getElementById("moveToTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  window.scroll({ 
    top: 0,
    left: 0, 
    behavior: 'smooth' 
  });
}

$(document).ready(function(){  
  $('.prod-img-crsl-wrap .carousel').carousel({
    interval:false
  });

  $(".productList").click(function(){
    
      window.scroll({ 
        top: 0,
        left: 0, 
        behavior: 'smooth' 
      });
  });
  $(".category").click(function(){
    
    window.scroll({ 
      top: 0,
      left: 0, 
      behavior: 'smooth' 
    });
  });
  $(".download").click(function(){
    window.print();
  });
  //$("#my-carousel-detail-300-hp-cms").removeClass();
  /*This is For stopping the carousel movement
  Please Remove the Following CSS Form Style.css
  .carousel-control-prev,.carousel-control-next,.carousel-indicators{
    display: none;
  }
  */
});