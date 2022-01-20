import React from 'react'

const Users = (props) => {
    const { title, password, confirmPassword, removePeople } = props
   
    return (
        <li key={password} contentEditable ="true">
        <div>
        {title}
        </div>
        <div>

        </div>
    
         
          <button onClick={removePeople} >Удалить</button>  
        </li>
    )
}

export default Users
