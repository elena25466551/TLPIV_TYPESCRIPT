export function contaparimpar(){
    const numrinf = 10;
    const numsup = 20;
   
   // let array=[1,2,3,4,5,6,7,8,9,10]
    let numerosPares=[]
    let numerosImpares=[]
       
   for (let i = numrinf; i <= numsup; i++) {
       
           if (i % 2 === 0) {
               numerosPares.push(i);
           } else {
               numerosImpares.push(i) 
           }
       }
       
      console.log("La cantidad de pares es:",numerosPares.length);
      console.log("Los numeros pares son :",numerosPares);
       console.log("La cantidad de impares es: ",numerosImpares.length);
       console.log("Los numeros impares son: ",numerosImpares);
       
}