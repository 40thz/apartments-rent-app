class FloorInside {

    render() {
        let htmlFloorInside = '';
        for(let i = 1; i < 11; i++){
            htmlFloorInside = `
            <div class="modal__floor__container" data-modalfloor-id=${i}>
            <div class="modal__floor">
                <div class="modal__floor__wrapper">
                    <div class="modal__floor__header">
                        <div class="modal__name prew">Выбор квартиры</div>
                        <div id='close-btn' class="prew"><img class="img" src="img/close-icon.svg" alt=""></div>
                    </div>
                    <div class="modal__floor__content">
                    <div class="left">
                        <div class="flat">
                            <img src="./floor.png" alt="" data-flat-id="55">
                        </div>
                        <div class="flat">
                            <img src="./floor.png" alt="" data-flat-id="56">
                        </div>
                        <div class="flat">
                            <img src="./floor.png" alt="" data-flat-id="57">
                        </div>
                    </div>
                    <div class="floor__main__content">
                        <div class="floor__main__content__inside">
                            <h1>Номер квартиры</h1>
                            <div class="floor__counter">
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="flat">
                            <img src="./floor.png" alt="" data-flat-id="58">
                        </div>
                        <div class="flat">
                            <img src="./floor.png" alt="" data-flat-id="59">
                        </div>
                        <div class="flat">
                            <img src="./floor.png" alt="" data-flat-id="60">
                        </div>
                    </div>
                </div>
                    </div>

                    <div class="flat__content_wrapper">
                      
                    </div>
                </div>
            </div>
            `
            const html = `
            ${htmlFloorInside}
            `
            document.querySelector('body').innerHTML += html;
            
        }
    }
}

const floorInsidePart = new FloorInside();

floorInsidePart.render();
