"use strict";
let greetings = 'Hello Ayomide';
greetings.toLowerCase();
console.log(greetings);
let userId = 3333333.45;
let isUserLoggedIn = true;
let hero;
function getHero(hero) {
    return hero;
}
hero = getHero('Superman');
console.log(hero);
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(2));
const getHello = (name) => {
    return `Hello ${name}`;
};
const heros = [`Superman`, `Batman`, `Wonder Woman`];
heros.map(hero => {
    return `hero is ${hero}`;
}).forEach(heroMessage => console.log(heroMessage));
console.log(heros);
//# sourceMappingURL=variableMe.js.map