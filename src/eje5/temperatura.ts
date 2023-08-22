
export function cambiotemperatura(){
    let gradosCelsius :any =prompt("Ingrese los grados Celsius")

    let convertirGrados= (parseInt(gradosCelsius) - 32) * 5 / 9
    console.log(convertirGrados)

    let gradosfahrenheit :any =prompt("Ingrese los grados Fahrenheit")
    let convertirtemperatura = (parseInt(gradosfahrenheit)*9 )/5 +32

    console.log(convertirtemperatura)
}


