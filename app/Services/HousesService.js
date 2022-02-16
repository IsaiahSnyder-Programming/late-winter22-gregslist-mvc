import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js";


class HousesService {

    createHouse(newHouse) {
        console.log(newHouse);

        let thisHouse = new House(newHouse)

        ProxyState.houses = [thisHouse, ...ProxyState.houses]
    }
    
    deleteHouse(houseId) {
        let indexToDelete = ProxyState.houses.findIndex(h => h.id == houseId)
        ProxyState.houses.splice(indexToDelete, 1)
        ProxyState.houses = ProxyState.houses
    }

}

export const housesService = new HousesService()