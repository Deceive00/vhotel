
window.addEventListener("scroll", function() {
  var fixedTest = document.querySelector(".picture-text");
  if(window.scrollY > 700){
    fixedTest.classList.add("hide");
  }
  else{
    fixedTest.classList.remove("hide");
  }
});
