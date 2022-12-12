 
let arregloProductos=[]
let imprimirHamburguesas
const hamburguesas = document.getElementById("hamburguesas")
const sushi = document.getElementById("sushi")
const ensaladas = document.getElementById("ensaladas")
const snacks = document.getElementById("snacks")
const bebidasYMalteadas = document.getElementById("bebidasYMalteadas")
class Producto {
    constructor(categoria, id, nombre, descripcion, precio, imagen){
        this.categoria = categoria
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.imagen = imagen
        this.id = id
    }
}
// Lista de hamburguesas
let hamburguesaClasica = new Producto("hamburguesas",1, "Hamburguesa clásica","Carne selecta de la casa, queso oaxaca, queso amarillo, tocino, jitomate, lechuga, cebolla, pepino, manzana y guarnición.",85,"./assets/hamburguesa.png")

let hamburguesaGuacamole = new Producto("hamburguesas",2,"Hamburguesa guacamole", "Carne selecta de la casa, queso oaxaca, queso amarillo, tocino, lechuga, jitomate, pepino, cebolla, manzana, guacamole especial y guarnicion. ", 95, "./assets/hamburguesa.png")
let hamburguesaHawaiana = new Producto("hamburguesas",3,"Hamburguesa Hawaiana","Carne selecta de la casa, queso oaxaca, queso amarillo, tocino, jamon, lechuga, piña, jitomate, cebolla, pepino y guarnición. ",95,"./assets/hamburguesa.png")
let hamburguesaCaramelizada = new Producto("hamburguesas",4,"Hamburguesa caramelizada ","Carne selecta de la casa, queso manchego, queso oaxaca, tocino, BBQ, jitomate, lechuga, cebolla, pepino y guarnición.",95,"./assets/hamburguesa.png")
let hamburguesaChicken = new Producto("hamburguesas",5,"Hamburguesa chicken ","Pechuga de pollo rebozada, espinaca, jitomate, manzana, pepino, arándano, cebolla, almendra, guacamole especial y guarnicion.",90,"./assets/hamburguesa.png")
let hamburguesaEspanola = new Producto("hamburguesas",6,"Hamburguesa tipo española","Carne selecta de la casa rellena de queso philadelphia, queso manchego, jamón serrano, tocino, lechuga, jitomate, cebolla, pepino, manzana y guarnición. ",110,"./assets/hamburguesa.png")
let hamburguesaGuacaiana = new Producto("hamburguesas",7,"Hamburguesa guacaiana ","Carne selecta de la casa, queso oaxaca, queso amarillo, tocino, lechuga, jitomate, pepino, piña, guacamole y guarnición ",110,"./assets/hamburguesa.png")
let hamburguesaChickenBufalo = new Producto("hamburguesas",8,"Hamburguesa chicken búfalo","Pechuga de pollo empanizada y bañada en salsa búfalo, tocino, lechuga, queso manchego, jitomate, pepino y aderezo ranchi ",95,"./assets/hamburguesa.png")
let hamburguesaTierraMar = new Producto("hamburguesas",9,"Hamburguesa tierra-mar","Carne selecta de la casa, camarón empanizado, queso oaxaca, tocino, jitomate, pepino, manzana, guacamole especial y guarnicion. ",110,"./assets/hamburguesa.png")
let hamburguesaOnionRings = new Producto("hamburguesas",10,"Hamburguesa onion rings ","Carne selecta de la casa, mermelada de tocino, queso amarillo, queso oaxaca, aros de cebolla empanizados y guarnición. ",95,"./assets/hamburguesa.png")
let hamburguesaDoble = new Producto("hamburguesas",11,"Hamburguesa doble ","Doble porción de carne selecta de la casa, queso oaxaca, queso amarillo, tocino, piña, lechuga, jitomate, pepino, manzana y guarnición. ",110,"./assets/hamburguesa.png")
let hamburguesaChickenRes = new Producto("hamburguesas",12,"Hamburguesa chicken res","Carne selecta de la casa, pechuga de pollo empanizada bañada de salsas bufalo, bbq y ranch, queso oaxacam queso amarillo, lechuga, jitomate, pepiuno y guarnición.",115,"./assets/hamburguesa.png")
let hamburguesaGaos = new Producto("hamburguesas",13,"Hamburguesa Gao´s food","Carne selecta de la casa, pechuga de pollo empanizada bañada de salsas bufalo, bbq y ranch, queso oaxaca, queso amarillo, lechuga, jitomate, pepino y guarnición. ",100,"./assets/hamburguesa.png")
//Lista de sushi
let makiCocoMango = new Producto("sushi",14,"Maki coco Mango","Mango, queso crema, pepino, zanahoria, camarón a la mantequilla y rebozado de panko con coco ralado.",94,"./assets/maki.png")
let mexicanMaki = new Producto("sushi",15,"Mexican maki","Bistec de res, espinaca, pepino, queso manchego, chile toreado, aguacate y rebozado de panko.",90,"./assets/maki.png")
let tierraMarMaki = new Producto("sushi",16,"Tierra-mar maki ","Bistec de res, camarón, espinaca, aguacate, queso manchego, pepino y rebozado de panko. ",98,"./assets/maki.png")
let rolloTampico = new Producto("sushi",17,"Rollo tampico","Camarón a la mantequilla, queso crema, pepino, aguacate, rebozado de panko y toppong de tampíco.",98,"./assets/maki.png")
let aguacateRoll = new Producto("sushi",18,"Aguacate roll","Salmon cocido, camarón, queso cfrema, pepino, aguacate, zanahoria, más aguacate por fuera, teriyaki y aderezo chipotle.",100,"./assets/maki.png")
let manchegoRoll = new Producto("sushi",19,"Manchego roll","Carne de res, queso manchego, queso crema, pepino, pimiento morrón, aguacate, rebozado con panko y gratinado con queso manchego y aderezo de maní.",95,"./assets/maki.png")
let bbqChickenRoll = new Producto("sushi",20,"BBQ-chicken roll","Pechuga de pollo, queso crema, queso manchego, pepino, tocino, rebozado de panko y cobertura de salsa BBQ.",93,"./assets/maki.png")
let platanoRoll = new Producto("sushi",21,"Platano roll","Salmon, queso crema, aguacate, pepino, zanahoria, espinaca y por fuera plátano macho.",90,"./assets/maki.png")
let makiKanikama = new Producto("sushi",22,"Maki kanikama","Camarón empanizado con panko, aguacate, pepino, queso crema y topping de kanikama.",110,"./assets/maki.png")
let rolloSalmon = new Producto("sushi",23,"Rollo salmón","Salcom ahumado por fuera y por dentro zanahoria, salmón, pepino, queso crema y aguacate.",110,"./assets/maki.png")
let spicyTunaRoll = new Producto("sushi",24,"Spicy tuna roll","Queso crema, pepino, aguacate, zanahoria con topping de lomo de atún con salsa spicy.",113,"./assets/maki.png")
//lista de ensaladas
let ensaladaDeCamaron = new Producto("ensaladas",25,"Ensalada de camarón","Mézclum de lechuga con espinaca, camarón, queso manchego, manzana roja, coco rallado, mango, pepino, nuez y vinagreta de la casa.",`$85
<p>1/2 orden $50</p>`,"./assets/ensalada.png")
let ensaladaDeFrutosRojos = new Producto("ensaladas",26,"Ensalada de frutos rojos","Mézclum de lechuga, frutos rojos de temporada, queso de cabra, jamón serrano, nuez, arándano, manzana roja, amaranto y vinagreta de la casa.",`$85
<p>1/2 orden $50</p>`,"./assets/ensalada.png")
let ensaladaPolloKrispy = new Producto("ensaladas",27,"Ensalada pollo krispy","Mézclum de lechuga, pechuga de pollo empanizada, manzana roja, zanahorita, pepino, almendra, aguacate, queso panela y vinagreta de la casa.",`$85
<p>1/2 orden $50</p>`,"./assets/ensalada.png")
let ensaladaChicken = new Producto("ensaladas",28,"Ensalada chicken","Mézclum de lechuga con espinaca, pechuga a la planca, jamón, queso panela, arándanos, aguacate, almendra, fruta de temporada.",`$85
<p>1/2 orden $50</p>`,"./assets/ensalada.png")
//lista scacks
let arosDeCebolla = new Producto("snacks",29,"Orden de aros de cebolla ","",47,"./assets/snacks.png")
let dedosDequeso = new Producto("snacks",30,"Orden de dedos de queso ","",57,"./assets/snacks.png")
let papas = new Producto("snacks",31,"Orden de papas ","",44,"./assets/snacks.png")
let papasGaosFood = new Producto("snacks",32,"Papas Gao´s food ","Papas fritas, tocino, salsa de queso y carne de res",59,"./assets/snacks.png")
let sushiBallsNoEmpanizadas = new Producto("snacks",33,"Sushi balls sin empanizar ","Camaron, res o salmon y queso crema. ",78,"./assets/snacks.png")
let sushiBallsEmpanizadas = new Producto("snacks",34,"Sushi balls empanizadas","Camaron, res o salmon y queso crema.",88,"./assets/snacks.png")
//lista bebidas
let limonadaPepinoYchia = new Producto("bebidasYMalteadas",35,"Limonada de pepino y chía ","",32,"./assets/bebidas.png")
let naranjadaFrutosRojosYChia = new Producto("bebidasYMalteadas",36,"Naranjada frutos rojos y chía ","",32,"./assets/bebidas.png")
let cocaColaYFrescaDeLata = new Producto("bebidasYMalteadas",37,"Coca cola y fresca de lata","",19,"./assets/bebidas.png")
let malteadaDeChocolate = new Producto("bebidasYMalteadas",38,"Malteada de chocolate ","",50,"./assets/bebidas.png")
let malteadaDeFresa = new Producto("bebidasYMalteadas",39,"Malteada de fresa ","",50,"./assets/bebidas.png")
let malteadaDeMatcha = new Producto("bebidasYMalteadas",40,"Malteada de matcha ","",59,"./assets/bebidas.png")
let malteadaOreo = new Producto("bebidasYMalteadas",41,"Malteada oreo","",57,"./assets/bebidas.png")
let malteadaBaileys = new Producto("bebidasYMalteadas",42,"Malteada baileys ","",59,"./assets/bebidas.png")
let malteadaMazapan = new Producto("bebidasYMalteadas",43,"Malteada mazapán","",59,"./assets/bebidas.png")
let malteadaVainilla = new Producto("bebidasYMalteadas",44,"Malteada de vainilla","",50,"./assets/bebidas.png")

