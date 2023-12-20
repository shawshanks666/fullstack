import { useState, useEffect } from 'react'
import Numbers from './components/numbers'
import Form from './components/form'
import axios from 'axios'
import personServices from './services/person'
import Notif from './components/addedNotif'
import './styles.css'

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ])
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [added, setAdded]= useState('false')
  
  useEffect(() => {
    personServices.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])




 

  const addNote= (e) =>{
    e.preventDefault()
    const nameList=persons.filter(person=>person.name===newName)
    const newObject={name:newName, number: newNumber}
    const duplicateElement=nameList[0]
    if(duplicateElement)
    {
      console.log(duplicateElement.id);
      alert(`${newName} has already been added to phonebook`)

      personServices.update(duplicateElement.id, newObject)
      personServices.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
    } 
    else
    {
    
    personServices.create(newObject)
    .then(response => {
      console.log(123);
      setPersons(persons.concat(response.data))
      setAdded('true')

    })

    }

  }

  return (
    <>
      <h2>Phonebook</h2>
      <Notif name={newName} added={added} setAdded={setAdded}/>
      <Form addNote={addNote} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}></Form>
      <h2>Numbers</h2>
      <Numbers persons={persons} setPersons={setPersons}></Numbers>
    </>
  )
}


export default App