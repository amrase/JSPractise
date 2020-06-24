import Search from './models//Search'
import * as searchView from './views/searchView'
import {elements} from './views/base'
const state = {};

const controlSearch = async () =>{
    // Get the query from the view
    const query = searchView.getInput(); //
    if(query){
        state.search = new Search(query)

        //prepare ui for result
        searchView.clearInput();
        searchView.clearResults();
        // search for recipes
        await state.search.getResults();

        //render results on UI
        searchView.renderResults(state.search.result)
    }

}

elements.searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    controlSearch();
})

