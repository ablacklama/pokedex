import { NavBar } from "./NavBar";
import { useState } from "react";
import { PokemonCard } from "./PokemonCard";

// main page that displays a pokemon
export const PokemonPage = () => {
    const [pokemon_name, setPokemonName] = useState('');

    const changePokemonName = (event) => {
        if (event.key === 'Enter') {
            setPokemonName(event.target.value);
        }
    }

    return (
        <div className="pokemon-page">
            <NavBar search_callback={changePokemonName} />
            <PokemonCard pokemon_name={pokemon_name} pokemon_id="001" url="https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png" />
        </div>
    )
}




export default PokemonPage;