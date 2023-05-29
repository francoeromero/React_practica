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


