import axios from 'axios'
import { URL } from '@env'

export default axios.create({
    baseURL: URL,
})
