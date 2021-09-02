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

const coloredArray = colorIcons (icons, colors);
print (coloredArray, cardsContainer);

const types = getTypes(coloredArray);
const select = document.getElementById('type');
printOptions(types, select)

// FUNZIONI

function printOptions (array, container) {
    array.forEach((element) => {
        container.innerHTML +=
        `<option value="${element}">${element}</option>`
    })
}

function print (array, container) {
    // svuoto il container
    container.innerHTML = "";

    // stampo una card dentro il container tante volte quanti sono gli elementi dentro l'array
    array.forEach((element) => {
        const {name, family, prefix, color} = element;
    
        container.innerHTML +=
        `<div class="card">
            <i class="${family} ${prefix + name}" style="color: ${color}"></i>
            <div class="nome">${name.toUpperCase()}</div>
        </div>`;
    });
}

function getTypes (array) {
    // creo un array "types"
    const types = [];
    
    // pusho in types solo le chiavi "type" degli elementi dell'array che già non sono state pushate
    array.forEach((element) => {
        // per ogni elemento dell'array ricavo la variabile type
        const {type} = element;

        if (!types.includes(type)) {
            types.push (type);
        }
    });
    return types;
}

function colorIcons (array, colors) {
    // creo un "coloredArray"
    const coloredArray = array.map((element) => {
        // per ogni elemento dell'array ricavo la variabile type
        const {type} = element;
        // per ogni elemento dell'array ricavo l'indice (0,1 o 2) del "type" all'interno dell'array "types" (creato con la funzione "getTypes")
        const indexType = getTypes(array).indexOf(type);
        // per ogni elemento dell'array creo una chiave "colore" con il relativo colore assegnato grazie ad "indexType"
        element.color = colors[indexType];
        return element;
    })
    return coloredArray;
}