const hamburger = document.querySelector('.mobile_hom1');
const menu = document.querySelector('.close');
const curtain = document.querySelector('.opacity');
const X = document.querySelector('.close_x');

X.addEventListener('click', (e) =>{
    menu.classList.add('close_now');
    curtain.classList.add('opacity_now')
})
hamburger.addEventListener('click', () =>{
    menu.classList.remove('close_now');
    curtain.classList.remove('opacity_now')
})

console.log(X)
