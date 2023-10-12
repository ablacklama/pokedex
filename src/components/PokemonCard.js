import { NavBar } from "./NavBar";
import "./PokemonCard.css";
import { useEffect, useState } from 'react';

// main page that displays a pokemon
export const PokemonCard = ({pokemon_name}) => 
{
    const [pokeomn_api_url, setPokemonApiUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [pokemon_id, setPokemonId] = useState("000");
    const [pokemon_img, setPokemonImg] = useState("https://wiki.p-insurgence.com/images/0/09/722.png");
    const [pokemon_types, setTypes] = useState(Array(2))
    const [pokemon_name_holder, setPokemonName] = useState('missingno'); 
    

    const setPokemonData = (data) => 
    {
        console.log(data);
        setPokemonName(data.name);
        setPokemonId(data.id);
        console.log("test");
        console.log(data["sprites"]["other"]["official-artwork"]["front_default"]);
        
        setPokemonImg(data["sprites"]["other"]["official-artwork"]["front_default"]);
    }

    console.log(pokeomn_api_url+pokemon_name);
    
    useEffect(() => {
        if (pokemon_name == "missingno")
        {
            setPokemonName("missingno");
            setPokemonId("000");
            setPokemonImg("https://wiki.p-insurgence.com/images/0/09/722.png");
        }
        else
        {
            fetch(pokeomn_api_url+pokemon_name)
                .then(response => response.json())
                .then(data => setPokemonData(data))
                .catch(error => console.log(error))
        }
    },[pokemon_name])



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



export default PokemonCard;