arregloProductos.push(hamburguesaClasica,hamburguesaGuacamole,hamburguesaHawaiana,hamburguesaCaramelizada,hamburguesaChicken,hamburguesaEspanola,hamburguesaGuacaiana,hamburguesaChickenBufalo,hamburguesaTierraMar,hamburguesaOnionRings,hamburguesaDoble,hamburguesaChickenRes,hamburguesaGaos,makiCocoMango,mexicanMaki,tierraMarMaki,rolloTampico,aguacateRoll,manchegoRoll,bbqChickenRoll,platanoRoll,makiKanikama,rolloSalmon,spicyTunaRoll,ensaladaDeCamaron,ensaladaDeFrutosRojos,ensaladaPolloKrispy,ensaladaChicken,arosDeCebolla,dedosDequeso,papas,papasGaosFood,sushiBallsNoEmpanizadas,sushiBallsEmpanizadas,limonadaPepinoYchia,naranjadaFrutosRojosYChia,cocaColaYFrescaDeLata,malteadaDeChocolate,malteadaDeFresa,malteadaDeMatcha,malteadaOreo,malteadaBaileys,malteadaMazapan,malteadaVainilla)

function horariosDeServicio(){
    let today = new Date()
    let dia = today.getDay() 
    if (dia == 50 ) {
        document.getElementById("div-principal").style.display = "none"
    }
    mostrarProductos()
}



