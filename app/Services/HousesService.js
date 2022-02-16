import { ProxyState } from "../AppState.js"


class HousesService {
    
    deleteHouse(houseId) {
        let indexToDelete = ProxyState.houses.findIndex(h => h.id == houseId)
        ProxyState.houses.splice(indexToDelete, 1)
        ProxyState.houses = ProxyState.houses
    }

}

export const housesService = new HousesService()