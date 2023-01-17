function closeParent(){
    this.parentElement.style.display='none';
}

let closeButton = document.getElementById("close");
let nav = document.getElementById("hiden")
let showNavButton = document.getElementById("shownav")

showNavButton.addEventListener("click", ()=>{
    nav.style.display= "block"
} )

closeButton.addEventListener("click", closeParent)