function cambioMenus(seleccion){
    hamburguesas.style.display = "none"
    sushi.style.display = "none"
    ensaladas.style.display = "none"
    snacks.style.display = "none"
    bebidasYMalteadas.style.display = "none"
    document.getElementById(seleccion).style.display = "block"
}
function mostrarProductos(){
    arregloProductos.forEach((producto) => {
        imprimirHamburguesas = `                     
            <div class="productos">
                <div>
                    <div class="nombre-del-producto">
                        ${producto.nombre}
                    </div>
                    <div class="descripcion-del-producto">
                        ${producto.descripcion}
                    </div>
                </div>
                <div class="precio">
                    $${producto.precio}
                </div>
                <div class="contenedor-imagenes">
                    <div class="modal-container">
                       <img class="imagen-producto" src="${producto.imagen}"/>
                    </div>
                </div>
            </div>`
        if (producto.categoria=="hamburguesas") {
            hamburguesas.innerHTML += imprimirHamburguesas
        }else if(producto.categoria=="sushi"){
            sushi.innerHTML += imprimirHamburguesas
        }else if(producto.categoria=="ensaladas"){
            ensaladas.innerHTML += imprimirHamburguesas
        }else if(producto.categoria=="snacks"){
            snacks.innerHTML += imprimirHamburguesas
        }else if(producto.categoria=="bebidasYMalteadas"){
            bebidasYMalteadas.innerHTML += imprimirHamburguesas
        }
    
    })
}
horariosDeServicio()


document.querySelectorAll(".modal-container img").forEach(el=>{
    el.addEventListener("click", function(ev){
        ev.stopPropagation()
        this.parentNode.classList.add("active")
        this.classList.add("active")
    })
})

document.querySelectorAll(".modal-container").forEach(el=>{
    el.addEventListener("click", function(ev){
        this.classList.remove("active")
        this.firstElementChild.classList.remove("active")
    })
})


