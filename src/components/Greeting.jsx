import React,{useState} from 'react'
import Output from './Output'
function Greeting() {
  const [textChanged,setTextChanged]= useState(false)
  function handleTextChanged(){
    setTextChanged(true)
  }
  return (
    <>
    <h1>Welcome to React Testing course</h1>
    {/* {textChanged ? <h1>text changed now</h1> :<button onClick={handleTextChanged}>This is based on testing123 react component!</button>} */}
    {!textChanged && <Output>it is good to see you</Output>}
    {textChanged && <Output>text changed now</Output>}
    <button onClick={handleTextChanged}>This is based on testing123 react component!</button>
    </>
  )
}

export default Greeting