/*let nombre:string = "Nicolas";
nombre = "Fandiño";
console.log(nombre)

let numero:number = 23;
console.log(numero);

//objeto de dirrecion
type address = {
    city? : string;
    country? : string;
    ad: string;
}

//crear un objeto en typescript
type estudiante = {
    firstName: string;
    lastName: string;
    //tipos union
    age?: number | string;
    address? : address;
}

const e1 : estudiante = {
    firstName : "Carlos",
    lastName : "Rodriguez",
    age : 34,
    address : {
        city : "Bogota",
        country : "Colombia",
        ad: "Calle 52 #13 - 65"
    }

}

//funcion para mostrar informacion del estudiante

const mostrarEstudiante = 
(estudiante: estudiante): string => {
    const { firstName , lastName  } = estudiante;
    return `Nombre de estudiante: ${ firstName } 
            apellido: ${ lastName }`;
}

console.log(mostrarEstudiante(e1));

//ARREGLOS
//crear un arreglo de estudiante:

*/

type Estudiante = {
    firstName: string;
    lastName: string;
    //tipos union
    age?: number | string;
}
const eliminarEstudiante = ( indice: number) =>{
    estudiantes.splice(indice ,1)
}

let estudiantes: Estudiante[] = []
const agregarEstudiante = (estudiante: Estudiante)=>{
    estudiantes.push(estudiante)
}

agregarEstudiante ({
    firstName: "Carlos",
    lastName: "Ortega"
})

agregarEstudiante ({
    firstName: "Ana Maria",
    lastName: "Beltran"
})

eliminarEstudiante(0);
console.log(estudiantes);


