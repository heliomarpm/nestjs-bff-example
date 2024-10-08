import { HttpService } from "@nestjs/axios/dist/http.service";
import { Injectable } from "@nestjs/common";
import { map, Observable } from "rxjs";

import { BaseService } from "src/shared/services/base.service";
import { AllPokemonsViewModel } from "./pokemon.dto";

@Injectable()
export class PokemonService extends BaseService {
	constructor(private readonly httpService: HttpService) {
		super("https://pokeapi.co/api/v2");
	}

	getAllPokemons(): Observable<AllPokemonsViewModel> {
		return this.httpService.get(this.getUrl("pokemon")).pipe(map(data => data?.data));
	}

	getByNameOrId(nameOrId: string | number): Observable<unknown> {
		return this.httpService.get(this.getUrl(`pokemon/${nameOrId}`)).pipe(map(data => data?.data));
	}

	getSkills(): Observable<unknown> {
		return this.httpService.get(this.getUrl("ability/battle-armor")).pipe(map(data => data?.data));
	}
}
