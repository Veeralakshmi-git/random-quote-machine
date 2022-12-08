import { useEffect, useState } from 'react'
import './App.scss'
import Spinner from 'react-bootstrap/Spinner'
import QuoteBox from './Components/QuoteBox'

const quoteUrl ="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

const colorsArr = [ '69995D', 'D2D7DF', '3AA7A3', 'ECA400', '006992', 'AFECE7', '81F499', '890620', 'B6465F', '8ACDEA','4FC1FF', "E8B9AB", 'CB769E']

const randomArrVal = (arr) => {
  let randomNum =  Math.floor(Math.random() * arr.length)
  return arr[randomNum]
}

const useFetch = url => {
  const [quotesArray , setQuotesArray] = useState(null)
   
  async function fetchQuotes() {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON)
}
  
  useEffect(() => {
     fetchQuotes()
  },[url])
 
  return quotesArray  
  
}

function App() {
const [accentColor,setAccentColor] = useState('#4FC1FF')
const quotes = useFetch(quoteUrl)
const [currentQuote,setCurrentQuote] = useState({author:'',quote:''})

useEffect(() => {
  if(quotes){
    handleNewQuote()
  }
},[quotes])

const handleNewQuote = () =>{
  setAccentColor(`#${randomArrVal(colorsArr)}`)
  let quoteArr = quotes.quotes
  setCurrentQuote(randomArrVal(quoteArr))
}
  return (
    <div className="App" style={{backgroundColor:`${accentColor}`,color:`${accentColor}`}}>
       {
        (currentQuote.quote === "") ? 
        <Spinner className="loading-spinner" animation="grow" variant="light" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        :
        <QuoteBox accentColor={accentColor} currentQuote={currentQuote} handleNewQuote={handleNewQuote} />
       }
    </div>
  )

 }

export default App
