import { empleadoModel } from "../Models/empleados.model.js";

const test = ()=> {
    console.log('LLamando al controlador desde empleados')
}

empleadoModel.create({
    name:"Jair",
    apepat:"Benitez",
    apemat:"Gutierrez",
    age: 21
})
export default test;