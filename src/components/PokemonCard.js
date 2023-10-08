import { NavBar } from "./NavBar";
import "./PokemonCard.css";
import { useState } from "react";

// main page that displays a pokemon
export const PokemonCard = ({pokemon_name, pokemon_id, url}) => 
{
    return (
        <div className="pokemon-card">
            <div className="textbox">
                <h1 className="name-text" >{pokemon_name}</h1>
                <h1 className="id-text">{pokemon_id}</h1>
            </div>
            <img className="pokemon-card" src={url} alt="pokemon image"/>
        </div>
    )
}







export default PokemonCard;