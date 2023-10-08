import { NavBar } from "./NavBar";
import { useState } from "react";

// main page that displays a pokemon
export const PokemonPage = () => {
    const [pokemon_name, setPokemonName] = useState('bulbasaur');

    const changePokemonName = (event) => {
        if (event.key === 'Enter') {
            setPokemonName(event.target.value);
        }
    }

    return (
        <div className="pokemon-page">
            <NavBar search_callback={changePokemonName} />
            <h1>{pokemon_name}</h1>
        </div>
    )
}

export default PokemonPage;