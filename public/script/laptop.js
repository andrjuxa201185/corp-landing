document.addEventListener('DOMContentLoaded', () => {
    const leftPart = document.querySelector('.wrapper-triangles .wrapper-img');
    const rightPart = document.querySelector('.wrapper-triangles .description');
    const laptop = document.querySelector('.laptop img');
    const title = document.querySelector('.laptop .description .title');

    const windowHeight = window.innerHeight;

    if (window.innerWidth >= 1280) {
        document.addEventListener('scroll', () => {
            if (leftPart.getBoundingClientRect().bottom < windowHeight && 
                leftPart.getBoundingClientRect().bottom > 200) {
                leftPart.style.transform = 'translateX(0%)';
                rightPart.style.transform = 'translateX(0%)';
                laptop.classList.add('laptop-appearence');
                title.classList.add('title-shadow');
            } else {
                leftPart.style.transform = '';
                rightPart.style.transform = '';
                laptop.classList.remove('laptop-appearence');
                title.classList.remove('title-shadow');
            }
        });
    }
});
