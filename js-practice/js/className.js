const CLICK_CN = "click"; 
const title = document.querySelector('h1');

function handle(){
    title.classList.toggle(CLICK_CN);
}

function init(){
    title.addEventListener("click",handle);
}

init();