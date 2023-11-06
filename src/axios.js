import axios from 'axios';
import {base_url} from './componets/constant/constant'

const instance = axios.create({
    baseURL:base_url,
    
  });
  export default instance;