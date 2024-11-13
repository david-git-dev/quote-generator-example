import './App.css';
import { useEffect } from "react";//con este accedemos a diferentes estados del ciclo de vida del componente
import { useDispatch } from 'react-redux';
import Card from "./components/Card";
import { quoteGenerate } from './redux/quoteSlice';
const App = () => {
const dispatch = useDispatch()
useEffect(()=>{
  fetch('https://dummyjson.com/quotes/random')
  .then(response => response.json())
  .then(data =>dispatch(quoteGenerate(data)))
  .catch(error=>alert(`ocurrio un error al generar la quote...${error.name}`))
},[])//con este array vacio indicamos que lo ejecutaremos solo durante la carga del componente
  return (
    <div className="content">
      <h1>Quote generator</h1>
      <Card/>
    </div>
  );
};

export default App;