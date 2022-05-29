var elButton = document.querySelector(".burger-button");
var elContent = document.querySelector(".site-menu");

elButton.addEventListener("click", function(){
  elContent.classList.toggle("nav--active");
})