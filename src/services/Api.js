import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://new.aketajawe.com/api/'
  })
}
