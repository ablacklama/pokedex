import { NavBar } from "./NavBar";
import "./PokemonCard.css";
import { useState } from "react";

// main page that displays a pokemon
export const PokemonCard = ({pokemon_name, pokemon_url}) => 
{
    const [pokemon_id, setPokemonId] = useState(1);
    const [pokemon_img, setPokemonImg] = useState("");
    const [pokemon_types, setTypes] = useState(Array(2))
    const [pokemon_name_holder, setPokemonName] = useState('missingno'); 
    

    const setPokemonData = (data) => 
    {
        setPokemonName(data.name)
        setPokemonId(data.id)
        setPokemonImg(data.sprites.front_default)
    }


    useEffect(() => {
        fetch(pokemon_url+pokemon_name)
            .then(response => response.json())
            .then(data => setPokemonData(data))
            .catch(error => console.log(error))
    },[])



    return (
        <div className="pokemon-card">
            <div className="textbox">
                <h1 className="name-text" >{pokemon_name_holder}</h1>
                <h1 className="id-text">{pokemon_id}</h1>
            </div>
            <img className="pokemon-card" src={pokemon_img} alt="pokemon image"/>
        </div>
    )
}


setPokemonData(data)
{

}







export default PokemonCard;