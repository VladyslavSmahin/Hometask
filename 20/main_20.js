const img = $(`.js-onClick-img`)

function modalWindow(event) {
    function changeContent() {
        let $savedElement

        function currentIMG() {
            $('.js--gal_item').on('click', function () {
                $savedElement = $(this)
                const imgSrc = $(this).find('img').attr('src');
                $('.js--modal__content img').attr('src', imgSrc);
            });
        }

        function nextIMG() {
            $('.js--modal__next').on('click', function () {
                if ($savedElement) {
                    const newElement = $savedElement.closest('.js--gal_item').next().find('img');
                    if (newElement.length > 0) {
                        const newImgSrc = newElement.attr('src');
                        $('.js--modal__content img').attr('src', newImgSrc);
                        $savedElement = newElement.closest('.js--gal_item')
                    } else {
                        const firstImgSrc = $('.js--gal_item:first-of-type img').attr('src');
                        $('.js--modal__content img').attr('src', firstImgSrc);
                        $savedElement = $('.js--gal_item:first-of-type');
                    }
                }
            });
        }

        function prevIMG() {
            $('.js--modal__prev').on('click', function () {
                if ($savedElement) {
                    const newElement = $savedElement.closest('.js--gal_item').prev().find('img');
                    if (newElement.length > 0) {
                        const newImgSrc = newElement.attr('src');
                        $('.js--modal__content img').attr('src', newImgSrc);
                        $savedElement = newElement.closest('.js--gal_item')
                    } else {
                        const lastImgSrc = $('.js--gal_item:last-of-type img').attr('src');
                        $('.js--modal__content img').attr('src', lastImgSrc);
                        $savedElement = $('.js--gal_item:last-of-type');
                    }
                }
            });
        }

        nextIMG()
        prevIMG()
        currentIMG()
    }

    function openModal() {
        const target = event.target;
        if ($(target).hasClass(`js--gal_item`) || $(target).hasClass(`js-onClick-img`)) {
            changeContent()
            $(`.modal`).css(`display`, `block`)
        }
    }

    function closeModal() {
        $(`.js--modal__close`).on(`click`, () => $(`.modal`).css(`display`, `none`))
    }

    closeModal()
    openModal()
}

img.on(`click`, modalWindow)