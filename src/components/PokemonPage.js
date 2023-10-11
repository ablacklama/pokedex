import { NavBar } from "./NavBar";
import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";




// main page that displays a pokemon
export const PokemonPage = () => {
    const [pokemon_name, setPokemonName] = useState('bulbasaur');
    const [pokemon_url, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon/1/"')


    return (
        <div className="pokemon-page">
            <NavBar setPokemonName={setPokemonName} setPokemonUrl={setPokemonUrl} />
            <PokemonCard pokemon_name={pokemon_name} pokemon_url={pokemon_url}/>
        </div>
    )
}




export default PokemonPage;