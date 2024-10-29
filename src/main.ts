// Bootcamp Modulo 3. Variables

// Grupos musicales

interface Grupo {
    nombre : string;
    año : number;
    activo : boolean;
    genero : string;
};

const generoPopRock = "🎵 Pop Rock";
const generoRock = "🎸 Rock";
const generoHardRock = " 🤘 Hard Rock";
const generoClasica = "🎼 Clásica";

const estilo = 'font-style: bold; font-size: 20px; background-color : green';

const grupo1 : Grupo = {
    nombre : "The Beatles",
    año : 1960,
    activo : true,
    genero : generoPopRock 
};

const grupo2 : Grupo = {
    nombre : "Queen",
    año : 1970,
    activo : false,
    genero : generoRock 
};

const grupo3 : Grupo = {
    nombre : "AC DC",
    año : 1973,
    activo : true,
    genero : generoHardRock 
};

const grupo4 : Grupo = {
    nombre : "Ludwig van Beethoven",
    año : 1770,
    activo : false,
    genero : generoClasica 
};

const grupo5 : Grupo = {
    nombre : "The Rolling Stones",
    año : 1962,
    activo : true,
    genero : generoRock 
};

console.log(`%c${grupo1.nombre}`,estilo);
console.log( grupo1.año + '/Activo:' + grupo1.activo + '/' + grupo1.genero);

console.log(`%c${grupo2.nombre}`,estilo);
console.log( grupo2.año + '/Activo:' + grupo2.activo + '/' + grupo2.genero);

console.log(`%c${grupo3.nombre}`,estilo);
console.log( grupo3.año + '/Activo:' + grupo3.activo + '/' + grupo3.genero);

console.log(`%c${grupo4.nombre}`,estilo);
console.log( grupo4.año + '/Activo:' + grupo4.activo + '/' + grupo4.genero);

console.log(`%c${grupo5.nombre}`,estilo);
console.log( grupo5.año + '/Activo:' + grupo5.activo + '/' + grupo5.genero);
