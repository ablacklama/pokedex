export const SearchBox = ({ placeholder }) => {
    const callback = (e) => {
        if (e.key === "Enter") {
            console.log(e.target.value);
        }
    }
    return (
        <input className="search" type="search" placeholder={placeholder} onKeyDown={callback} />
    )
}
