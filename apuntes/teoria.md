# teoria

**links:** <br>

pagina oficial<br>
https://es.react.dev/ <br>
consultas teoricas<br>
https://www.reactjs.wiki/ <br>
repositorio de pagina en facebook hecho por React <br>
https://github.com/facebook/react <br>
Para hacer aplicaciones nativas<br>
https://reactnative.dev/ <br>
Por que es tan importante aprender React?
https://www.devjobsscanner.com/blog/the-most-demanded-frontend-frameworks-in-2022/

<img src="https://www.devjobsscanner.com/assets/blog/frontend-framework-2022/frontend-framework-ranking-2.svg">
<img src="https://www.devjobsscanner.com/assets/blog/frontend-framework-2022/frontend-framework-percentage-by-country-2.svg">


React es una biblioteca a codigo abierto
Con react se hace codigo declarativo, solo con JS HTML CSS se hace un codigo imperativo <br>

# crear proyecto <br>

cmd <br>
npx create-react-app nombre_proyecto <br>
cd nombre_proyecto <br>
npm start <br>
copiar "http://localhost:3000" para ver nuestro proyecto en tiempo real<br> 

# 

React: **Biblioteca de JS** de codigo abierto, diseñada para crear interfaces de usuario.

Biblioteca: Conjunto de **implementaciones** o subprogramas que podemos usar en nuestro codigo

Ventajas: <br>
- componentes reutilizables
- crear aplicaciones dinamicas
- facil de aprender

#
CONCEPTOS BASICOS
- Componentes
- Props
- Estado
- Hooks
- Event Listener
# COMPONENTES 

Componente: Parte de la interfaz de usuario que es **independiente** y **reusable**

Componente: <br>
    1- Funcionales <br>
    2- De Clase <br>

***Componente Funcional** Es una funcion de JS que retorna un elemento de React(JSX) <br>

- Debe retornar un elemento React (JSX)
- Debe comenzar con una letra mayuscula (ej: **S**aludo)
- Puede recibir valores si es necesario (ej: props)
```javaScript
function Saludo(props) {
    return <h1>Hola, {props.nombre} </h1>
}
```
los parametros de react: <br>
Se refiere a la informacion que se representa sobre un componente <br>
**props** = propiedades / properties

Componente de Clase: Clase de ES6 que retorna un elemento JSX

``` Javascript
class Saludo extends React.Component{
    render(){
        return <h1>Hola, {this.props.nombre} </h1>
    }
}
```
#
CONCEPTOS BASICOS
# ESTADOS 

***Estado***: Representacion en JS  del conjunto de propiedades de un componente y sus valores actuales,
seria el estado de un componente

**Hooks**: agregarle un cierto estado a nuestros componentes

***Event Listener***: Funcion en JS que es ejecutada cuando ocurre un evento especifico, tambien es conocida como "Event Handler"

resumen de los conceptos: 
#
**Props**: Las props son propiedades que se pasan de un componente padre a un componente hijo. Permiten transmitir datos de un componente a otro. Las props son inmutables y se accede a ellas a través del objeto props en el componente hijo.

**Estado (State)**: El estado es un objeto que representa la información interna de un componente. Puede cambiar durante el ciclo de vida del componente y se utiliza para almacenar y manipular datos que pueden afectar la representación y el comportamiento del componente. El estado se inicializa en el constructor del componente y se actualiza mediante el método setState.

***Hooks***: Los hooks son una característica introducida en React 16.8 que permite el uso de estado y otras características de React en componentes funcionales. Los hooks, como useState, useEffect y useContext, proporcionan una forma más concisa y legible de manejar el estado y el ciclo de vida en los componentes funcionales.

**Event Listeners**: Los event listeners (escuchadores de eventos) se utilizan para manejar eventos interactivos, como hacer clic en un botón o ingresar texto en un campo de entrada. En React, los event listeners se agregan a los elementos JSX utilizando los nombres de los eventos, como onClick, onChange, etc. Al definir una función de controlador de eventos, se pueden realizar acciones basadas en la interacción del usuario.

# JSX
Es una extension de React nos permite describir en JS como se veran los componentes usando una structura similar a HTML

Elemento: Unidades mas pequeñas en React. Definen lo que se ve en la pantalla.

Diferencia entre elemento y Componente en react?

Los ***componentes*** en React estan HECHOS de **elementos**

React DOM : paquete que facilita la interaccion y actualizacion del DOM en aplicaciones React.

DOM Document Objet Model: representacion en el navegador de todos los elementos que conforman una pagina o aplicacion web

Atributos: puedes agregar atributos html con tus elementos en JSX para especificar ciertas caracteristicas:

HTML:
``` html
<h1 class="titulo-azul"></h2>
```
JSX: (la diferencia es className)
``` jsx
<h1 className="titulo-azul"></h2>
```
HTML:
``` html
<label for="css">CSS</label>
```
JSX:(la diferencia es htmlFor)
``` jsx
<label htmlFor="css">CSS</label>
```

