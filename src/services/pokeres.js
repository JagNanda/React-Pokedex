//used to fetch images of pokemon

const getPokemonImage = async (id) => {
    let url = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const cache = await caches.open("pokemonImgs");
    let match = await cache.match(url);
    if(match){
        return URL.createObjectURL(await match.blob());
    }
    else {
        let img = await fetch(url);
        await cache.put(url, img.clone());
        return URL.createObjectURL(await img.blob());       
    }

};

const getAllPokemonImages = async () => {

    let promiseArr = [];

    for (let i = 1; i <= 807; i++){
        promiseArr.push(getPokemonImage(i));
    }

    let promises = await Promise.all(promiseArr);
    return promises;

}

export default {
    getPokemonImage,
    getAllPokemonImages
};