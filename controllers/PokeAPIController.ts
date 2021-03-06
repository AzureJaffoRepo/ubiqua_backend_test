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

            this.fetchData.GetAllKantoPokemonFetch()
            .then((pokemons: any) => {
                this.fetchData.GetPokemonDetailFetch(pokemons.results)
                .then((detail: any) => {
                    //console.log(detail);
                    resolve(detail)
                })
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
                //console.log(pokeInfo)
                resolve(pokeInfo);
            })
        })
    }

}