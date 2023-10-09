import lunr from 'lunr';
import { useEffect, useState } from 'react';

export const SearchBox = ({ placeholder, setPokemonName, setPokemonUrl }) => {
    const [all_pokemon, setAllPokemon] = useState([])

    const [search_results, setSearchResults] = useState([])



    // Load pokemon
    // results Array({
    //         "name": "bulbasaur",
    //         "url:" "https://pokeapi.co/api/v2/pokemon/1/"
    //         })
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => response.json())
            .then(data => data.results.map(p => { return { ...p, name: p.name.replaceAll('-', ' ') } }))
            .then(data => setAllPokemon(data))
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

    var delayTimer;
    const searchOnInput = (event) => {
        clearTimeout(delayTimer);
        delayTimer = setTimeout(function () {
            var text = event.target.value;
            if (text) {
                var search_res = search.search('*' + text + '*')
                var mapped_results = search_res.map(res => all_pokemon[res.ref]);

                setSearchResults(mapped_results);
            }
            else {
                setSearchResults([]);
            }
        }, 100); // Will do the stuff after 100 ms

    }

    const doSearch = () => {
        var filtered_pokemon = all_pokemon.filter(e => e.name === document.getElementById('pokemon-search-input').value)
        if (filtered_pokemon.length > 0) {
            setPokemonName(filtered_pokemon[0].name);
            setPokemonUrl(filtered_pokemon[0].url);
        }
    }


    const searchKeyDown = (event) => {
        // focus on first line item on arrow down
        if (event.key === 'ArrowDown') {
            var list = document.getElementById('searchResultList');
            if (list.getElementsByTagName('li').length >= 1) {
                list.getElementsByTagName('li')[0].focus();
                event.preventDefault();
                event.stopPropagation();
            }
        }
        if (event.key === 'Enter') {
            doSearch();
        }
    }

    const searchResultClicked = (event) => {
        document.getElementById('pokemon-search-input').value = event.target.innerHTML;
        doSearch();
    }

    // search_results = []

    var search_results_rendered = search_results.map((pokemon, idx) => {
        return <li key={idx} className='search-result-line' onMouseDown={searchResultClicked}>{pokemon.name}</li>
    })

    return (
        <div className={`search ${(search_results.length > 0) ? 'search-has-results' : ''}`}>
            <input id='pokemon-search-input' className="search-input" type="search" placeholder={placeholder} onKeyDown={searchKeyDown} onInput={searchOnInput} />
            <ul id='searchResultList' className='search-results-list'>{search_results_rendered}</ul>
        </div>
    )
}
