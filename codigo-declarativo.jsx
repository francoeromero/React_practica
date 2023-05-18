import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

// recuperamos el elemento HTML id
const appDomElement = document.getElementById('app');
// creamos el root de React
const root = ReactDOM.createRoot(appDomElement);
// creamos un elemento React: (nombre, objeto, texto)
const button = React.createElement('button',null, 'Me gusta');
root.render(button);