const floors = document.querySelectorAll('.house__floor');
const count = document.querySelector('.house__counter div');
const floorCount = document.querySelectorAll('.floor__counter');
const modalBlock = document.querySelectorAll('.modal__floor__container');
const closeBtn = document.querySelectorAll('#close-btn')
const flats = document.querySelectorAll('.flat');
const imageGallery = document.querySelectorAll('.gallery__flat__line__img');


let storage = { name: '', lastname: '', phone: '', mail: '', floor: '', flat: '' }
let flatInfo = '';
let floorInfo = ''

for(item of modalBlock){
    const closeModal = (e) => {
        if (e.target.className === 'modal__floor__container') {
            e.target.style.display = 'none'
    
            storage.floor = ''; storage.flat = '';
            document.querySelector('.flat__content').remove();
            e.toElement.firstElementChild.firstElementChild.style.display = 'flex';
        }
    }
    item.addEventListener('click', closeModal);
}
floors.forEach(item => {

    const changeCount = (e) => {
        count.innerText = e.target.dataset.floorId;
    }

    const openModal = (e) => {
        let floorTargetId = e.target.dataset.floorId;
        floorInfo = floorInfo = floorTargetId
        document.querySelector(`[data-modalfloor-id="${floorTargetId}"]`).style.display = 'flex';
        storage.floor = floorTargetId;
    }


    item.addEventListener('mouseover', changeCount)
    item.addEventListener('click', openModal);
})

closeBtn.forEach(item => {

    const closeModal = (e) => {
        if (e.target.nodeName == 'IMG') {
            e.path[5].style.display = 'none'
        } else {
            e.path[4].style.display = 'none'
        }
        storage.floor = ''; storage.flat = '';
        document.querySelectorAll('.modal__floor__wrapper').forEach(item => {
            item.style.display = 'flex';
        })
    }

    item.addEventListener('click', closeModal)
})


flats.forEach(item => {

    const changeCount = (e) => {
        floorCount.forEach(counter => {
            if (typeof e.target.dataset.flatId === 'undefined') {
                counter.innerText = '';
            } else {
                counter.innerText = e.target.dataset.flatId;
            }
        })

    }
    
    const openModalFlat = (e) => {
        let flatTargetId = e.target.dataset.flatId;
        flatInfo = flatInfo = flatTargetId
        flatPart.render();
        e.path[4].style.display = 'none';
        document.querySelector(`[data-modalflat-id="${flatTargetId}"]`).style.display = 'flex';
        storage.flat = flatTargetId;
        
        
    }

    item.addEventListener('mouseover', changeCount)
    item.addEventListener('click', openModalFlat);
})

    


