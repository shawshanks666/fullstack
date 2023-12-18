import axios from "axios"
import personServices from "../services/person";

const Numbers = ({persons,setPersons}) =>{

    return(

      persons.map(name =><>
      <div key={name.id}>{name.name} {name.number}</div>
      <button onClick={()=>remove(name.id, setPersons)}>delete</button>
      </>
      ) 
    )
  }

const remove = (id,setPersons) =>{
    if(window.confirm('do you want to delete the contact')){
      personServices.remove(id)
      personServices.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
    }  
}

export default Numbers