import axios from 'axios'

const API_URL = 'http://localhost:3001/'

const login = async (userData) => {

    const response = await axios.post(API_URL + 'login', userData) 
    window.localStorage.setItem('user', JSON.stringify(response.data))
    return response.data 
  }

const logout = () => {
    localStorage.removeItem('user')
  }


    const loginService = {
        login,
        logout
      }

export default loginService