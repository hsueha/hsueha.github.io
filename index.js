function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
  document.getElementById("myClosedSidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("myClosedSidebar").style.width = "50px";
  document.getElementById("main").style.marginLeft= "50px";
}
