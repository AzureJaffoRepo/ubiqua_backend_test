"use strict";
//import {getRepository} from "typeorm"; import {NextFunction, Request, Response} from "express"; import {User} from "../entity/User"; 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeAPIController = void 0;
var PokemonDetail_1 = __importDefault(require("../models/PokemonDetail"));
var PokemonFetchs_1 = __importDefault(require("../helper/PokemonFetchs"));
var PokeAPIController = /** @class */ (function () {
    function PokeAPIController() {
        this.fetchData = new PokemonFetchs_1.default();
    }
    // Get all firts 151 Pokemon ID, Name, Picture and DataURL (Only KANTO REGION) 
    // All region... coming soon...
    PokeAPIController.prototype.getPokemonsData = function (request, response, next) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var pokeList = [];
            _this.fetchData.GetAllKantoPokemonFetch()
                .then(function (pokemons) {
                _this.fetchData.GetPokemonDetailFetch(pokemons.results)
                    .then(function (detail) {
                    //console.log(detail);
                    resolve(detail);
                });
            });
        });
    };
    // Get pokemon's information 
    PokeAPIController.prototype.getPokemonDetail = function (request, response, next) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fetchData.GetPokemonInfoFetch(request.params.id)
                .then(function (info) {
                var pokeInfo = new PokemonDetail_1.default();
                pokeInfo.ID = info.id;
                pokeInfo.Name = info.name;
                pokeInfo.Types = info.types;
                pokeInfo.Picture = "https://pokeres.bastionbot.org/images/pokemon/" + info.id + ".png";
                //console.log(pokeInfo)
                resolve(pokeInfo);
            });
        });
    };
    return PokeAPIController;
}());
exports.PokeAPIController = PokeAPIController;
