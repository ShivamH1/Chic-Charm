
// Import the axios library from the 'axios' package
import axios from 'axios';

// Create a new instance of the axios library with some default settings
// The baseURL is the base URL for all requests made with this instance
// In this case, it is set to 'https://fakestoreapi.com/'
const instance = axios.create({
    baseURL : "https://fakestoreapi.com/",
})

// Export this instance of axios so that it can be used in other parts of the codebase
export default instance;
