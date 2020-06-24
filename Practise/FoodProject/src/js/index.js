import Search from './models//Search'

const state = {};

const controlSearch = () =>{
    // Get the query from the view
    
}

document.querySelector('.search').addEventListener('submit',(e)=>{
    e.preventDefault();
    controlSearch();
})

const search = new Search('pizza')

console.log(search)
search.getResults();