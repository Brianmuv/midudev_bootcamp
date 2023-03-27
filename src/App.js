import './App.css';


//Component
/*
function App() {
  return (
    <div className="App">
      Hola mundo
    </div>
  );
}
*/

const App = () => {
  const a = 2
  const b = 4
  
  return(
    <div className="App">
      <h1>Title</h1> 
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es:</p>
        {a +b}
      </div>
      {+new Date()}
    </div>
  )
}
//Component : Parte que puede ser reutilizada en la app


export default App;
 