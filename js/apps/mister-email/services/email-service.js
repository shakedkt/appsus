// // import {utilService} from './util.service.js'
// // import {storageService} from './storage.service.js'
// // const KEY = 'carsDB'

// var emails = _createMails();   
var emails = [
    { subject: 'Wassap?', body: 'Pick up!', isRead: true, sentAt: 1551133930594, adress: 'itay@gmail.com', sender: 'itay' },
    { subject: 'meep meep?', body: 'meep!', isRead: false, sentAt: 1551144930594, adress: 'yaron@gmail.com', sender: 'yaron' }
]

// function _createCars() {
//     var cars = storageService.load(KEY)
//     if (!cars || !cars.length) {
//         cars = [_createCar('Audu'), _createCar('Suzupi')]
//         storageService.store(KEY, cars)
//     }
//     return cars;
// }

function createEmail(adress, subject, body, sentAt, sender = 'new friend') {
    var newEmail = {
        subject: subject,
        body: body,
        isRead: false,
        sentAt: sentAt,
        adress: adress,
        sender: sender
    }
    emails.push(newEmail)
}

function getEmails() {
    return Promise.resolve(emails);
}

// function getById(carId){
//     const car = cars.find(car => car.id === carId)
//     return Promise.resolve(car)
// }


// function saveCar(car) {
//     if (car.id) return _updateCar(car)
//     else return _addCar(car);
// }

// function _addCar(car) {
//     car.id = utilService.makeId()
//     cars.unshift(car);
//     storageService.store(KEY, cars)
//     return Promise.resolve(car)
// } 
// function _updateCar(car) {
//     const idx = cars.findIndex(currCar => currCar.id === car.id);

//     //This is Vue PITFALL - it is not REACTIVE
//     // cars[idx] = car;

//     cars.splice(idx, 1, car)
//     storageService.store(KEY, cars)
//     return Promise.resolve(car)
// } 


// function removeCar(carId) {
//     const idx = cars.findIndex(car => car.id === carId)
//     if(idx === -1) return Promise.reject('DID NOT REMOVE CAR')
//     cars.splice(idx, 1);
//     storageService.store(KEY, cars)
//     return Promise.resolve('CAR REMOVED')
// }


// function getEmptyCar() {
//     var emptyCar =  {
//         vendor: '',
//         color: '#ff0000',
//         speed: 20,
//         createdAt : '',
//         isAuto : true,
//         ownershipType : '',
//         seatsCount : 5,
//         desc: '',
//         features: []
//     }
//     return emptyCar;
// }

// function getNextPrevCarIds(carId) {
//     const idx = cars.findIndex(car => car.id === carId)

//     var nextIdx = idx + 1;
//     if (nextIdx === cars.length) nextIdx = 0; 
//     var prevIdx = idx - 1;
//     if (prevIdx < 0) prevIdx = cars.length-1; 

//     return {
//         prevId: cars[prevIdx].id,
//         nextId: cars[nextIdx].id,
//     }
// }

// // CRUDL - Create, Read, Update, Delete, List
export const emailService = {
    getEmails,
    createEmail,
    // getById,
    // saveCar,
    // removeCar,
    // getEmptyCar,
    // getNextPrevCarIds
}