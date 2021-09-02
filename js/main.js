const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];
// KEYS
// name: 'cat',
// prefix: 'fa-',
// type: 'animal',
// family: 'fas'

const colors = [
    "blue",
    "orange",
    "purple"
];
const cardsContainer = document.getElementById('cards');

print (icons, cardsContainer);

console.log (getTypes(icons));

// FUNZIONI

function print (array, container) {
    // svuoto il container
    container.innerHTML = "";

    // stampo una card dentro il container tante volte quanti sono gli elementi dentro l'array
    array.forEach((element) => {
        const {name, family, prefix, type} = element
    
        container.innerHTML +=
        `<div class="card">
            <i class="${family} ${prefix + name}"></i>
            <div class="nome">${name.toUpperCase()}</div>
        </div>`;
    });
}

function getTypes (array) {
    // creo un array "types"
    const types = [];

    // pusho in types solo le chiavi "type" degli elementi dell'array che già non sono state pushate
    array.forEach((element) => {
        if (!types.includes(element.type)) {
            types.push (element.type);
        }
    });
    return types;
}