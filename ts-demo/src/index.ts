import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils'

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

let miTarea = {
    titulo: "Mi tarea",
    estados: Estados.Completado,
    urgencia: 1
}

let miTitulo = miTarea.titulo;
let miEstados = miTarea.estados;
let miUrgencia = miTarea.urgencia;

//Spred operator

//En Variables
let { titulo, estados, urgencia } = miTarea;

//En listas
let listaCompraLunes: string[] = ["Leche", "Patatas"]
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "huevos"]
/* let listaCompraMiercoles:boolean[] = [false] */
let listaCompraMiercoles: string[] = ["Carne", "Pescado"]
let listaCompraSemana: string[] = [...listaCompraLunes, ...listaCompraMiercoles]

//En Objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bear12345"
}

let nuevoEstado = {
    ...estadoApp,
    session: 4
}

//Funciones
function saludar() {
    let nombre: string = "Rocio"
    console.log(`Hola ${nombre}`)
}
saludar()

function saludarPersona(nombre: any) {
    console.log(`Hola ${nombre}!`);
}

saludarPersona("Rocio")

function despedirPersona(nombre: string = "Pepe") {
    console.log(`Adios ${nombre}`)
}

function despedidaOpcional(nombre?: string) {
    if (nombre) {
        console.log(`Adios ${nombre}`)
    } else {
        console.log("Adios")
    }
}

function variosParams(nombre: string, apellido?: string, edad: number = 18) {
    if (apellido) {
        console.log(`${nombre} ${apellido} tiene ${edad} años`)
    } else {
        console.log(`${nombre} tiene ${edad} años`)
    }
}
variosParams("Martin")
variosParams("Martin", "San Jose")
variosParams("Martin", undefined, 30)
variosParams("Martin", "San Jose", 30)
variosParams(nombre = "Martin", apellidos = "San Jose", 30)

function ejemploVariosTipos(a: string | number) {
    if (typeof (a) === "string") {
        console.log("A es un string")
    } else if (typeof (a) === "number") {
        console.log("A es un numero")
    } else {
        console.log("A no es un string ni tampoco un number")
        throw Error("A no es un string ni un number");

    }
}

function ejemploReturn(nombre: string, apellidos: string) {
    return `${nombre} ${apellidos}`
}

ejemploReturn("Rocio", "Sanchez")

function ejemploMultipleParam(...nombres: string[]) {
    nombres?.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploMultipleParam("Martin", "Lucia", "Jose")
const lista = ["Alberto", "Cristian"]
ejemploMultipleParam(...lista)

function ejemploParamsList(nombres: string[]) {
    nombres?.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploParamsList(lista)

type Empleado = {
    nombre: string,
    apellido: string,
    edad: number
}

let empleado = {
    nombre: "Rocio",
    apellido: "Sanchez",
    edad: 20
}

const mostrarEmpleado = (empleado: Empleado) => `${empleado.nombre} tiene ${empleado.edad} años`

mostrarEmpleado(empleado)

const datosEmpleado = (empleado: Empleado): string => {
    if (empleado.edad > 70) {
        return `Empleado: ${empleado.nombre} esta en edad de jubilacion`
    } else {
        return `Empleado: ${empleado.nombre} esta en edad laboral`
    }
}

datosEmpleado(empleado);

const obtenerSalario = (empleado: Empleado, cobrar: () => void) => {
    if (empleado.edad > 70) {
        return
    } else {
        cobrar()
    }
}

const cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`)
}

obtenerSalario(empleado, () => 'Cobrar Rocio')

//Async function

async function ejemploAsync(): Promise<string> {
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
    console.log("Tarea completada")
    return "Completado"
}

ejemploAsync().then((res) => {
    console.log("Respuesta: ", res)
}).catch(error => { console.log("hay un error", error) }).finally(() => console.log("Todo ha terminado"))

function* ejemploGenerator() {
    // yield para emitir valores

    let index = 0;
    while (index < 5) {
        yield index++;
    }
}

let generadora = ejemploGenerator()
console.log(generadora.next().value)


function* watcher(valor: number) {
    yield valor;

    yield* worker(valor);

    yield valor + 10;
}
function* worker(valor: number) {
    yield valor + 1

    yield valor + 2

    yield valor + 3
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value)
console.log(generatorSaga.next().value)
console.log(generatorSaga.next().value)
console.log(generatorSaga.next().value)


function mostrarError(error: string) {
    console.log("Ha habido un error", error)
}

//lOCALSTORAGE

/* function guardarLocalStorage():void{
    AsyncLocalStorage.
} */

//Cookies

const cookieOptions = {
    name: "usuario", // string,
    value: "Rocio", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/path", // optional string,
};

setCookie(cookieOptions)

let cookieLeida = getCookieValue("usuario")

deleteCookie("usuario")

deleteAllCookies()

class Temporizador{
    public terminar?: (tiempo:number) => void;

    public empezar(): void{
        setTimeout(() => {
            if(!this.terminar) return;

            this.terminar(Date.now());
        }, 10000);
    }
}

const miTemporizador :Temporizador = new Temporizador();

miTemporizador.terminar = (tiempo: number) =>{
    console.log("Evento terminado en: ",tiempo)
}

miTemporizador.empezar();

delete miTemporizador.terminar;

