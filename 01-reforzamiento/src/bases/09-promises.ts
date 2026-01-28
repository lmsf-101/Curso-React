// Ejemplo de Promesa
const miPromesa = new Promise((resolve, reject) => {
  console.log("Realizando promesa...");
  setTimeout(() => {
    resolve("Exito!");
    // reject("Fracaso!");
  }, 1500);
});

miPromesa.then(
  (mensaje) => {
    console.log(`OUTPUT : ${mensaje}`);
  }
).catch(
  (razon) => {
    console.warn(`OUTPUT: ${razon}`);
  }
).finally(() => {
    console.log("Esta linea siempre se imprime al finalizar");
});
