var hamburger = document.getElementById("hamburger");
var menuContainer = document.getElementById("menuContainer");
hamburger.addEventListener('click',function(){
   hamburger.classList.toggle("active");
   menuContainer.classList.toggle("response");
})