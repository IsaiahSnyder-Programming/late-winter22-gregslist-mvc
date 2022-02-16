import { generateId } from "../Utils/generateId.js"


export class House{
    constructor({bedroom, bathroom, sqFeet, price, description, color, imgUrl}) {
        this.id = generateId()
        this.bedroom = bedroom
        this.bathroom = bathroom
        this.sqFeet = sqFeet
        this.price = price
        this.description = description
        this.color = color
        this.imgUrl = imgUrl
    }

    get Template() {
        return `
        <div class="col-md-4">
            <div class="bg-white rounded shadow">
                <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="house image">
                    <div class="p-3">
                        <p>Bedrooms: ${this.bedroom}</p>
                        <p>Bathrooms: ${this.bathroom}</p>
                        <p>Square Footage: ${this.sqFeet}</p>
                        <p>$${this.price}</p>
                        <p>Color: ${this.color}</p>
                        <p>${this.description}</p>
                    </div>
                <button class="btn btn-outline-danger" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>  
            </div>
        </div>
        `
    }
}