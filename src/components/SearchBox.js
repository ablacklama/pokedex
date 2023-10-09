import lunr from 'lunr';
import { useEffect, useState } from 'react';

export const SearchBox = ({ placeholder, setPokemonName, setPokemonUrl }) => {
    const [all_pokemon, setAllPokemon] = useState([])



    // Load pokemon
    // results Array({
    //         "name": "bulbasaur",
    //         "url:" "https://pokeapi.co/api/v2/pokemon/1/"
    //         })
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => response.json())
            .then(data => setAllPokemon(data.results))
            .catch(error => console.log(error))
    }, [])


    var search = lunr(function () {
        this.field('name');
        this.ref('idx');
        // add all pokemon to search index and add id which will be returned as search res
        all_pokemon.forEach(function (pokemon, idx) {
            this.add({ ...pokemon, idx: idx })
        }, this)
    });


    const searchKeyDown = (event) => {
        if (event.key === 'Enter') {
            var text = event.target.value;
            // search and add wildcard to match anything starting with text
            var search_res = search.search(text + '*');
            if (search_res.length === 0) {
                search_res = search.search('*' + text + '*') // fallback to full wildcard search
            }

            if (search_res.length >= 1) {
                var best_match = all_pokemon[search_res[0].ref]
                setPokemonName(best_match.name);
                setPokemonUrl(best_match.url);
            }
        }
    }



    return (
        <input className="search" type="search" placeholder={placeholder} onKeyDown={searchKeyDown} />
    )
}
