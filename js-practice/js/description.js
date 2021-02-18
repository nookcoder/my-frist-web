const SHOWING_CN = "showing";
const dec_img_btn = document.querySelector('dec-img__btn'),
    dec = document.querySelector('.dec');

function showText(){
    dec_img_btn.classList.remove(SHOWING_CN);
    dec.classList.add(SHOWING_CN);
}

function hiddenText(){
    dec_img_btn.classList.add(SHOWING_CN);
    dec.classList.remove(SHOWING_CN);
}