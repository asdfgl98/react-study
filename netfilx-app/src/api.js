import axios from 'axios'

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
        Authorization:`Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        accept: 'application/json'

    }
})

export default api