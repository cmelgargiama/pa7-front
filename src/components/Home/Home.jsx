import React, {useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate, Link} from 'react-router-dom'
import { reset, logout } from '../../reducers/Login/loginSlice'



const Home = () => {
    
const {user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.login)
const dispatch = useDispatch()
const navigate = useNavigate()
    React.useEffect(() => {
        dispatch(reset())
    }, [])
  return (
    <div>
        
        {
            user ? <div>
                
                <button onClick={() => dispatch(logout())}>Log out</button>
                <p>Login succesfull with {user.username} account</p>
                <Link to={'/gerentes'}>
                <div style={{border:'1px solid black', width:'30rem', margin:'1rem'}}>
                    <h3>Gerentes</h3>
                </div>
                </Link>
                
                </div> : 
            <div>
                You`re not logged yet, <a 
                href='/login'>
                    Log in here
                    </a>
            </div>
        }


    </div>
  )
}

export default Home