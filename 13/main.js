function slider(prevButton, nextButton, listElement) {
    function changeElement (event)  {
        const ACTIVE_CLASS_NAME = `current`
        const isPrevButton = event.target === prevButton
        const activeElement = listElement.querySelector(`.${ACTIVE_CLASS_NAME}`)
        const prevOrNextElement = isPrevButton
            ? activeElement.previousElementSibling
            : activeElement.nextElementSibling

        if (prevOrNextElement) {
            activeElement.classList.remove(ACTIVE_CLASS_NAME)
            prevOrNextElement.classList.add(ACTIVE_CLASS_NAME)
        }
        let slides = document.querySelector(`ul`).children
        console.log(slides)
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

}
slider(
    document.querySelector(`.js--slider__prev`),
    document.querySelector(`.js--slider__next`),
    document.querySelector(`.js--slider__list`)
)