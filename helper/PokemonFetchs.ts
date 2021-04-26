
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

    GetPokemonDetailFetch(url: string) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((res: any) => res.json())
            .then(async (info: any) => {
                //console.log(info)
                resolve(info);
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