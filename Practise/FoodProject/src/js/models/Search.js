import axios from 'axios'

export default class Search {
    constructor(query){
        this.query = query;
    }


    async getResults() {
        try {
            const resp = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`)
            this.result = resp.data.recipes
        }
        catch(err){
            alert(err)
        }
    
    }
}

