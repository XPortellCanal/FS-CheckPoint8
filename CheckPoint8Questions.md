## ¿Qué tipo de bucles hay en JS?

En JS existen dos estructuras principales para la realización de bucles, los bucles `for` y los bucles `while` de los que existen variantes. Aunque ambos bucles pueden utilizarse indistintamente en la mayoría de situaciones, la diferencia principal es que el bucle `for` se ejecuta un numero definido de veces mientras que el bucle `while` se puede ejecutar un número indefinido de veces mientras se cumpla una condición.

### Bucle `for`

En el ejemplo siguiente se puede ver la estructura clásica del bucle `for`:

```javascript
var vehicles = [ 'car', 'motorbike', 'bicycle', 'train'];

for (var x =0; x < 4; x++){
    console.log(x + ' ' + vehicles[x]);
}
#output 
0 car
1 motorbike
2 bicycle
3 train
```

Como se aprecia en el ejemplo, el código entre claves se ejecuta un número  definido de veces, en este caso 4. Dentro del bucle debemos definir un iterador junto con su valor inicial (`var x = 0`), una condición (`x < 4`) y la variación del iterador a cada iteración, en este caso un incremento de una unidad (x++). En el ejemplo, el iterador va incrementando de valor una unidad, lo cual nos permite acceder a los distintos elementos de la lista `vehicles`. Es importante darse cuenta que los índices en JS empiezan en 0 y, por lo tanto, el primer elemento requiere del incide 0 y el cuarto elemento tiene el índice igual a 3. 

### Bucle `for…in`

Existe una variante más moderna del bucle `for`, denominada bucle `for...in`. Siguiendo esta sintaxis, el ejemplo anterior se escribiría de la siguiente manera:

```javascript
for (var vehicle in vehicles){
    console.log(vehicle + ' ' + vehicles[vehicle]);
}

#Output: 
0 car
1 motorbike
2 bicycle
3 train
```

Es importante recordar declarar el iterador mediante `let`, `var` o `const` para evitar crear variables no deseadas en el espacio global.

### Bucle `for…of`
Existe una estructura similar al bucle `for…in` denominada bucle `for…of`. Esta sintaxis está recomendada para realizar iteraciones en objetos iterables como, por ejemplo, un `String` o un `Array`. En este caso, el ejemplo anterior se escribiría de la siguiente manera:

```javascript
for (let vehicle of vehicles){
    console.log(vehicles.indexOf(vehicle) + ' ' + vehicle);
}

#Output: 
0 car
1 motorbike
2 bicycle
3 train
```
A diferencia del bucle `for…in`, el iterador toma directamente el valor de cada elemento y no en el índice que ocupa dicho elemento. Por tanto, para recuperar el índice del elemento, de ser requerido, es necesario usar el método `indexOf`. 

### Bucle `forEach`

En JS moderno se tiende a usar una programación funcional (basada en funciones) con lo cual se ha desarrollado el método `forEach`. Este, esencialmente, se trata de una encapsulación ("wrapper") de un bucle for. Reescribiendo el ejemplo anterior con esta sintaxis obtenemos:

```javascript
vehicles.forEach(function(vehicle) {
    console.log(vehicles.indexOf(vehicle) + ' ' + vehicle);
});

#Output:
0 car
1 motorbike
2 bicycle
3 train
```
### Bucle `While`

El bucle `while` consta de la palabra ‘while’ seguida de parentesis y llaves (ver ejemplo). Dentro del parentesis se escribe una condición (`x < vehicles.length` [^1] en el ejemplo). El código de ejecución, situado entre llaves, se ejecuta mientras la condición sea verdadera. En el ejemplo se usa un bucle `while` para iterar a través de los elementos del arreglo `vehicles`. Nótese que para conseguir el mismo comportamiento que con la estructura `for` debemos crear un iterador (`var x = 0`) antes del bucle y modificar manualmente dicho iterador dentro del bucle (`x++`).

```javascript
var x = 0;
while (x < vehicles.length) {
    console.log( x + ' ' + vehicles[x]);
    x++;
}

#Output:
0 car
1 motorbike
2 bicycle
3 train
```
[^1]: Nota: `vehicles.length` devuelve el número de elementos del arreglo, 4 en este caso.

### Bucle `do…While`

