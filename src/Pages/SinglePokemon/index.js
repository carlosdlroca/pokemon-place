import React from "react";
import { Page, PokemonName, PokemonImage, PokemonStats } from "./Styles";
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
                <p className='StatName'>{name.split("-").join(" ")}</p>
                <span className='StatNumber'>{base_stat}</span>
            </div>
        ));

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

    return (
        <Page>
            <PokemonName pokemonColor={pokemon.color.name}>
                {pokemon.name}
            </PokemonName>

            <PokemonImage>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </PokemonImage>

            <PokemonStats>{displayStats(pokemon.stats)}</PokemonStats>
        </Page>
    );
};
