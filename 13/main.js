function slider(prevButton, nextButton, listElement) {
    const ACTIVE_CLASS_NAME = `current`
    const ACTIVE_DOTS = `currentDots`
    let slides = document.querySelector(`ul`).children
    let dots = document.getElementById(`dots`).children

    function changeElement(event) {
        const isPrevButton = event.target === prevButton
        const activeElement = listElement.querySelector(`.${ACTIVE_CLASS_NAME}`)
        const prevOrNextElement = isPrevButton
            ? activeElement.previousElementSibling
            : activeElement.nextElementSibling

        if (prevOrNextElement) {
            activeElement.classList.remove(ACTIVE_CLASS_NAME)
            prevOrNextElement.classList.add(ACTIVE_CLASS_NAME)
        }

        function changeDots() {
            const isPrevButton = event.target === prevButton
            const activeDots = document.getElementById(`dots`).querySelector(`.${ACTIVE_DOTS}`)
            const prevOrNextDots = isPrevButton
                ? activeDots.previousElementSibling
                : activeDots.nextElementSibling

            if (prevOrNextDots) {
                activeDots.classList.remove(ACTIVE_DOTS)
                prevOrNextDots.classList.add(ACTIVE_DOTS)
            }
        }

        changeDots()

        function removeButton(button, slide) {
            if (slide.classList.contains(`current`)) {
                button.style.display = `none`
            } else {
                button.style.display = `flex`
            }
        }

        removeButton(nextButton, slides[4])
        removeButton(prevButton, slides[0])

    }

    prevButton.addEventListener(`click`, changeElement)
    nextButton.addEventListener(`click`, changeElement)

    let dots1 = document.querySelector(`.dots1`)
    let dots2 = document.querySelector(`.dots2`)
    let dots3 = document.querySelector(`.dots3`)
    let dots4 = document.querySelector(`.dots4`)
    let dots5 = document.querySelector(`.dots5`)

    function dotsSlides(dot, slideOn) {
        dot.addEventListener(`click`, function (event) {
            Array.from(slides).forEach(s => s.classList.remove(ACTIVE_CLASS_NAME));
            slideOn.classList.add(ACTIVE_CLASS_NAME)
            prevButton.style.display = event.target.classList.contains('dots1') ? 'none' : 'flex';
            nextButton.style.display = event.target.classList.contains('dots5') ? 'none' : 'flex';
            Array.from(dots).forEach(d => d.classList.remove(ACTIVE_DOTS)
            );
            if (event.target) {
                event.target.classList.add(ACTIVE_DOTS)
            }
        })
    }
    dotsSlides(dots1, slides[0])
    dotsSlides(dots2, slides[1])
    dotsSlides(dots3, slides[2])
    dotsSlides(dots4, slides[3])
    dotsSlides(dots5, slides[4])
}

slider(
    document.querySelector(`.js--slider__prev`),
    document.querySelector(`.js--slider__next`),
    document.querySelector(`.js--slider__list`)
)