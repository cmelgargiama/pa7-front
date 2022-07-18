import React, {useState} from 'react'
import styles from './Login.module.css'
export const Login = () => {

    const [input, setInput] = useState({
        user: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newForm = { ...input, [name]: value };
        setInput(newForm);
    };
  return (
    <div className={styles.container}>
         <h1>Login</h1>
         <form className={styles.form}>
        <input value={input.user} name='user' onChange={handleChange} className={styles.input} placeholder='User' type="text" />
         <input value={input.password} name='password' onChange={handleChange} className={styles.input} type="password" placeholder='Password'/>
         <button>Log in</button>
         </form>
      
    </div>
   
  )
}
