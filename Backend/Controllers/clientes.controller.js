import { clientesModel } from "../Models/clientes.model.js";

const test = ()=> {
    console.log('LLamando al controlador desde empleados')
}

clientesModel.create({
    name:"Pedrito",
    apepat:"Perez",
    apemat:"MArtinez",
    age: 23,
    calle: "Lomas",
    email:"P@gmal",
    phone: 449495969
    
})
export default test;