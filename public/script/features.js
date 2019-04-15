window.addEventListener('load', () => {
    const imgs = document.querySelectorAll('.features>.container>img');
    const windowHeight = window.innerHeight;
    
    document.addEventListener('scroll', () => {
        for (const img of imgs) {
            if (img.getBoundingClientRect().top < windowHeight && img.getBoundingClientRect().bottom > 0) {
                y = (windowHeight - img.getBoundingClientRect().top) / windowHeight;
                img.style.transform = `translate(${(y * 150) - 150}px, ${(y * 300) - 200}px)`;
            }
        }
    });
});