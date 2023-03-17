import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5001/clone-f4a00/us-central1/api' // API URL - cloud function
})

export default instance

