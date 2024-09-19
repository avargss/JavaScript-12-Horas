// Variable = Es un contenedor que guarda un valor.
//            Se comporta como si fuera el valor que contiene.

// 1. Declaracion   let x;
// 2. Asignacion    x = 100;
// Se puede poner como let x = 100;

let fullName = "Alejandro Vargas";
let age = 25;
let isStudent = true;

document.getElementById("p1").textContent = `Tu nombre es ${fullName}`;
document.getElementById("p2").textContent = `Tienes ${age} años`;
document.getElementById("p3").textContent = `Matriculado: ${isStudent}`;