let greetings: string = 'Hello Ayomide';

greetings.toLowerCase(); // hello ayomide
console.log(greetings); // Hello Ayomide

// number

let userId = 3333333.45;

// boolean
let isUserLoggedIn: boolean = true;


let hero: string;

function getHero(hero: string) {
    return hero;
}
hero = getHero('Superman');
console.log(hero); // Superman



function addTwo(num: number){
    return num + 2;
}

console.log(addTwo(2)); // 4

const getHello = (name: string): string => {
    return  `Hello ${name}`;
}

const heros = [`Superman`, `Batman`, `Wonder Woman`];

heros.map(hero => {
    return `hero is ${hero}`;
}).forEach(heroMessage => console.log(heroMessage));
console.log(heros); // [ 'Superman', 'Batman


function consoleError(errmsg: string): void {
    console.log(errmsg);
}


function handleError(errmsg: string): never {
    throw new Error(errmsg);
}