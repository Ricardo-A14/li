
const palabrasAr = [

    `yo`, `tú`, `él`, `ella`, `nosotros`, `ellos`, `despertarse`, `despertar`, `tener`, `hacer`, `tomar`, `luego`, `día`,
    `temprano`, `tarde`, `cada`, `ducha`, `mi`, `desayuno`, `huevos`, `café`, `chocolate`, `pan`, `naranja`, `jugo`, `galleta`,
    `y`, `estudiar`, `desde`, `a`, `de`, `almuerzo`, `alimento`, `carne`, `pollo`, `gaseosa`, `arróz`, `un`, `hasta`, `entrenar`,
    `boxeo`, `escalar`, `nadar`, `correr`, `pelear`, `nuevamente`, `cena`, `mirar`, `ver`, `jugar`, `video`, `juego`, `ir`, `dormir`,
    `gustar`, `tiempo`, `con`, `familia`, `amigos`, `veces`, `campamento`, `acampar`, `en`, `noche`
];


const palabras = {

    yo: `i`,
    "tú": `you`,
    "él": `he`,
    ella: `she`,
    nosotros: `we`,
    ellos: `they`,
    despertarse: `wake up`,
    despertar: `wake`,
    tener: `have`,
    hacer: `make - do`,
    tomar: `take - drink`,
    luego: `then - later -`,
    "día": `day`,
    temprano: `early`
}


const revisaPalabras = Object.keys(palabras).includes(`él`);
const numeroDePalabras = Object.keys(palabras).length;

console.log(`Palabra: ${revisaPalabras}`);
console.log(`Palabra en Español: ${numeroDePalabras}`);







