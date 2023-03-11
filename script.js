const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".navLinks");


hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    navLink.classList.toggle("active");

})
document.querySelectorAll(".link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navLink.classList.remove("active");
    
}));