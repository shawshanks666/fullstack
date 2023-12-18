const Form = ({addNote,newName,setNewName,newNumber,setNewNumber}) =>{

    return(
    <form onSubmit={addNote}>
    <div>
      name: <input value={newName}
      onChange={e=>setNewName(e.target.value)}/>
      number: <input value={newNumber}
      onChange={e=>setNewNumber(e.target.value)}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>)
  }
export default Form  