Existe una estructura parecida al bucle `while` denominada bucle `do …while`. La sintaxis es parecida pero con la palabra `do` al inicio y con la palabra `while` y el paréntesis después de las llaves: 

```javascript
var x = 0;
do {
    console.log( x + ' ' + vehicles[x]);
    x++;
} while (x < vehicles.length)
#Output:
0 car
1 motorbike
2 bicycle
3 train
```
La diferencia principal entre los bucles `while` y `do…while` es que este segundo realiza la comparación después de la ejecución del código lo cual implica que se garantiza que el código va a ejecutarse como mínimo una vez.

## ¿Cuáles son las diferencias entre const, let y var?

En JS, las declaraciones de parámetros o variables se realizan usando las palabras reservadas `var`, `let` o `const`. El uso de uno u otro tiene consecuencias en el ámbito (alcance), uso y proceso de hoisting de la variable o parámetro definido. 

### Declaracion `var`
Tradicionalmente, la declaración de variables y parámetros en JS se realizaba usando la declaración `var`. La variable creada con `var` puede cambiar de valor e, incluso, volver a declarase, como muestra el ejemplo siguiente:

```javascript
var greeting = "Hi there";
greeting = “Buenas”;
var greeting = “Nice to meet you”;
```
El ámbito de `var` puede ser *global* (disponible en toda la pantalla) cuando se declara fuera de un bloque definido por claves (`{ …}`) o *de función* si se declara dentro de una función. En el ejemplo se declara la variable `var greeting` en un ámbito global y en uno local. 

```javascript
var greeting = "Hi there";
function foo () {
    var greeting = "Buenas";
    console.log(greeting);
}

foo(); 

console.log(greeting); 

#Output: 
Buenas
Hi there
```

La problemática con `var` es debida a que su uso dentro de un bloque genera una variable de ámbito global, tal y como se muestra en el ejemplo siguiente:

```javascript
if (true) {
    var hola = "Buenas";
    console.log(hola);
}

console.log(hola);

#Output:
Buenas
Buenas
```

Esto implica que si dentro de un bloque creamos una variable sin darnos cuenta de que ya existía en el ámbito global, la variable global se ve modificada, tal y como pasa en el código siguiente:

```javascript
var hola = "Hi there";

if (true) {
    var hola = "Buenas";
    console.log(hola);
}

console.log(hola);

#Output:
Buenas
Buenas
```

Por lo que refiera al hoisting, las variables declaradas con `var` son movidas al inicio de su ámbito y inicializadas como `undefined`. Esto hace que el código siguiente se ejecute sin ningún error:

```javascript
console.log(greeting);

var greeting = "Hi there";

#Output:
undefined
```

### Declaración `let`

Para solucionar la problemática de `var` se creó la declaración `let`. A diferencia de las variables declaradas con `var`, las variables declaradas con `let` pueden cambiar de valor, pero no pueden volver a declararse en el mismo ámbito:

```javascript
let greeting = "Hi there";
greeting = “Buenas”;
let greeting = “Nice”; // ErrorSyntaxError: Identifier 'hola' has already been declared
```
El ámbito de `let` es estrictamente de bloque, con lo que se evita la problemática asociada al uso de `var`.  En el ejemplo se declara la variable `var greeting` en un ámbito global y en uno local. A diferencia de lo que sucedía con `var`, la variable existente en el ámbito global no se ve afectada por la redefinición en un ámbito local: 

```javascript
    let hola = "Hi there";
if (true) {
    let hola = "Buenas";
    console.log(hola);
}

console.log(hola);

#Output:
Buenas
Hi there
```
Por lo que refiera al hoisting, las variables declaradas con `let` son movidas al inicio de su ámbito, pero no inicializadas. Consiguientemente, el código siguiente genera un error:

```javascript
console.log(greeting);
let greeting = "Hi there"; // ReferenceError: Cannot access 'greeting' before initialization
```
### Declaración `const`

La declaración `const` comparte similitudes con la declaración `let` debido a que su ámbito de aplicación es también de bloque y a que comparten el mecanismo por el cual son movidas al inicio del bloque donde son declaradas sin ser inicializadas. Al igual que `let`, no se puede redefinir la misma variable, con lo cual el código siguiente devuelve un error:

```javascript
let greeting = "Hi there";
let greeting = “Nice”; // ErrorSyntaxError: Identifier 'hola' has already been declared
```
La característica distintiva de `const` y `let/var` es que una vez inicializadas, su valor es considerado una constante y no puede ser cambiado:

