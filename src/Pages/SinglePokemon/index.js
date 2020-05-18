import React from "react";
import {
    Page,
    PokemonName,
    PokemonImage,
    PokemonStats,
    PokemonTypes,
    PokemonType,
    PokemonEntry,
} from "./Styles";
import useFetchPokemonById from "../../hooks/useFetchPokemonById";
import { ReactComponent as HPSvg } from "../../icons/HP.svg";
import { ReactComponent as DefenseSvg } from "../../icons/Defense.svg";
import { ReactComponent as SpecialDefenseSvg } from "../../icons/SpecialDefense.svg";
import { ReactComponent as SpecialAttackSvg } from "../../icons/SpecialAttack.svg";
import { ReactComponent as AttackSvg } from "../../icons/Attack.svg";
import { ReactComponent as SpeedSvg } from "../../icons/Speed.svg";

export default () => {
    const pokemon = useFetchPokemonById();

    if (!pokemon) {
        return <h1>Loading...</h1>;
    }

    var displayStats = (statsArr) =>
        statsArr.map(({ name, base_stat }) => (
            <div className='Stat' key={name}>
                <span className='StatIcon'>{getIcon(name)}</span>
                <p className='StatName'>{splitStr(name)}</p>
                <span className='StatNumber'>{base_stat}</span>
            </div>
        ));
    return (
        <Page>
            <PokemonName pokemonColor={pokemon.color.name}>
                {pokemon.name}
            </PokemonName>

            <PokemonImage>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </PokemonImage>
            <PokemonEntry>
                <span>Pokedex Entry: </span>
                {getEnglishText(pokemon.flavor_text_entries).flavor_text}
            </PokemonEntry>

            <PokemonTypes>
                {pokemon.types.map(({ name }) => (
                    <PokemonType key={name} type={name}>
                        {name}
                    </PokemonType>
                ))}
            </PokemonTypes>
            <PokemonStats pokemonColor={pokemon.color.name}>
                {displayStats(pokemon.stats)}
            </PokemonStats>
        </Page>
    );
};

var splitStr = (str, separator = "-") => str.split(separator).join(" ");
var getIcon = (iconName) => {
    switch (iconName) {
        case "speed":
            return <SpeedSvg />;
        case "special-defense":
            return <SpecialDefenseSvg />;
        case "special-attack":
            return <SpecialAttackSvg />;
        case "defense":
            return <DefenseSvg />;
        case "attack":
            return <AttackSvg />;
        case "hp":
            return <HPSvg />;
        default:
            return null;
    }
};

var getEnglishText = (flavors) =>
    flavors.filter((flavor) => flavor.language.name === "en")[0];
