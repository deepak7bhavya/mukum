
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
  $(".productList").click(function(){
    
      window.scroll({ 
        top: 0,
        left: 0, 
        behavior: 'smooth' 
      });
  });
  $(".download").click(function(){
    window.print();
  })
});