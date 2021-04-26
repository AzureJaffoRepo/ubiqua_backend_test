import { PokeAPIController } from './controllers/PokeAPIController';

export const Routes = [{ 
      method: "get", 
      route: "/pokemons", 
      controller: PokeAPIController, 
      action: "getPokemonsData" 
   }, { 
      method: "get", 
      route: "/pokemon/:id", 
      controller: PokeAPIController, 
      action: "getPokemonDetail" 
   }, { 
      method: "post", 
      route: "/users", 
      controller: PokeAPIController, 
      action: "save" 
   }, { 
      method: "delete", route: "/users/:id", 
      controller: PokeAPIController,
      action: "remove" 
}];