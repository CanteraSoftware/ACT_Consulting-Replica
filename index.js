const button = document.querySelectorAll('.buttons-navbar li a');
const navbar = document.querySelector('.bg-nav');
const contactNav = document.querySelector('#navBar--contacts')
document.addEventListener('scroll', () =>{
    if (window.scrollY > 100) {
        navbar.style.top = 0    
        navbar.classList.add('scrolled');
        button.forEach(item => item.classList.add('scrolled'))
    }else{
        navbar.classList.remove('scrolled')
        button.forEach(item => item.classList.remove('scrolled'))
    }
})
