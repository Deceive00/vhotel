window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("color", window.scrollY > 0);

  var header = document.querySelector("header");
  header.classList.toggle("zoom-picture", window.scrollY > 0);
});


function openSideBar(){
  document.getElementById("menubar").style.width = "50vw";
  document.getElementById("open-menu").style.display = "none";
}

function closeSideBar(){
  document.getElementById("menubar").style.width = "0";
  document.getElementById("open-menu").style.display = "block";
}

