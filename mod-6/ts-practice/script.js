import { KEY } from "./secret.js"

const BASE_URL = 'https://geo.ipify.org/api/v2/country'
const BASE_URL_ACC = 'https://geo.ipify.org/service/account-balance'
const BASE_URL_ADV = 'https://geo.ipify.org/api/v2/country,city,vpn'
const IP = '8.8.8.8'
const DOMAIN = 'stackoverflow.com'

let map = L.map('map').setView([51.505, -0.09], 13);

console.log(map)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// async function getGeoLocation(loc) {
//     const res = await fetch(`${BASE_URL_ADV}?apiKey=${KEY}&domain=${loc}`)
//     const data = await res.json()
//     console.log(data)

//     map.setView([data.location.lat, data.location.lng])
    
//     // const res2 = await fetch(`${BASE_URL_ACC}?apiKey=${KEY}`)
//     // const data2 = await res2.json()
//     // console.log(data2)
// }

// // const choice = prompt('Enter a website (ex: google.com):')

// if (choice) {
//     getGeoLocation(choice);
// }

