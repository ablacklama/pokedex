import { SearchBox } from "./SearchBox";

export const NavBar = ({ search_callback, setPokemonName, setPokemonUrl }) => {
    return (
        <div className="navbar">
            <SearchBox placeholder="Enter a Pokemon name..." setPokemonName={setPokemonName} setPokemonUrl={setPokemonUrl} />
        </div >
    )
}

export default NavBar;