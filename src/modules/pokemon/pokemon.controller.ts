import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PokemonService } from "./pokemon.service";

@ApiTags("POKEMON")
@Controller("v1/pokemon")
export class PokemonController {
	constructor(private readonly pokemonService: PokemonService) {}

	@Get()
	getAllPokemons() {
		return this.pokemonService.getAllPokemons();
	}

	@Get("/:name")
	getByName(@Param("name") nameOrId: string) {
		return this.pokemonService.getByNameOrId(nameOrId);
	}

	@Get("ability/battle-armor")
	getSkills() {
		return this.pokemonService.getSkills();
	}
}
