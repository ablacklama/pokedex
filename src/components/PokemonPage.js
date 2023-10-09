import { NavBar } from "./NavBar";
import { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";




// main page that displays a pokemon
export const PokemonPage = () => {
    const [pokemon_name, setPokemonName] = useState('bulbasaur');
    const [pokemon_url, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon/1/"')




    return (
        <div className="pokemon-page">
            <NavBar setPokemonName={setPokemonName} setPokemonUrl={setPokemonUrl} />
            <PokemonCard pokemon_name={pokemon_name} pokemon_id="001" url="https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png" />
        </div>
    )
}




export default PokemonPage;