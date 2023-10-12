import { NavBar } from "./NavBar";
import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";




// main page that displays a pokemon
export const PokemonPage = () => {
    const [pokemon_name, setPokemonName] = useState('missingno');
    const [pokemon_url, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon/1/"') 
    console.log(pokemon_name);

    return (
        <div className="pokemon-page">
            <NavBar setPokemonName={setPokemonName} setPokemonUrl={setPokemonUrl} />
            <PokemonCard pokemon_name={pokemon_name}/>
        </div>
    )
}




export default PokemonPage;