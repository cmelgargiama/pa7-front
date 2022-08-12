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

const resetPassword = async (verifyData) => {
  const {id, token} = verifyData
const response = await axios.get(API_URL + 'auth/tokenStatus' + '/' + id + '/' + token)
return response.data
}

const forgotPassowrd = async (login) => {
  const response = await axios.post(API_URL + 'auth/forgot', {login: login})
  return response.data
}

const updatePassword = async (userData) => {
  const response = await axios.post(API_URL + 'auth/updatePass', userData)
  return response.data
}


    const loginService = {
        login,
        logout,
        resetPassword,
        forgotPassowrd,
        updatePassword
      }

export default loginService