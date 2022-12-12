const slides = document.querySelectorAll('.video-gallery__iframe')
const slidesOfTwo = document.querySelectorAll('.video-gallery__slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('video-gallery__iframe_active')})
}

function clearActiveClasses () {
    slides.forEach((slide) => {
      slide.classList.remove('video-gallery__iframe_active')  
    })
}

for (const slide of slidesOfTwo) {
    slide.addEventListener('click', () => {
        clearActiveClassesSlidesOfTwo()
        slide.classList.add('video-gallery__slide_active')})
}

function clearActiveClassesSlidesOfTwo () {
    slidesOfTwo.forEach((slide) => {
      slide.classList.remove('video-gallery__slide_active')  
    })
}