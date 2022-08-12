import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { verify, updatePass } from "../../reducers/Login/loginSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ForgotPassword = () => {
    const dispatch = useDispatch()
   
    React.useEffect(() => {
        dispatch(verify(verifyData))
    
    }, [])
    const { id, token } = useParams();
    const verifyData = {
        id: id,
        token: token
    }
    
    const {tokenForgot, recoveryMessage} = useSelector(
        (state) => state.login)
    
    const [input, setInput]= useState({
        password: '',
        confirmPassword: ''
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newForm = { ...input, [name]: value };
        setInput(newForm);
    };

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            newPass: input.password, 
            confirmPass: input.confirmPassword, 
            id: id //Que pida el ID
        }
        dispatch(updatePass(userData))
    }
    


    return (
        tokenForgot.status === false ? 
        <div><h1>Your token has expired</h1></div> :
        <div>
            <h1>Forgot Password</h1>
            <form>

                <input type="text" value={input.password} name="password" onChange={handleChange}  placeholder="Nueva contraseña"/>
                <input type="text" value={input.confirmPassword} name="confirmPassword" onChange={handleChange}   placeholder="Confirmar contraseña" />
                <button type="submit" onClick={onSubmit}>Enviar</button>
            </form>
        </div> 
    )
}