document.getElementById("noMember").style.display = "none";

function myFunction() {
    var x = document.getElementById("noMember");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }