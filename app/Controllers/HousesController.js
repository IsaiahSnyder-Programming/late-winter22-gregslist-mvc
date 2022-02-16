import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


function _draw() {
    let template = ''
    ProxyState.houses.forEach(c => template += c.Template)
    document.getElementById('listings').innerHTML = template
}

export class HousesController{
    constructor() {
        ProxyState.on('houses', _draw)
    }

    viewHouses() {
        _draw()
    }

    deleteHouse(houseId) {
        housesService.deleteHouse(houseId)
    }
}