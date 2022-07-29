
const pizzas = [

    {
    id:1,
    nombre:"Mozarella",
    ingredientes: ["queso mozarella", "prepizza", "salsa"], 
    precio:500,

    },

    {
        id:2,
        nombre:"Napolitana",
        ingredientes: ["queso mozarella", "prepizza", "salsa", "tomates", "hojas de albahaca", "aceite de oliva"], 
        precio:1000,
    
    },

    {
        id:3,
        nombre:"Pepperoni",
        ingredientes: ["queso mozarella", "prepizza", "salsa", "pepperoni"], 
        precio:8000,
    

    },

    {
        id:4,
        nombre:"Paisana",
        ingredientes: ["queso mozarella", "prepizza", "salsa", "papas fritas", "huevos fritos","jamon"], 
        precio:1200,
    
    },

    {
        id:5,
        nombre:"Fugazzeta",
        ingredientes: ["queso mozarella", "prepizza", "salsa", "cebolla", "oregano"], 
        precio:700,
    
    },

    {
        id:6,
        nombre:"Margarita",
        ingredientes: ["queso mozarella", "prepizza", "salsa", "hojas de albahaca", "oregano", "aceite de oliva"], 
        precio:1000,
    
    },

    {
        id:7,
        nombre:"Cuatro quesos",
        ingredientes: ["queso mozarella", "prepizza", "salsa", "queso fontina", "queso gorgonzola", "queso parmesano"], 
        precio:950,
    
    },

]

const imprimirNumeroimpar = () =>
  pizzas.forEach((producto) => {
    if (producto.id % 2 == 1 ){
        console.log(`La pizza ${producto.nombre} cuyo ID es : ${producto.id}` )
    }
  }


);

// imprimirNombreimpar()

const imprimirPreciomenor = () =>
  pizzas.forEach((producto) => {
    if (producto.precio < 600 ){
        console.log(`La pizza ${producto.nombre} cuyo precio es : ${producto.precio} y es la más barata` )
    }
  }


);

// imprimirPreciomenor()


const imprimirNombres = () =>
  pizzas.forEach((producto) => {
    console.log   (`La pizzas disponibles son: ${producto.nombre}`   )             
    }


);


// imprimirNombres()


const imprimirPrecios = () =>
  pizzas.forEach((producto) => {
    console.log   (`El precio de la pizzas es: ${producto.precio}`   )             
    }


);

// imprimirPrecios()


const imprimirPreciosynombres = () =>
  pizzas.forEach((producto) => {
    console.log   (`El precio de la pizza ${producto.nombre} es: ${producto.precio}`   )             
    }


);

// imprimirPreciosynombres()