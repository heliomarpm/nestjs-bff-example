import { Controller, Get, Param } from "@nestjs/common";
import { catchError } from "rxjs";

import { CovidService } from "./covid.service";
import { errorResponseHelper } from "src/shared/services/helpers/error-response.helper";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("COVID")
@Controller("v1/covid")
export class CovidController {
	constructor(private readonly covidService: CovidService) {}

	@Get()
	async getBrazilCovidData() {
		return this.covidService.getBrazilCovidData().pipe(catchError(errorResponseHelper));
	}

	@Get("/uf/:uf")
	async getDataPerState(@Param("uf") uf: string) {
		return this.covidService.getDataPerState(uf).pipe(catchError(errorResponseHelper));
	}

	@Get("/countries")
	async getDataPerCountry() {
		return this.covidService.getDataPerCountry().pipe(catchError(errorResponseHelper));
	}
}
