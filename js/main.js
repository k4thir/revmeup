var nav = document.getElementById("nav")
var menu = document.getElementById("menu")
var span = document.getElementsByTagName("span")

menu.addEventListener("click", () => {
    if (nav.style.width == "85px") {
        nav.style.width = "280px"
        for (i = 0; i < 7; i++) {
            span[i].style.display = "block"
        }
    } else {
        nav.style.width = "85px"
        for (i = 0; i < 7; i++) {
            span[i].style.display = "none"
        }
    }
})





// var pr  = document.getElementById("projects");
// pr.onclick = function() {
//     window.location.href = "page1.html"; 
// }


var logout = document.getElementById("logout")
logout.onclick = function() {
    window.location.href = "index.html"; 
    console.log("SDv")
}


// var head = document.getElementsByTagName("h2")[0];
// head.onclick = function() {
//      window.location.href = "ex.html";
// }
// var head1 = document.getElementsByTagName("h2")[1];
// head1.onclick = function() {
//      window.location.href = "ex.html";
// }
// var head2 = document.getElementsByTagName("h2")[2];
// head2.onclick = function() {
//      window.location.href = "ex.html";
// }
// var head3 = document.getElementsByTagName("h2")[3];
// head3.onclick = function() {
//      window.location.href = "ex.html";
// }
// var head4 = document.getElementsByTagName("h2")[4];
// head4.onclick = function() {
//      window.location.href = "ex.html";
// }
// var head5 = document.getElementsByTagName("h2")[5];
// head5.onclick = function() {
//      window.location.href = "ex.html";
// }
// var head6 = document.getElementsByTagName("h2")[6];
// head6.onclick = function() {
//      window.location.href = "ex.html";
// }






var head = document.getElementsByClassName("card")[0];
head.onclick = function() {
     window.location.href = "ex.html";
}
var head1 = document.getElementsByClassName("card")[1];
head1.onclick = function() {
     window.location.href = "ex.html";
}
var head2 = document.getElementsByClassName("card")[2];
head2.onclick = function() {
     window.location.href = "ex.html";
}
var head3 = document.getElementsByClassName("card")[3];
head3.onclick = function() {
     window.location.href = "ex.html";
}
var head4 = document.getElementsByClassName("card")[4];
head4.onclick = function() {
     window.location.href = "ex.html";
}
var head5 = document.getElementsByClassName("card")[5];
head5.onclick = function() {
     window.location.href = "ex.html";
}
var head6 = document.getElementsByClassName("card")[6];
head6.onclick = function() {
     window.location.href = "ex.html";
}






// var pa = document.getElementById("pro")
// pa.onclick = function() {
//     window.location.href = "ex.html"; 
//     console.log("SDv")
// }
// var pa1= document.getElementById("pro1")
// pa1.onclick = function() {
//     window.location.href = "ex.html"; 
//     console.log("SDv")
// }
// var pa2 = document.getElementById("pro2")
// pa2.onclick = function() {
//     window.location.href = "ex.html"; 
//     console.log("SDv")
// }
// var pa3 = document.getElementById("pro3")
// pa3.onclick = function() {
//     window.location.href = "ex.html"; 
//     console.log("SDv")
// }
// var pa4 = document.getElementById("pro4")
// pa4.onclick = function() {
//     window.location.href = "ex.html"; 
//     console.log("SDv")
// }
// var pa5 = document.getElementById("pro5")
// pa5.onclick = function() {
//     window.location.href = "ex.html"; 
//     console.log("SDv")
// }
// var pa6 = document.getElementById("pro6")
// pa6.onclick = function() {
//     window.location.href = "ex.html"; 
//     console.log("SDv")
// }