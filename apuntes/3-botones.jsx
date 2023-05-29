import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

// recuperamos el elemento HTML id
const appDomElement = document.getElementById('app');

// creamos el root de React
const root = ReactDOM.createRoot(appDomElement);

// creamos 3 elemento React: (nombre, objeto, texto)
const button = React.createElement('button',{"data-id": 123}, 'Boton 1');
const button2 = React.createElement('button',{"data-id": 456}, 'Boton 2');
const button3 = React.createElement('button',{"data-id": 789}, 'Boton 3');

// lo envolvemos con un div 
const div = React.createElement(React.Fragment, null, [button, button2, button3])

// renderizamos el div
root.render(div);