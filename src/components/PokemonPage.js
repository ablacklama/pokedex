import { NavBar } from "./NavBar";
// main page that displays a pokemon
export const PokemonPage = ({ pokemon_name }) => {
    return (
        <div className="pokemon-page">
            <NavBar />
            <h1>{pokemon_name}</h1>
        </div>
    )
}

export default PokemonPage;