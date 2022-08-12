import React, {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { recoveryPass } from '../../reducers/Login/loginSlice';

export const RecoveryPass = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")

    const {recoveryMessage} = useSelector(
        (state) => state.login)
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(recoveryPass(username))
        setUsername("")
      }
    return (
        <div>
            <h1>Coloque su nombre de usuario</h1>
            <form action="">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Nombre de usuario' />
            <button onClick={onSubmit}>Enviar</button>
            {
                recoveryMessage ? <p>{recoveryMessage.message}</p> : null
            }
            </form>
            
        </div>
    )
}