/* import React from 'react'
class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      quote:{
        text:'',
        author:''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async componentDidMount(){
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({
        quote: {text:data.quote,author:data.author},
        loading: false
      });
    } catch (error) {
      this.setState({
        error: error,
        loading: false
      });
    }
  }
  async handleSubmit(){
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({
        quote: {text:data.quote,author:data.author},
        loading: false
      });
    } catch (error) {
      this.setState({
        error: error,
        loading: false
      });
    }
  }

  render(){
const tweet = `https://twitter.com/intent/tweet?text="${this.state.quote.text}"%0A--${this.state.quote.author}`;
    return (
      <div className='quote-box' id='quote-box'>
        <p id='text'>{this.state.quote.text}</p>
        <p id='author'>{this.state.quote.author}</p>
        <div className="buttonsPanel">
        <a id='tweet-quote' href={tweet} target="_blank">Tweet this Quote</a>
        <a href="http://">Facebbok</a>
        <input id='new-quote' className='buttonID' type="submit" value="Get quote!" onClick={this.handleSubmit}/>
        </div>

      </div>
    )

  }
}

export default Card */
//lA ANTERIOR FUE LA FORMA DE REACT ANTES DE REDUXTOOLKIT Y LA QUE PEDIA EL EJERCICIO DE FREECODECAMP AHORA VA LA NORMAL
import React from 'react'
import {  useSelector,useDispatch} from "react-redux";//cada vez que quieras acceder al estado de redux usas useSelector y el identificador de estado que esta en el slice del estado que ocupas en este caso quoteSlice,dispatch lo usamos para que haga los cambios correspondientes sobre el estado al realizar una accion
import {  quoteGenerate} from "../redux/quoteSlice";//aqui llamamos nuestro reducer que es el que hace los cambios

const Card = () => {
  const dispatch = useDispatch()
  const {quote,author} = useSelector(state =>state.quoteName)//quoteName es el nombre del identificador que yo elegi
  const handleSubmit = async()=>{
    try {
      const response = await fetch('https://dummyjson.com/quotes/random')
      const data = await response.json()
  dispatch(quoteGenerate(data))
    } catch (error) {
      console.log('ocurrio un error',error.name,error.message)
    }
  }
  const tweet = `https://twitter.com/intent/tweet?text="${quote}"%0A--${author}`;
  return (
    <div className='quote-box' id='quote-box'>
    <p id='text'>{quote}</p>
    <p id='author'>{author}</p>
    <div className="buttonsPanel">
    <a id='tweet-quote' href={tweet} target="_blank">Tweet this Quote</a>
    <a href="http://">Facebbok</a>
    <input id='new-quote' className='buttonID' type="submit" value="Get quote!" onClick={handleSubmit}/>
    </div>

  </div>
  )
}

export default Card
