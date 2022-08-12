import axios from 'axios'

const API_URL = 'http://localhost:3001/'

const getGerentes = async () => {
    const response = await axios.get(API_URL + 'gerentes')
    return response.data[0] 
  }
const postGerentes = async () => {
    const response = await axios.post(API_URL + 'gerentes')
    return response.data[0] 
  }
const updateGerentes = async () => {
  const response = await axios.update(API_URL + 'gerentes')
  return response.data[0] 
}  

const gerentesService = {
    getGerentes, postGerentes, updateGerentes
  }


export default gerentesService