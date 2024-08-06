import { gerenteModelo } from "../Models/gerente.model.js";

const test = ()=> {
    console.log('LLamando al controlador desde gerentes')
}

gerenteModelo.create({
    name:"JA",
    apepat:"MA",
    apemat:"PE",
    age: 34
    
})
export default test;