```javascript
let greeting = "Hi there";

greeting = “Buenas”;

console.log(greeting);

#Output:
Hi there
```

## ¿Qué es una función de flecha?

Una función de flecha es una alternativa simplificada a una expresión de función (o función anónima) donde se omite la palabra `function`. La sintaxis general de una expresión de flecha es la siguiente:

```javascript
(arg1, arg2, ...) => { expresion o bloque}
```
En caso de existir un único argumento, los paréntesis son opcionales. De igual modo, si el código de la función no ocupa múltiples líneas, pueden omitirse las llaves. Al igual que las funciones anónimas, las funciones de flecha pueden existir sin ser asignadas a una variable o ser asignadas a un nombre. 

El código siguiente es un ejemplo de una función de flecha guardada en una constante y sin argumentos:

```javascript
const greetings = () => console.log(“Hi there”);
greetings();

#Output:
Hi there
```

Como se puede apreciar, las llaves se han omitido puesto que el código de ejecución consta de una única expresión. Los ejemplos siguientes muestran la creación de una función de flecha con un único argumento y con dos argumentos. Nótese el uso de llaves y la omisión del paréntesis en la primera función: 

```javascript
const greetings1 = words => {
   console.log(words);
}
const greetings2 = (arg1, arg2) => {
   const sentence = `${arg1} ${arg2}`;
   return sentence;
}
console.log(greetings2('I am David.', 'Enjoy your day'));

#Output:
Have a nice day!
I am David. Enjoy your day
```

## ¿Qué es la deconstrucción de variables?

El termino deconstrucción de variables se refiere al mapeo simultaneo de varias variables entre los lados derecho e izquierdo del símbolo de asignación. Esto permite, por ejemplo, inicializar dos o mas variables ya declaradas al mismo tiempo. El código siguiente asigna los valores 3 y 90 a `numOne` y `numTwo`:

```javascript
let numOne, numTwo;
[numOne, numTwo] = [3, 90, 27];
console.log(numOne);
console.log(numTwo);

#Output:
3
90
``` 

Como se aprecia en el código anterior, el lado derecho y el lado izquierdo del símbolo igual deben estar envueltos por corchetes. Nótese también que el número de valores del lado derecho no tiene que coincidir necesariamente con los del lado izquierdo. 

La deconstrucción de variables tiene varios usos muy útiles. El primero de ellos es el intercambio de valores entre dos variables sin la necesidad de crear variables auxiliares:

```javascript
let numOne = 45;
let numTwo = 30;
 [numTwo, numOne] = [numOne, numTwo];
console.log(numOne);
console.log(numTwo);

#Output:
30
45
```

Otro uso es la asignación de componentes de un arreglo a varias variables, como se muestra a continuación:

```javascript
const ítems = [‘flower’, ‘Mike’, ‘Astra’ ];
const [nature, name, car] = ítems;
console.log (nature);
console.log (name);
console.log (car);

#Output:
flower
Mike
Astra
```

Esta técnica también puede usarse para mapear las claves de un objeto a las variables pasadas dentro de una función, como hace el ejemplo siguiente:

```javascript
const car = {
   brand: “Nissan”,
   model: “Patrol”
}
const carRender = ({brand, model}) => {
   console.log(`${brand} ${model}`);
}
carRender(car);

Output:
Nissan Patrol
```

Como se aprecia en el ejemplo, las claves identificadoras de las propiedades del objeto deben ponerse entre claves y con los mismos identificadores usados dentro del objeto. El paso de los identificadores mediante esta técnica permite usarlos directamente dentro del código de la función (`console.log` en el ejemplo). 

## ¿Qué hace el operador de extensión en JS?

En JS, los arreglos y los objetos se pasan por referencia y no por valor. Esto implica que si se crea un nuevo arreglo o objeto por asignación de otro arreglo, la modificación de uno de ellos implicara la modificación del otro. Para evitar esto, se puede usar el operador de extensión. Este operador consta de tres puntos seguidos (`…`) y permite copiar todo o parte de un arreglo u objeto. dentro de otro. El código siguiente muestra un ejemplo de esto:

```javascript
const numbers1 = [10, 32, 21];
const numbers2 = [15, 98];
const numbers3 = [...numbers1, ...numbers2];
numbers1.push(numbers2);
console.log(numbers1);
console.log(numbers3);

#Output:
[ 10, 32, 21, [ 15, 98 ] ]
[ 10, 32, 21, 15, 98 ]
```

