import React from "react";
import { useParams } from "react-router-dom";

export const ForgotPassword = () => {
    const { id, token } = useParams();
    return (
        <div>
            <h1>Forgot Password</h1>
            <form>

                <input type="text" value="" name="password" placeholder="Nueva contraseña"/>
                <input type="text" value="" name="confirmPassword" placeholder="Confirmar contraseña" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}