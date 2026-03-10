const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const closeButton = document.getElementById("closeButton");
const overlay = document.getElementById("modalOverlay");

openBtn.addEventListener("click", function(){

overlay.style.display = "flex";

});

closeBtn.addEventListener("click", function(){

overlay.style.display = "none";

});

closeButton.addEventListener("click", function(){

overlay.style.display = "none";

});

overlay.addEventListener("click", function(e){

if(e.target === overlay){

overlay.style.display = "none";

}

});