export function tablademultiplicar(){
    const factor = 10;
    let factorinferior=30;
    let factorsuperior=45;
    let producto=[];
    let cuenta;
    for (let i = factorinferior; i <= factorsuperior; i++) {
        console.log(cuenta," = ",factor, "*" ,i);
        cuenta= factor * i;
        producto.push(cuenta);

}
console.log(producto);
}