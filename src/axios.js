import axios from 'axios';

const productsBaseURL = 'https://fakestoreapi.com'

// Local server
const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-f4a00/us-central1/api', // API URL - cloud function
});

// Get all products
const getAll = () => {
	const request = axios.get(`${productsBaseURL}/products`);
	return request.then((response) => response.data)
}

// Deploy server
// Get from functions in firebase console
// Change create URL

export default instance;
export {getAll}
