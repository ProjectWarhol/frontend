import axios from 'axios'
import { URL } from '@env'

export default axios.create({
  baseURL: 'http://f0c7-185-199-104-14.ngrok.io'
})
