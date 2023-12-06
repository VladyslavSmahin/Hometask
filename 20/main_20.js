const body = $(`body`)

function modalWindow(event) {
    function changeContent() {
        const images = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg'];
        let currentImageIndex = 0;

        function currentIMG() {
            $('.js--gal_item').on('click', function () {
                const imgSrc = $(this).find('img').attr('src');

                $('.js--modal__content img').attr('src', imgSrc);
            });

        }

        function nextIMG() {
            $('.js--modal__next').on('click', function () {
                currentImageIndex = (currentImageIndex + 1) % images.length; //
                $('.js--modal__content img').attr('src', images[currentImageIndex]);
            });
        }

        function prevIMG() {
            $('.js--modal__prev').on('click', function () {
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                $('.js--modal__content img').attr('src', images[currentImageIndex]);
            });
        }

        nextIMG()
        prevIMG()
        currentIMG()
    }

    function openCloseModal() {
        const target = event.target;
        if ($(target).hasClass(`js--gal_item`) || $(target).hasClass(`js-onClick-img`)) {
            changeContent()
            $(`.modal`).css(`display`, `block`)
        } else if ($(target).hasClass(`js--modal__close`)) {
            $(`.modal`).css(`display`, `none`)
        }
    }

    openCloseModal()
}

body.on(`click`, modalWindow)