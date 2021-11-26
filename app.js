function SlideActive(active = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[active].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClass()
            slide.classList.add('active')
        })

    }
    function clearActiveClass() {
        slides.forEach((slade) => {
            slade.classList.remove('active')
        })
    }
}

SlideActive()
