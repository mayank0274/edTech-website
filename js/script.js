
var header = document.getElementById('head')
var icon = document.getElementById('icons');
var submit = document.getElementById("form_submit")


// swiper
var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      
//working of menu 

  function show(){
    header.classList.toggle('active');
  }
 icon.addEventListener("click",show)

submit.addEventListener("click",(event)=>{
  event.preventDefault();
})

