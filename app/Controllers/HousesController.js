import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
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
        document.getElementById('modal-body-slot'). innerHTML = getHouseForm()
    }

    createHouse(event) {
        event.preventDefault()
        let form = event.target

        let newHouse = {
            bedroom: form.bedroom.value,
            bathroom: form.bathroom.value,
            sqFeet: form.sqFeet.value,
            price: form.price.value,
            description: form.description.value,
            color: form.color.value,
            imgUrl: form.imgUrl.value
        }
        housesService.createHouse(newHouse)

        let nList = document.getElementById('new-listing')
        form.reset()
        bootstrap.Modal.getOrCreateInstance(nList).hide()
    }

    deleteHouse(houseId) {
        housesService.deleteHouse(houseId)
    }
}