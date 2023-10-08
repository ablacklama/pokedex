export const SearchBox = ({ placeholder, callback }) => {

    return (
        <input className="search" type="search" placeholder={placeholder} onKeyDown={callback} />
    )
}