Como se aprecia en el ejemplo anterior, puesto que los arreglos permiten almacenar diferentes tipos de datos, el uso del método `push` crea un arreglo formado por valores numéricos y otro arreglo. No obstante, usando el operador de extensión, podemos almacenar los elementos de dos arreglos existentes en un nuevo arreglo. 

El operador de extensión se usa a menudo en combinación con la deconstrucción de variables. Veamos un ejemplo:

```javascript
const arreglo = [10, 22, 34, 41, 57, 61];
const [primero, segundo, ...otros] = arreglo;
console.log(primero);
console.log(segundo);
console.log(otros);

#Output:
10
22
[ 10, 22, 34, 41, 57, 61 ]
```

En el ejemplo, el operador de extensión denota que queremos almacenar el resto de elementos no asignados de un arreglo en un nuevo arreglo denominado `otros`.

Además de los arreglos, el operador de extensión nos permite combinar objetos en un nuevo objetos. En este contexto, las propiedades que no son comunes se añaden al nuevo objeto, pero las propiedades que son comunes a ambos objetos son reescritas por las propiedades del ultimo objeto pasado (objeto de más a la derecha). Este comportamiento se puede apreciar en el ejemplo mostrado a continuación: 

 ```javascript
const objectOne = {
    wide: "10",
    high: "22"
}

const objectTwo = {
    wide: "15",
    depth: "36"
}

const newObject = {...objectOne, ...objectTwo};
console.log(newObject);

#Output:
{ wide: '15', high: '22', depth: '36' }
```

## ¿Qué es la programación orientada a objetos?

La programación orientada a objetos (POO) es un paradigma (estilo) de programación que se focaliza en dividir los diferentes componentes del sistema en objetos. Estos objetos tienen propiedades y pueden realizar acciones o funciones. Las propiedades corresponden a datos como, por ejemplo, valores numéricos, cadenas de caracteres, arreglos, etc. Las acciones se corresponden a funciones propias del objeto que permiten interactuar con los datos y con otros objetos y que se denominan *métodos*. 

La POO se basa en los conceptos de clase y objeto. Las clases representan un esquema de las propiedades y métodos que debe contener un objeto. Por ejemplo, un objeto de clase teléfono, puede tener una propiedad denominada número y una propiedad que defina su color. Los métodos de la clase deberán permitir recibir llamadas, realizar llamas y, por ejemplo, poner las llamadas en espera. 

Hay que tener presente que la clase no representa el objeto en si mismo. Para la obtención de un objeto debemos crear una *instancia* de la clase. Siguiendo con el ejemplo de la clase teléfono, en una casa es probable encontrar más de un teléfono, el del recibidor, el del despacho, etc. Siguiendo la lógica de la POO, una vez definida la clase teléfono, deberemos instanciar la clase para crear el teléfono del recibidor y lo mismo para crear el teléfono del despacho. En este caso, a no ser que se disponga de más de una línea telefónica, la propiedad número de ambos teléfonos será la misma.


## ¿Qué es una promesa en JS?

En JS, una `promise` (promesa) es un objeto que representa la finalización de una operación asíncrona, como puede ser petición de datos a un servidor. El resultado de la operación puede ser resuelto satisfactoriamente (por ejemplo, si los datos pedidos son devueltos) o bien ser rechazado si se produce alguna falla en el proceso, por ejemplo, que los datos devueltos no sea los esperados o el servidor devuelva un error. Para ser efectiva, la promesa debe implementar código que permita evaluar el estado de la promesa y obtener los resultados buscados o el error ocurrido.

Una promesa tiene dos propiedades: `state` y `result` que representan, respectivamente, el estado y el resultado de la promesa. Los posibles estados de la promesa son: “pending”, si todavía no se ha resuelto, “fulfilled” si se ha resuelto satisfactoriamente o “rejected” si ha ocurrido algún error. Si el estado de la promesa es “pending” el resultado es “undefined”. Si el estado es “fullfilled” el resultado de la promesa es un valor o datos buscados (`data`). Por último, si el estado de la promesa es “rejected”, el resultado es un objeto de error. 

