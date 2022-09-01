/* Este es el ejemplo anterior de los sandwich, que usaré de referencia para hacer las pizzas jejej

function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);
*/

function pizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes){
    var pizza ={};
    pizza.tipoCorteza = tipoCorteza; 
    pizza.tipoSalsa = tipoSalsa; 
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}

//Primera pizza que piden en el desafío
var EspecialDojo = pizzaOven ("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(EspecialDojo);

//Segunda Pizza que piden en el desafío
var  DojoVeggie = pizzaOven ("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(DojoVeggie);

//Tercera y cuarta pizza que yo quiera

var DojoCarolina = pizzaOven ("a la piedra", "pomodoro", ["mozzarella"], ["tomate", "rúcula", "pepperoni"]);
console.log(DojoCarolina);

var DojoAndrea = pizzaOven ("rellena de queso", "bechamel", ["mozzarella"], ["pollo", "espinaca", "choclo"]);
console.log (DojoAndrea);

//Usando Math.random()
var opcionesPizza = {
    "corteza": ["a la piedra", "delgada", "gruesa", "rellena de queso"],
    "salsa":  ["pomodoro", "bechamel", "barbecue"],
    "quesos": ["mozzarella", "feta", "cuatro quesos", "azul"],
    "vegetales": ["espinaca", "choclo", "aceitunas", "champiñones", "tomate"],
    "proteinas": ["pollo", "carne", "pepperoni","tocino", "jamon"],
    "funcion_pizza_random": function pizzaRandom(){
        console.log("Pizza con ingredientes aleatoreos=");
        console.log("Corteza: " + this.corteza[Math.floor(Math.random()*(this.corteza.length))]);
        console.log("Salsa: " + this.salsa[Math.floor(Math.random()*(this.salsa.length))]);
        console.log("Quesos: " + this.quesos[Math.floor(Math.random()*(this.quesos.length))]);
        console.log("Vegetales: " + this.vegetales[Math.floor(Math.random()*(this.vegetales.length))]);
        console.log("Proteinas: " + this.proteinas[Math.floor(Math.random()*(this.quesos.length))]);
    }
}
opcionesPizza.funcion_pizza_random();

/*debe existir una manera más práctica de refactorizar este codigo, pero por el momento lo dejaré así. */
