// gestion_datos.js

// ===========================
// TAREA 1 - OBJETO PRODUCTOS
// ===========================

const products = [
{
    id: 1,
    name: "ñame",
    price: 2500,
    category: "Verduras"
},
{
    id: 2,
    name: "potatoes",
    price: 500,
    category: "Verduras"
},
{
    id: 3,
    name: "sugar",
    price: 200,
    category: "Abarrotes"
}
];

// ===========================
// VALIDACIONES
// ===========================

console.log("VALIDANDO PRODUCTOS");

products.forEach(product => {

if(
    product.id > 0 &&
    product.name &&
    product.price > 0
){
    console.log(`Producto válido: ${product.name}`);
}
else{
    console.log("Producto inválido");
}

});

// ===========================
// RECORRER OBJETO
// FOR IN
// ===========================

console.log("LISTA PRODUCTOS");

products.forEach(product=>{

for(let key in product){
    console.log(`${key}: ${product[key]}`);
}

});


// ===========================
// OBJECT METHODS
// ===========================

console.log("Object.keys");

products.forEach(product=>{
console.log(Object.keys(product));
});

console.log("Object.values");

products.forEach(product=>{
console.log(Object.values(product));
});

console.log("Object.entries");

products.forEach(product=>{
console.log(Object.entries(product));
});


// ===========================
// TAREA 2 SET
// ===========================

const prices = [2500,2000,3000,4000,500,500];

const setprices = new Set(prices);

console.log("SET INICIAL");
console.log(setprices);

console.log("¿Existe 500?");
console.log(setprices.has(500));

setprices.add(1000);

setprices.delete(2000);

console.log("PRODUCTOS UNICOS");

// FOR OF
for(let value of setprices){

console.log(value);

}


// ===========================
// TAREA 3 MAP
// ===========================

const mapproduct = new Map();

products.forEach(product=>{

mapproduct.set(
product.category,
product.name
);

});

console.log("MAP");

// FOREACH
mapproduct.forEach((value,key)=>{

console.log(
`Categoria: ${key}
Producto: ${value}`
);

});


// ===========================
// PRUEBAS
// ===========================

console.log("OBJETO COMPLETO");
console.log(products);

console.log("SET COMPLETO");
console.log(setprices);

console.log("MAP COMPLETO");
console.log(mapproduct);