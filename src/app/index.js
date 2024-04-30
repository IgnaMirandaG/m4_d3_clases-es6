import "./index.css";
import Cliente from "./clases/Cliente.js";
import Impuesto from "./clases/Impuesto.js";


let impuesto1 = new Impuesto(1000000000, 5000);
let cliente1 = new Cliente('Pedro', impuesto1);
console.log(cliente1.calcularImpuesto());

