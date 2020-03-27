const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const SPRITE_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const generations = {
    1: { offset: 0, limit: 151 },
    2: { offset: 151, limit: 100 },
    3: { offset: 251, limit: 135 },
    4: { offset: 386, limit: 108 },
    5: { offset: 494, limit: 155 },
    6: { offset: 649, limit: 72 },
    7: { offset: 721, limit: 86 }
};

export async function getPokemonByGeneration(genNum = 1) {
    const { offset, limit } = generations[genNum];
    try {
        const res = await fetch(`${BASE_URL}?offset=${offset}&limit=${limit}`);
        const data = await res.json();
        return data.results.map((pokemon, idx) => {
            var id = idx + offset + 1;
            return { ...pokemon, id, sprite: `${SPRITE_URL}${id}.png` };
        });
    } catch (err) {
        console.error({ err });
    }
}

export async function getPokemon(id) {
    try {
        const res = await fetch(`${BASE_URL}/${id}`);
        const data = await res.json();
        return {
            id: data.id,
            name: data.name,
            abilities: data.abilities,
            location_area_encounters: data.location_area_encounters,
            species: data.species,
            sprites: { ...data.sprites },
            stats: data.stats,
            types: data.type,
            weight: data.weight,
            moves: data.moves
        };
    } catch (err) {
        console.error({ err });
    }
}
