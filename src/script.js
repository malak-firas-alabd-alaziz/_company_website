
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').addEventListener('click', function (){
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    navbar.classList.remove('active');
}
