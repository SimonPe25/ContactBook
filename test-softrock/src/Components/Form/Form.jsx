import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Users from '../Users/Users';

const Form = () => {
    const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        login: "",
        password: "",
        confirmPassword: "",
    });
    const [users, setUsers] = useState([]);

    

    const [touched, setTouched] = useState({})

    
    

    const validateForm = () => {
        const {login, password, confirmPassword} = values;
        const errors ={}
    if (!login) {
        errors.login = "Required field"
    } else if (!EMAIL_REGEXP.test(login)){
        errors.login = "invalid email"
    }
    if (!password) {
        errors.password = "Required field" 
    } else if (password.length < 3) {
        errors.password = "Min value is 3 characters";
    }
    if (!confirmPassword) {
        errors.confirmPassword = "Required field";
    } else if (password !== confirmPassword){
        errors.confirmPassword = "Password do not match"
    }
    return errors
 }


    const submitForm = (e) => {
        e.preventDefault();
      //  const {login, password, confirmPassword} = values;
        const errors = validateForm();
        if (Object.keys(errors).length > 0 ) {
            return
        }
        const updatedCarsArray = [...users, values];  
        setUsers(updatedCarsArray);

      console.log(users);
    }

    const removePeople =(e)=> {
        var array = [...users]; // make a separate copy of the array
        console.log("array", array);
        var index =array.indexOf(e.target.value )
        var index2 = array.map(function(e) { return e.name; }).indexOf('simpla');
        console.log("index2", index2);
        if (index !== -1) {
          array.splice(index, 1);
          setUsers({array});
        }
      }
  
    const handleChange =(e) =>{
        const value = e.target.value
        const name = e.target.name
        setValues({...values, [name]: value})
    }
    const handleBlur = (e) => {
    const name = e.target.name
    setTouched({...touched, [name]: true})
   }

    useEffect(() => {
       setErrors(validateForm()) 
    },[values])


    const change = (e, index) => {
        console.log("start");
        let tmpArr = users;
        tmpArr[index].login = e.target.textContent;
        console.log("textContent", e.target.value);
        console.log("medium", tmpArr);   
        // onTitleChange(id, title) {
        //     var newData = [...this.state.data];
        //     newData[id].title = title;
        //     this.setState({newData});
        //  }

        setUsers({tmpArr})
        console.log("finish function");
      };

      console.log("Вішли из функции");
     
    return (
        
        <div>
            <h1>Форма</h1>
            <button onClick={() => change()}>КНОПКА ТЕСТ</button>
            
            <div>
            {users.map((el, index) => <li key={index} id="test" onBlur={(e) => change(e, index)} contentEditable={true}>
            <Users title = {el.login}/>
            </li>)}
            <div>
            {users.filter(id => id === id.login).length > 0? <input type="text"/>: <span>{users.login}</span>}
            </div>
            </div>
            
            <form onSubmit={submitForm}>
            <div>
                <label>
                    login
                    <input type="text" name="login" value={values.login} onChange={handleChange} onBlur={handleBlur}/>
                </label>
            </div>
            {errors.login && touched.login && <span style={{color: "red"}}>{errors.login}</span>}
            <div>
                <label>
                    Password
                    <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                </label>
            </div>
            {errors.password && touched.password &&<span style={{color: "red"}}>{errors.password}</span>}
            <div>
                <label>
                    Confirm password
                    <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}/>
                </label>
            </div>
            {errors.confirmPassword && touched.confirmPassword &&<span style={{color: "red"}}>{errors.confirmPassword}</span>}
            <div>
                <button type="submit">Send form</button>
            </div>
            </form>
        </div>
    )
}

export default Form;
