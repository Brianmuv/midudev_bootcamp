/// JS & React

/* 
El lenguaje mostrado dentro de las funciones del app.js no es html, es lenguaje que pasa
por babel para interpretado y pasado a jsx.


Los componentes son funciones que antes se usaban como clases (ahora no es recoimedable.)

Se puede crear a gusto:

const App = () => {
    return
}
---> Se puede quitar el return y reemplazar las llaves por ( así, devuelve lo primero que encuentra en el componente)
ejm:

const App = () => (
    <div className="App">
        Hola mundo
    </div>
)
o

function App (){
    return
}


En JSX se deben usar llaves para evaluar variables creadas:

const msj = "Hola mundo"

<div> {msj} </div>  ---> Se le pueden concatenar mensajes.
<div> {msj + "evaluaciión"}   </div>

Para evaluar obejtos dentro de las llaves se deben poner timestap (+):
{+new Date()}  ---> De está forma. 




En jsx siempre se deben cerrar las etiquetas, bien sea dentro de la misma o con la sintáxis normal:

< br /> or <br></br>


Fragment:

permite envolver lo que se quiere renderizar sin necesidad de crear
un elemento en el HTML. ---> <> </>
|
---> Se pueden devolver null, arrays, strings y demás.

*/

// To run the project: npm start on folder.