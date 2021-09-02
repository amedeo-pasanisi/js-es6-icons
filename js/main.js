/*
Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

const icons = [
    {name: 'cat',prefix: 'fa-',type: 'animal',family: 'fas'},
    {name: 'crow',prefix: 'fa-',type: 'animal',family: 'fas'},
    {name: 'dog',prefix: 'fa-',type: 'animal',family: 'fas'},
    {name: 'dove',prefix: 'fa-',type: 'animal',family: 'fas'},
    {name: 'dragon',prefix: 'fa-',type: 'animal',family: 'fas'},
    {name: 'horse',prefix: 'fa-',type: 'animal',family: 'fas'},
    {name: 'hippo',prefix: 'fa-',type: 'animal',family: 'fas'},
    {name: 'fish',prefix: 'fa-',type: 'animal',family: 'fas'},
    {name: 'carrot',prefix: 'fa-',type: 'vegetable',family: 'fas'},
    {name: 'apple-alt',prefix: 'fa-',type: 'vegetable',family: 'fas'},
    {name: 'lemon',prefix: 'fa-',type: 'vegetable',family: 'fas'},
    {name: 'pepper-hot',prefix: 'fa-',type: 'vegetable',family: 'fas'},
    {name: 'user-astronaut',prefix: 'fa-',type: 'user',family: 'fas'},
    {name: 'user-graduate',prefix: 'fa-',type: 'user',family: 'fas'},
    {name: 'user-ninja',prefix: 'fa-',type: 'user',family: 'fas'},
    {name: 'user-secret',prefix: 'fa-',type: 'user',family: 'fas'}
];
const colors = [
    "blue",
    "orange",
    "purple"
];

// MILESTONE 1 e 2
const coloredArray = colorIcons (icons, colors); // array "icons" con aggiunta ad ogni oggetto la chiave color
const cardsContainer = document.getElementById('cards');
print (coloredArray, cardsContainer);

// MILESTONE 3
const types = getTypes(coloredArray); // array che contiene i "type" degli oggetti nell'array "icons"
const select = document.getElementById('type');
printOptions(types, select)

select.onchange = function (element) {
    const filteredArray = filterValues (coloredArray, element.target.value); // array che contiene solo gli oggetti di "icons" con il "type" selezionato in "select"
    print (filteredArray, cardsContainer)
}
// FINE PARTE LOGICA


// FUNZIONI
function printOptions (array, container) {
    array.forEach((element) => {
        container.innerHTML +=
        `<option value="${element}">${element}</option>`
    })
}

function filterValues (array, type) {
    // creo un array "filteredIcons"
    const filteredArray = array.filter((element) => {
        // pusho in "filteredIcons" solo gli elementi con type uguale a quello del parametro inserito nella funzione
        if (element.type === type) {
            return true;
        }
        return false;
    });
    if (type === "all") {
        return array;
    }
    return filteredArray
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
    // ricavo un array con i types attraverso la funzione "getTypes"
    const types = getTypes(array);
    // creo un "coloredArray" 
    const coloredArray = array.map((element) => {
        // per ogni elemento dell'array ricavo l'indice (0,1 o 2) del "type" all'interno dell'array "types"
        const indexType = types.indexOf(element.type);
        // per ogni elemento dell'array creo una chiave "colore" con il relativo colore assegnato grazie ad "indexType"
        element.color = colors[indexType];
        return element;
    })
    return coloredArray;
}