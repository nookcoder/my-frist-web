const title = document.querySelector('.click');
const BASE_COLOR = "tomato",
    OTHTER_COLOR = "blue" ; 

const open = document.querySelector('.open'),
    close = document.querySelector('.close'),
    dec = document.querySelector('.description__text'); 

function handleClick(){
    var currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHTER_COLOR;
    }else{
        title.style.color = BASE_COLOR ;
    }
}

function init(){
    title.style.color = BASE_COLOR; 
    title.addEventListener("click", handleClick);
}
init();

function showdown(){
    dec.style.display = 'none';
    open.style.display = 'block';
    open.addEventListener('click',showup);
}

function showup(){
    dec.style.display = 'block';
    open.style.display = 'none'; 
    close.addEventListener('click', showdown);
}

function initi(){
    dec.style.display = 'none';    
    open.addEventListener('click',showup);
}
initi();