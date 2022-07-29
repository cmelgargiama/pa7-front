import React, {useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { reset, logout } from '../../reducers/Login/loginSlice'



const Home = () => {
    
const {user } = useSelector(
        (state) => state.login)
const dispatch = useDispatch()

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