El código JS necesario para usar promesas se divide en dos. Inicialmente hay que crear la promesa e implementar código que sea capaz de producir unos resultados (“código productivo”). Una vez creada la promesa, debemos crear código que nos permita operar o consumir el resultado de la promesa (“código de consumo”). 

### Creación de una `promise`

Para mostrar un ejemplo de la creación de una promesa vamos a escribir la función `getData`, la cual va a simular la petición de un arreglo a una API. Puesto que la función espera un arreglo, si los datos “recibidos” no lo son va a devolver un error. Como se puede apreciar, la función retorna un objeto de la clase `Promise` creado con el operador `new`. La creación de la promesa requiere de dos funciones denominadas, por convención, `resolve` y `reject`. Estas se ocupan, respectivamente de devolver los datos buscados (`myData`) o bien una nueva instancia de la clase `Error` con el mensaje apropiado. Para la comprensión del código hay que tener presente que el ejemplo usa la función `setTimeout()` para simular que el proceso no es síncrono sino que después de hacer la petición hay que esperar un tiempo antes de obtener la respuesta de la API. 

```javascript
function getData(){
    return new Promise ((resolve,reject)=> {
        //Producing code: 
        if(myData.length < 2) {
            setTimeout(()=>{
            // Failure code:
            reject(new Error('Expected a vector but got a single value or no value instead.'));    
            },4500);
        } else {
            setTimeout(()=>{
            // Success code:
            resolve(myData);
            },2500);
        }
    });
}
```

### Usando el resultado de una `promise`

Para usar el resultado de la promesa anterior hay que llamar a la función `getData()`, lo cual creara la instancia de la promesa. Para acceder al resultado de la promesa, se usan los métodos `then()` y `catch()`. Estos métodos están directamente vinculados con el resultado de la promesa. En el caso del ejemplo, solamente se imprimen los datos o bien el error obtenido, aunque el código podría implementar comportamientos más complejos. 

```javascript
//Consuming code: 
getData()
    .then((data)=> console.log (data)) // mapped to resolve
    .catch((error) => console.log(`Error: ${error.message}`)); // mapped to reject```
```

En el ejemplo, para mostrar el resultado de la promesa debemos definir previamente el arreglo `myData`. Definiendo `const myData = [ 1, 2, 3, 4, 5 ];` nos permite simular el comportamiento de la promesa cuando los datos se han obtenido exitosamente:

```javascript
#Output on success:
[ 1, 2, 3, 4, 5 ]
```
Como se aprecia, el valor devuelto por la promesa `data` corresponde con el arreglo buscado. Por el contrario, deviniendo `const myData = [ 10 ];` obtenemos la respuesta de la promesa en caso de fallo:

```javascript
#Output on failure:
Error: Expected a vector but got a single value or no value instead.
```

## ¿Qué hacen async y await por nosotros?

Las palabras reservadas `async` y `await` son lo que se denomina un azucarillo sintáctico (“syntactical sugar”). Permiten crear código más legible y fácil de mantener eliminando la necesidad de utilizar los métodos `then()` y `catch()` para manipular el resultado de las promesas. Usando esta sintaxis, el código escrito en el apartado anterior puede reescribirse como sigue: 

```javascript
async function runProcess (){
    try {
        const requestedData = await getData();
        console.log(requestedData);
    } catch (error){
        console.log(error);
    }
}

runProcess();
```

Como se aprecia en el ejemplo, el manejo de los resultados puede hacerse con bloques `then/catch` usando una sintaxis más natural. Al usar la palabra `await` delante de una función que devuelva una promesa (`getData()` en el ejemplo), lo que hacemos es forzar que el flujo del código se detenga hasta que esta se haya resuelto. Si necesitamos coordinar las respuestas de varias promesas, `await` nos permite asegurarnos que no llamamos a una promesa que dependa de datos proporcionados previamente por otra. 
Tradicionalmente, la palabra clave `await` solo podía usarse dentro de una función asíncrona, la cual se declara usando la palabra reservada `async` (ver ejemplo anterior). Cuando se llama a una función síncrona, esta devuelve una promesa directamente. Si se devuelve un valor, este se pasa como `data` pero si esta genera una excepción, la promesa es rechazada. 

El uso tradicional se ha visto modificado desde el lanzamiento de la versión ES2022 / ES13 de JS. Esta permite usar la palabra clave `await` sin la necesidad de incluirla dentro de una función `async`, lo que se denomina “top-level await”. 
