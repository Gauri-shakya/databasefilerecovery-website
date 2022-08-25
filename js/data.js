
// main-counter*****************

var section = document.querySelector(".main-counter");
var hasEntered = false;
window.addEventListener("scroll", (e) => {
    var shouldanimate = window.scrollY + window.innerHeight >= section.offsetTop;
    if (shouldanimate && !hasEntered) {
        hasEntered = true;
        $(".value").each(function() {
            $(this)
                .prop("counter", 0)
                .animate({ Counter: $(this).text() }, {
                    duration: 4000,
                    easing: "swing",
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    },
                });
        });
    }
});




// .........backto top btn..........

const gotopbtn = document.querySelector(".gotopbtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!gotopbtn.classList.contains("btnEntrance")) {
      gotopbtn.classList.remove("btnExit");
      gotopbtn.classList.add("btnEntrance");
      gotopbtn.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(gotopbtn.classList.contains("btnEntrance")) {
      gotopbtn.classList.remove("btnEntrance");
      gotopbtn.classList.add("btnExit");
      setTimeout(function() {
       gotopbtn.style.display = "none";
      }, 250);
    }
  }
}





$(window).scroll(function(){
      if ($(this).scrollTop() > 120) {
          $('.ss-content').addClass('fixed');
      } else {
          $('.ss-content').removeClass('fixed');
      }
});
