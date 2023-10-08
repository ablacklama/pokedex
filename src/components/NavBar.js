import { SearchBox } from "./SearchBox";

export const NavBar = () => {
    return (
        <div className="navbar">
            <SearchBox placeholder="Enter a Pokemon name..." />
        </div >
    )
}

export default NavBar;