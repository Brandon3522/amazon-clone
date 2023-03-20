import axios from 'axios';

// Local server
const instance = axios.create({
	baseURL: 'http://localhost:5001/clone-f4a00/us-central1/api' // API URL - cloud function
})

// Deploy server
// Get from functions in firebase console
// Change create URL

export default instance

