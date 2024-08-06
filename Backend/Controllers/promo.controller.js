import { promoModel } from "../Models/promo.model.js";

const test = ()=> {
    console.log('LLamando al controlador desde gerentes')
}

promoModel.create({
    name:"PC",
    sale_on: "sale $8000.00",
    quantity: 63,
    promo: "De oferton por tiempo limitado compra ya "
    
})
export default test;