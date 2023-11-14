function slider(prevButton, nextButton, listElement) {
    const ACTIVE_CLASS_NAME = `current`
    let slides = document.querySelector(`ul`).children
    console.log(slides)
    function changeElement (event)  {
        const isPrevButton = event.target === prevButton
        const activeElement = listElement.querySelector(`.${ACTIVE_CLASS_NAME}`)
        const prevOrNextElement = isPrevButton
            ? activeElement.previousElementSibling
            : activeElement.nextElementSibling

        if (prevOrNextElement) {
            activeElement.classList.remove(ACTIVE_CLASS_NAME)
            prevOrNextElement.classList.add(ACTIVE_CLASS_NAME)
        }

        function removeButton (button, slide) {
            if (slide.classList.contains(`current`)) {
                button.style.display =`none`
            } else{
                button.style.display =`flex`
            }
        }
        removeButton(nextButton, slides[4])
        removeButton(prevButton, slides[0])
    }
    prevButton.addEventListener(`click`, changeElement)
    nextButton.addEventListener(`click`, changeElement)

    let dots1 = document.querySelector(`.dots1`)
    console.log(dots1)
    let dots2 = document.querySelector(`.dots2`)
    let dots3 = document.querySelector(`.dots3`)
    let dots4 = document.querySelector(`.dots4`)
    let dots5 = document.querySelector(`.dots5`)
    function dotsSlides (dot, slideOn) {
        dot.addEventListener(`click`, function (){
            slides.forEach(s => s.classList.remove(ACTIVE_CLASS_NAME));
            console.log(slides)
            slideOn.classList.add(ACTIVE_CLASS_NAME)
        })
    }
    dotsSlides(dots1,slides[0])
}
slider(
    document.querySelector(`.js--slider__prev`),
    document.querySelector(`.js--slider__next`),
    document.querySelector(`.js--slider__list`)
)