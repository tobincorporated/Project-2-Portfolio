function dropfun() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//// Close the dropdown if the user clicks outside of it
//window.onclick = function(e) {
//  if (!e.target.matches('.dropbtn')) {
//      console.log('clicked not button')
//    var myDropdown = document.getElementById("myDropdown");
//      if (myDropdown.classList.contains('show')) {
//        myDropdown.classList.toggle('show');
//      }
//  }
//}