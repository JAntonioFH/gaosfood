class productos {
    constructor(categoria, nombre, descripcion, precio, imagen){
        this.categoria = categoria
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.imagen = imagen
    }
}


function cambioMenus(seleccion){
    document.getElementById("hamburguesas").style.display = "none"
    document.getElementById("sushi").style.display = "none"
    document.getElementById("ensaladas").style.display = "none"
    document.getElementById("snacks").style.display = "none"
    document.getElementById("bebidas-y-malteadas").style.display = "none"
    document.getElementById(seleccion).style.display = "block"
}
