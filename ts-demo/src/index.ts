console.log("hola Typescript")

// declaracion de variables

var nombre: string = "Rocio";

console.log("hola " + nombre);
console.log("¿Que tal, ", nombre, "?")
console.log(`¿Como han ido las vacaciones, ${nombre}?`);


let email: string = "rocio@imaginagroup.com"; // varible local
console.log(`Email de ${nombre} es ${email}`)

const PI: number = 3.1416

var apellidos: any = "San Jose" // Typo Any permite que la varible pueda cambiar de string a number o boolean
apellidos = 3;

var error: boolean = true;

console.log(`Hay error?: ${error}`)

//instancia multiple de variables

let a: string, b: boolean, c: number;

a = "Typescript"
b = true
c = 2022

let listaTareas: string[] = ["Tarea 1", "Tarea 2"]

let valores: (string | number | boolean)[] = [false, "Hola", true, 56]

enum Estados {
    "Completado",
    "Incompleto",
    "Pendiente"
}
enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let estado: Estados = Estados.Completado
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}
console.log(`Tarea: ${tarea1.nombre}`)

type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 45000,
    anio: 2010
}
console.log(`Coche: ${coche.nombre}`)

if (coche.anio < 2010) {
    console.log(`Coche: ${coche.nombre} es viejo`)
} else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`)
} else {
    console.log(`Coche: ${coche.nombre} es nuevo`)
}

switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea esta completa")
        break;
    case Estados.Incompleto:
        console.log("La tarea esta incompleta")
        break;
    case Estados.Pendiente:
        console.log("La tarea esta pendiente")
        break;
    default:
        break;
}

let listaTareasNuevas: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completado,
        urgencia: 15
    }
]

//For Clasico
for (let index = 0; index < listaTareasNuevas.length; index++) {
    const tarea = listaTareasNuevas[index];
    console.log(`${index} - ${tarea.nombre}`)
}

//Foreach

listaTareasNuevas.forEach((tarea: Tarea, index: number) => {
    console.log(`${index} - ${tarea.nombre}`)
})

/* 
solo sirve para objetos
for (const key in tarea1) {
    if (Object.prototype.hasOwnProperty.call(tarea1, key)) {
        const element = tarea1[key];
        
    }
} */

while (tarea1.estado != Estados.Completado) {
    if (tarea1.urgencia == 5) {
        tarea1.estado = Estados.Completado
        break;
    } else {
        
    }
}

do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completado
} while (tarea1.estado != Estados.Completado);

let miTarea ={
    titulo:"Mi tarea",
    estados:Estados.Completado,
    urgencia:1
}

let miTitulo = miTarea.titulo;
let miEstados = miTarea.estados;
let miUrgencia = miTarea.urgencia;

//Spred operator

//En Variables
let {titulo,estados,urgencia} = miTarea;

//En listas
let listaCompraLunes:string[] = ["Leche","Patatas"]
let listaCompraMartes:string[] = [...listaCompraLunes,"Pan","huevos"]
/* let listaCompraMiercoles:boolean[] = [false] */
let listaCompraMiercoles:string[] = ["Carne","Pescado"]
let listaCompraSemana:string[] = [...listaCompraLunes,...listaCompraMiercoles]

//En Objetos
let estadoApp = {
    usuario:"admin",
    session:3,
    jwt:"Bear12345"
}

let nuevoEstado = {
    ...estadoApp,
    session:4
}

//Funciones
function saludar() {
    let nombre:string = "Rocio"
    console.log(`Hola ${nombre}`)   
}
saludar()

function saludarPersona(nombre:any){
    console.log(`Hola ${nombre}!`);
}

saludarPersona("Rocio")

function despedirPersona(nombre: string = "Pepe"){
    console.log(`Adios ${nombre}`)
}

function despedidaOpcional(nombre?:string){
    if(nombre){
        console.log(`Adios ${nombre}`)
    }else{
        console.log("Adios")
    }
}

function variosParams(nombre:string,apellido?:string,edad:number=18){
    if(apellido){
        console.log(`${nombre} ${apellido} tiene ${edad} años`)
    }else{
        console.log(`${nombre} tiene ${edad} años`)
    }
}

//Sobrecarga de funciones

//Funciones asincronicas

//Funciones generadoras