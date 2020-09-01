class Flat {

    render() {
        // String -> Number
        let FlatInfoParse = parseInt(flatInfo);
        let FloorInfoParse = parseInt(floorInfo);

        // Вспогательные переменные для отрисовки блока квартитр
        let htmlFlat = '';
        let htmlGallerySlider = '';
        let flatContentHtml = ``;
        let html = ``;

        // 1 -> 0
        FlatInfoParse = FlatInfoParse - 1;
        FloorInfoParse = FloorInfoParse - 1;


        for (let i = 0; i < FLAT[FlatInfoParse].characteristic.length; i++) {
            htmlFlat += `
            <div class="flat__content__description">
                <span>${FLAT[FlatInfoParse].characteristic[i]}</span>
                <span>${FLAT[FlatInfoParse].characteristicChild[i]}</span>
            </div>
            `;
        }

        for (let i = 0; i < FLAT[FlatInfoParse].galleryImages.length; i++) {
            htmlGallerySlider += `
            <div class="gallery__flat__line__img">
                <img src="${FLAT[FlatInfoParse].galleryImages[i]}" alt="">
            </div>
        `;
        }

        html = `
                    <div class="flat__content__inside">
            
                    <div class="flat__content__description__content">
                    ${htmlFlat}
                    <div class="flat__content__description__price">
                                    <span>Стоимость</span>
                    <span>${FLAT[FlatInfoParse].price}</span>
                    </div>
                    </div>
                    </div>

                    <div class="gallery__flat">
                    <div class="gallery__flat__main">
                    <img src="${FLAT[FlatInfoParse].galleryImages[0]}" alt="">
                    </div>
                    <div class="gallery__flat__line">
                    ${htmlGallerySlider}
                    </div>
            
                    <div id="next__btn"><img src="./img/close-icon.svg" alt=""></div>
                    </div>
            `;





        flatContentHtml = `
            <div class="flat__content" data-modalflat-id="${FLAT[FlatInfoParse].id}">
            <div class="preloader__content">
                <div class="lds-dual-ring"></div>
            </div>
                <div class="modal__floor__header">
                        <div class="modal__name prew">Квартира ${FLAT[FlatInfoParse].id}</div>
                        <div id="prev-btn" class=" prew"><img class="img" src="img/close-icon.svg" alt=""></div>
                    </div>
                    <div class="yzel">
                        ${html}
                    </div>
                    <div class="flat__content_button__buy">
                        Арендовать
                    </div>
            </div>
        `;


        // Отрисовка блока информации о кваритре

        TEST_MODAL_FLAT[FloorInfoParse].innerHTML = flatContentHtml;

        // DOM селекторы
        const prevBtn = document.querySelector('#prev-btn');
        const nextSliderBtn = document.querySelector('#next__btn');
        const imageGallery = document.querySelector('.gallery__flat__line');
        const galleryMain = document.querySelector('.gallery__flat__main');
        const gallerySlideArr = document.querySelectorAll('.gallery__flat__line__img');
        const buyBtn = document.querySelector('.flat__content_button__buy');
        const MODAL__FLAT__INFO = document.querySelector('.yzel');


        // Вспомогательные переменные
        let moveSlide = 0

        // Удалить блок содержимого с контентом квартиры
        const removeFlatElem = () => {
            document.querySelector('.flat__content').remove();
        }

        // Вернуться на шаг назад
        const prevFlats = (e) => {
            removeFlatElem();
            if (e.target.nodeName === 'IMG') {
                e.path[5].firstElementChild.style.display = 'flex';
            } else {
                e.path[4].firstElementChild.style.display = 'flex';
            }

            storage.flat = '';
        }


        // Прокрутить лайн блок слайдера
        const nextSlide = (e) => {
            if (gallerySlideArr.length >= 6 || gallerySlideArr.length <= 6) {
                moveSlide = moveSlide + -300
                if (moveSlide === -3000) {
                    moveSlide = moveSlide = 0
                }
            }
            if (e.target.nodeName === 'IMG') {
                e.path[2].children[1].style.left = `${moveSlide}px`;
            } else {
                e.path[1].children[1].style.left = `${moveSlide}px`;
            }
        }

        // Изменить главную картинку слайдера
        const changeImage = (e) => {
            let currentImage = e.target.outerHTML;
            galleryMain.innerHTML = currentImage
        }
        // Рендер формы отрпарвки данных

        const formRender = () => {
            buyBtn.remove()
            MODAL__FLAT__INFO.innerHTML = `
                    <div class="flat__content__form">
                    <form method="POST">
                        <div class="flat__content__form__name">
                            <input type="text" name="name" placeholder="Имя" required>
                        </div>
                        <div class="flat__content__form__lastname">
                            <input type="text" name="lastname" placeholder="Фамилия" required>
                        </div>
                        <div class="flat__content__form__phone">
                            <input type="text" name="phone" placeholder="Телефон" required>
                        </div>
                        <div class="flat__content__form__mail">
                            <input type="text" name="mail" placeholder="mail" required>
                        </div>
                        <div class="flat__content__form__floor">
                            <input type="text" name="floor" value="${storage.floor}" readonly>
                        </div>
                        <div class="flat__content__form__flat">
                            <input type="text" name="flat" value="${storage.flat}" readonly>
                        </div>
                        
                        <input type="submit" class="flat__content__form__btn">
                        </input>
                    </form>
                </div>
            `;
            formInfoRender();
        }

        const formInfoRender = () => {
            MODAL__FLAT__INFO.innerHTML += `
            <div class="flat__content__form__info">
                <h1>Заполните форму и мы свяжемся с вами!</h1>
                <p>Наш специалист в течении 5 мин свяжется с вами</p>
                <div class="social__links">
                    <nav>
                        <a href="#">
                            <li>
                                <img src="./img/icons/instagram.svg" />
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <img src="./img/icons/instagram.svg" />
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <img src="./img/icons/instagram.svg" />
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <img src="./img/icons/instagram.svg" />
                            </li>
                        </a>
                    </nav>
                </div>
            </div>
            `;

            $('form').submit(function (e) {
                var postForm = {
                    'name': $('input[name=name]').val(),
                    'lastname': $('input[name=lastname]').val(),
                    'phone': $('input[name=phone]').val(),
                    'mail': $('input[name=mail]').val(),
                    'flat': $('input[name=flat]').val(),
                    'floor': $('input[name=floor]').val(),
                };

                $.ajax({
                    type: 'POST',
                    url: 'save.php',
                    data: postForm,
                    success: function () {
                        alert('Данные отправлены, вам перезвонят через 5 минут, спасибо что выбрали нас !')
                    }
                });
                e.preventDefault();
            });
        }
        const imgsSlider = document.querySelectorAll('.gallery__flat__line__img img')
        const preloader = document.querySelector('.preloader__content');
        let loadedImg = 0;

        const imageLoaded = (e) => {
            loadedImg++
            if (loadedImg === imgsSlider.length) {
                preloader.classList.add('fadeOut');
                e.path[7].style.overflow = '';
                setTimeout(function () {
                    preloader.remove()
                }, 500)
            }

        }
        for (item of imgsSlider) {
            item.addEventListener('load', imageLoaded)
        }
        buyBtn.addEventListener('click', formRender)
        imageGallery.addEventListener('click', changeImage);
        nextSliderBtn.addEventListener('click', nextSlide)
        prevBtn.addEventListener('click', prevFlats);

    }
}

const flatPart = new Flat();


