// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://api.github.com/') => {
    // ------
    // STEP 1
    // ------
    const api = apisauce.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache'
        },
        timeout: 10000
    });
    // ------
    // STEP 2
    // ------
    const getRoot = () => api.get('');
    const getRate = () => api.get('rate_limit');
    const getUser = (username) => api.get('search/users', {q: username});
    // ------
    // STEP 3
    // ------
    return {
        getRoot,
        getRate,
        getUser
    }
};

export default {
    create
}
