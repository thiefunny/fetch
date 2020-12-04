import * as THREE from 'three';

const scene = new THREE.Scene();

const GOOGLE_API_KEY = 'AIzaSyB7bKIAvkdmBtJrWh9GgNQkeL-ChFCf58c'
const GOOGLE_SHEET_ID =`1ierEhD6gcq51HAm433knjnVwey4ZE5DCnu1bW7PRG3E`
const GOOGLE_SHEET_RANGE = `Wzrost!B3:B100`
const URL = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${GOOGLE_SHEET_RANGE}?key=${GOOGLE_API_KEY}`


fetch(URL)
.then(resolve => resolve.json())
.then(resolve => console.log(resolve))

