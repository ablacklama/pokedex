import { NavBar } from "./NavBar";
import loading from "./pokeball.png"
import missing from "./missingno.png"
import "./PokemonCard.css";
import { useEffect, useState } from 'react';

// main page that displays a pokemon
export const PokemonCard = ({ pokemon_name }) => {
    const [pokeomn_api_url, setPokemonApiUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [pokemon_id, setPokemonId] = useState("000");
    const [pokemon_img, setPokemonImg] = useState(missing);
    const [pokemon_types, setTypes] = useState(Array(2))
    const [pokemon_name_holder, setPokemonName] = useState('missingno');
    const [loaded, setLoaded] = useState(false);


    const setPokemonData = (data) => {
        console.log(data);
        setPokemonName(data.name);
        setPokemonId(data.id);
        setTypes(data.types);
        setPokemonImg(data["sprites"]["other"]["official-artwork"]["front_default"]);
        return Promise.resolve(data);
    }

    console.log(pokeomn_api_url + pokemon_name);

    useEffect(() => {
        if (pokemon_name == "missingno") {
            setPokemonName("missingno");
            setPokemonId("000");
            setPokemonImg(missing);
        }
        else {
            setLoaded(false);
            fetch(pokeomn_api_url + pokemon_name.replace(/ /g, '-'))
                .then(response => response.json())
                .then(data => setPokemonData(data))
                .catch(error => console.log(error))
        }
    }, [pokemon_name])


    return (
        <div>
            <img className="loading-ball rotating"
                src={loading}
                alt="pokemon image"
                style={loaded ? { display: 'none' } : {}}
            />
            <div className="pokemon-card bg-lightgrey ">
                <div className="textbox"
                    style={loaded ? {} : { display: 'none' }}>
                    <h1 className="name-text " >{pokemon_name_holder}</h1>
                    <h1 className="name-text ">#{pokemon_id}</h1>
                </div>


                <img
                    className="pokemon-card"
                    style={loaded ? {} : { display: 'none' }}
                    src={pokemon_img}
                    onLoad={() => setLoaded(true)}
                />
            </div>
        </div>
    )
}



export default PokemonCard;