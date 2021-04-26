//import {getRepository} from "typeorm"; import {NextFunction, Request, Response} from "express"; import {User} from "../entity/User"; 

import { NextFunction, Request, Response } from "express"
import PokemonData from "../models/PokemonData";
import PokemonDetail from '../models/PokemonDetail';
import  PokemonFetchs  from "../helper/PokemonFetchs";

export class PokeAPIController {

    private fetchData = new PokemonFetchs();

    // Get all firts 151 Pokemon ID, Name, Picture and DataURL (Only KANTO REGION) 
    // All region... coming soon...
    getPokemonsData(request: Request, response: Response, next: NextFunction) {
        return new Promise((resolve, reject) => {

            let pokeList: PokemonData[] = [];

            ///let index = 1;

            this.fetchData.GetAllKantoPokemonFetch()
            .then((pokemons: any) => {
                console.log(pokemons.results)
                pokemons.results.forEach((element: any) => {
                    this.fetchData.GetPokemonDetailFetch(element.url)
                    .then((detail: any) => {
                        let pokeData = new PokemonData();
                        pokeData.ID = detail.id
                        pokeData.Name = element.name
                        pokeData.Picture = "https://pokeres.bastionbot.org/images/pokemon/" + detail.id + ".png"
                        pokeData.DataURL = element.url
                        pokeData.Types = detail.types
                        pokeList.push(pokeData);
                    })
                });
                setTimeout(() => {
                    resolve(pokeList)
                }, 1250);
            })
        })
    }

    // Get pokemon's information 
    getPokemonDetail(request: Request, response: Response, next: NextFunction) {
        return new Promise((resolve, reject) => {
            this.fetchData.GetPokemonInfoFetch(request.params.id)
            .then((info: any) => {

                let pokeInfo = new PokemonDetail();

                pokeInfo.ID = info.id
                pokeInfo.Name = info.name;
                pokeInfo.Types = info.types
                pokeInfo.Picture = "https://pokeres.bastionbot.org/images/pokemon/" + info.id + ".png"
                console.log(pokeInfo)
                resolve(pokeInfo);
            })
        })
    }

}