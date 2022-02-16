import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const testCar = new Car(
  {
    make:'GMC', 
    model:'Sierra', 
    year:2018, 
    price:5600, 
    description: 'its cool.',
    color:'#FFFFFF', 
    imgUrl:'https://thiscatdoesnotexist.com'
  })

const testHouse = new House({
  make: 'Kanye West',
  footage: 12,
  year: 1200,
  price: 10,
  description: 'yeah',
  color: '#ffffff',
  imgUrl: "//thiscatdoesnotexist.com/"
})

class AppState extends EventEmitter {
  
  // NOTE just adds intellisense to our cars array that lets our code know its an array of cars, not other things 
  /** @type {import('./Models/Car').Car[]} */
  cars =[testCar]

  /** @type {import('./Models/House').House[]} */
  houses = [testHouse]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
