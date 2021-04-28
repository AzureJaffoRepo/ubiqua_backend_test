import PokemonData from "../models/PokemonData";


const fetch = require('node-fetch')

export default class PokemonFetchs {

    GetAllKantoPokemonFetch() {
        return new Promise((resolve, reject) => {
            fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
            .then((res: any) => res.json())
            .then(async (info: any) => {
                //console.log(info)
                resolve(info);
            })
        })
    }

    GetPokemonDetailFetch(pokemon: any[]) {
        let pokeList: PokemonData[] = [];
        return new Promise((resolve, reject) => {
            pokemon.forEach(async (element) => {
                console.log(pokeList.length)
                fetch(element.url)
                .then((res: any) => res.json())
                .then((info: any) => {
                    //console.log(info)
                    let pokeData = new PokemonData();
                    pokeData.ID = info.id
                    pokeData.Name = info.name
                    pokeData.Picture = "https://pokeres.bastionbot.org/images/pokemon/" + info.id + ".png"
                    pokeData.DataURL = element.url
                    pokeData.Types = info.types
                    if(pokeList.length <= 9) {
                        pokeList.push(pokeData);
                    } else {
                        resolve(pokeList)
                    } 
                })
            })
        })
    }

    GetPokemonInfoFetch(id: string) {
        return new Promise((resolve, reject) => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((res: any) => res.json())
            .then(async (info: any) => {
                //console.log(info)
                resolve(info);
            })
        })
    }
}