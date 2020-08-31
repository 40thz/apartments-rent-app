class Floor {

    render() {
        let htmlFloor = '';
        FLOOR.forEach((floor) => {
            htmlFloor += `
            <a href="#" class="house__floor">
            <path class="part" data-floor-id="${floor.id}"
                d="${floor.cord}"
                fill="#FF3D00">
            </a>
            `
            const html = `
            <svg>
            ${htmlFloor}
            <img src="./flat.png" alt="">
            </svg>
            `

            HOUSE__WRAP.innerHTML = html;
        })
    }
}

const floorPart = new Floor();

floorPart.render();

