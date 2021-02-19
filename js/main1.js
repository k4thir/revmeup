

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
 
var modalImg = document.getElementById("img01");


img.onclick = function(){
  modal.style.display = "block";
}
img1.onclick = function(){
  modal.style.display = "block";
}
img2.onclick = function(){
  modal.style.display = "block";
}
img3.onclick = function(){
  modal.style.display = "block";
}

var span2 = document.getElementsByClassName("close")[0];
span2.onclick = function() {
  modal.style.display = "none";
} 



    
var pr  = document.getElementById("projects");
pr.onclick = function() {
    window.location.href = "page1.html"; 
}


var logout = document.getElementById("logout")
logout.onclick = function() {
    document.getElementById('foo').style.display='block';

    setTimeout(() => { window.location.href = "index.html"; 
     }, 3000);
    
}

