import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux/es/exports'
import styles from './Login.module.css'
import { login, reset } from '../../reducers/Login/loginSlice'
import { useDispatch } from 'react-redux'


export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user, isError, message, isSuccess} = useSelector(
        (state) => state.login)
    const [input, setInput] = useState({
        login: '',
        password: ''
    })

    React.useEffect(() => {
        dispatch(reset())
        if (isError) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message
          })
        }
    
        if (isSuccess && user !== null) {
          Swal.fire({
            icon: 'success',
            title: 'You have successfully logged in',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/')
          dispatch(reset())
        }
        },

       [user, isError, isSuccess, message, navigate]
       )

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newForm = { ...input, [name]: value };
        setInput(newForm);
    };


    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(input))
      }
    
  return (
    <div className={styles.container}>
         <h1>Login</h1>

         <form className={styles.form}>
        <input value={input.login} name='login' onChange={handleChange} className={styles.input} placeholder='User' type="text" />
         <input value={input.password} name='password' onChange={handleChange} className={styles.input} type="password" placeholder='Password'/>
         <button onClick={onSubmit}>Log in</button>
         
         </form>
      
    </div>
   
  )
}
