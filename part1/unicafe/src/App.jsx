import { useState } from 'react'

const Button = ({setClick,text}) =>{

    return(
      <button onClick={setClick}>{text}</button>
      )
    
  
}

const Statistics = ({good,neutral,bad,type}) =>{

  if (type==='empty'){
    if (good+bad+neutral===0){
    return(
      <div>No feedback given</div>
    )}
  }

  
  if (type==='good' &&(good+neutral+bad)){
    return(
      <div>good {good}</div>
     

    )
  }
  if (type==='neutral' &&(good+neutral+bad)){
  
    return(
      <div>neutral {neutral}</div>

    )
  }
  if (type==='bad' &&(good+neutral+bad)){
    return(
      <div>bad {bad}</div>
    
    )
  }
  if (type==='average' &&(good+neutral+bad)){
    return(
      <div>average {(good-bad)/(good+bad+neutral)}</div>

    )
  }
  if (type==='positive' &&(good+neutral+bad)){
    return(
      <div>positive {(good*100)/(good+bad+neutral)}%</div>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <>
      <h1>give feedback</h1>
      <Button setClick={()=>setGood(good+1)} text='good'/>
      <Button setClick={()=>setNeutral(neutral+1)} text='neutral'/>
      <Button setClick={()=>setBad(bad+1)} text='bad'/>

      <h1>statistics</h1>
     
      <Statistics good={good} neutral={neutral} bad={bad} type='empty'></Statistics>
      <Statistics good={good} neutral={neutral} bad={bad} type='good'></Statistics>
      <Statistics good={good} neutral={neutral} bad={bad} type='neutral'></Statistics>
      <Statistics good={good} neutral={neutral} bad={bad} type='bad'></Statistics>
      <Statistics good={good} neutral={neutral} bad={bad} type='average'></Statistics>
      <Statistics good={good} neutral={neutral} bad={bad} type='positive'></Statistics>
      
    </>
  )
}

export default App