const menu = document.getElementById("menu");
const actions = document.getElementById("actions");

menu.addEventListener("click",()=>{
    hundleMenu();
})

function hundleMenu(){
    menu.classList.toggle("is-active");  //classlist: all the classes used in menu ; toggle add new class (if they exist then deleted)
    actions.classList.toggle("is-active"); 
}