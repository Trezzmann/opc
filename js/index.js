 const btnOpen = document.querySelector("#menu")
 const btnClose = document.querySelector("#menu-close")
 const menu = document.querySelector(".menu")
 btnOpen.addEventListener('click',()=>{
     menu.style.left = 0
 })
 btnClose.addEventListener('click',()=>{
    menu.style.left = "-1000px"
})

// testing

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// var bloc = document.querySelector(".menu-parent")
//     // console.log(bloc)
