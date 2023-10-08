import { SearchBox } from "./SearchBox";

export const NavBar = ({ search_callback }) => {
    return (
        <div className="navbar">
            <SearchBox placeholder="Enter a Pokemon name..." callback={search_callback} />
        </div >
    )
}

export default NavBar;