 import React from "react";


 const Notif = ({name, added, setAdded}) =>{

    setTimeout( ()=>{
    if(added==='true'){
      console.log(12113);
      setAdded('false')
    }
  }, 800)

    if (added==='false'){
      return null
    }
    else{
    return(
      <div className='added'>Added {name}</div>
    )
    }
  }

  export default Notif