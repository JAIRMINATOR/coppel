import { productoModel } from "../Models/productos.model.js";

const test = ()=> {
    console.log('LLamando al controlador desde gerentes')
}

productoModel.create({
    name:"PC",
    price: "$9000.00",
    quantity: 63
    
})
export default test;