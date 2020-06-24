import axios from 'axios'

async function getResults(query) {
    const resp = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
    console.log(resp.data.recipes)
}


getResults('pizza');