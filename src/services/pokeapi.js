
// try getting pokemon from cache. If it doesn't exist, add it to the cache (which automatically makes the call and stores the response),
    // and return the response
const getPokemon = async (id) => {
    
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const cache = await caches.open("pokemon")
    let match = await cache.match(url);
    if(!match){
        console.log(`Pokemon with id ${id} doesn't exist in cache. Creating request to ${url}`);
        await cache.add(url);
    }
    match = await cache.match(url);
    return await match.json();
    
}


const getAllPokemon = async () => {

    let promiseArr = [];

    for(let i = 1; i <= 807; i++) {

       promiseArr.push(getPokemon(i));
    }
    
    const pokemonList = await Promise.all(promiseArr)
    return pokemonList;

}

export default {
    getPokemon,
    getAllPokemon
}