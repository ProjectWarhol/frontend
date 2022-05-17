import axios from 'axios'
import { URL } from '@env'

export default axios.create({
    baseURL: 'http://f52e-92-73-252-238.ngrok.io',
})
