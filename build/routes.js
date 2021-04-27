"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var PokeAPIController_1 = require("./controllers/PokeAPIController");
exports.Routes = [{
        method: "get",
        route: "/pokemons",
        controller: PokeAPIController_1.PokeAPIController,
        action: "getPokemonsData"
    }, {
        method: "get",
        route: "/pokemon/:id",
        controller: PokeAPIController_1.PokeAPIController,
        action: "getPokemonDetail"
    }, {
        method: "post",
        route: "/users",
        controller: PokeAPIController_1.PokeAPIController,
        action: "save"
    }, {
        method: "delete", route: "/users/:id",
        controller: PokeAPIController_1.PokeAPIController,
        action: "remove"
    }];
