//Cree un bucle for en JS que imprima cada nombre en esta lista:
const miLista = ['velma', 'exploradora', 'jane', 'john', 'harry'];

for (item in miLista){
    console.log(miLista[item]);
}

console.log('');

//Cree un bucle while que recorra la misma lista y también imprima los nombres.
let cont = 0;
while (cont < miLista.length){
    console.log(miLista[cont++]);
}

console.log('');

//Cree una función de flecha que devuelva "Hola mundo".
const foo = () => {
    console.log('Hola mundo');
}

foo();