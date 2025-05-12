document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-unico .slide')
    const prev = document.getElementById('prev')
    const next = document.getElementById('next')
    let index = 0

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove('ativo'))
        slides[i].classList.add('ativo')
    }

    function nextSlide() {
        index = (index + 1) % slides.length
        showSlide(index)
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length
        showSlide(index)
    }

    next.addEventListener('click', nextSlide)
    prev.addEventListener('click', prevSlide)

    setInterval(nextSlide, 10000) // Troca automática a cada 10 segundos

    showSlide(index) // Inicializa com o primeiro slide visível
})
