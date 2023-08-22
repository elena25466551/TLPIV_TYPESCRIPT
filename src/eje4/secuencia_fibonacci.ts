export function generarSecuenciaFibonacci() {
    const n = 5;
    const secuencia = [0, 1];  // Los primeros dos números de Fibonacci
    
    for (let i = 2; i < n; i++) {
        const nuevoNumero = secuencia[i - 1] + secuencia[i - 2];
        secuencia.push(nuevoNumero);
    }
    // const secuenciaFibonacci = generarSecuenciaFibonacci();
    console.log("Los primeros",n," números de la secuencia de Fibonacci son: ",secuencia);

    //return secuencia;
}

