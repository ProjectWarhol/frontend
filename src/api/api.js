import axios from 'axios'
import { URL } from '@env'

export default axios.create({
  baseURL: 'http://7073-92-76-26-44.ngrok.io'
})
