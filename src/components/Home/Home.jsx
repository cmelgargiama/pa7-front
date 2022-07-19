import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { reset, logout } from '../../reducers/loginSlice'



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