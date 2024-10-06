import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { BaseService } from "src/shared/services/base.service";
import { CovidAdapter } from "./covid.adapter";
import { DataPerCountryDto, IndividualDataUfDto } from "./models";
import { ResultViewModel } from "src/shared/models/interfaces/result-view.model";

@Injectable()
export class CovidService extends BaseService {
	constructor(private readonly httpService: HttpService) {
		super("https://covid19-brazil-api.now.sh/api/report/v1");
	}

	getBrazilCovidData(): Observable<ResultViewModel<IndividualDataUfDto[]>> {
		return this.httpService
			.get(this.getUrl())
			.pipe(map(({ data }) => CovidAdapter.covidList(data.data)));
	}

	getDataPerCountry(): Observable<ResultViewModel<DataPerCountryDto[]>> {
		return this.httpService
			.get(this.getUrl("countries"))
			.pipe(map(({ data }) => CovidAdapter.getDataPerCountry(data.data)));
	}

	getDataPerState(uf: string): Observable<ResultViewModel<IndividualDataUfDto>> {
		return this.httpService
			.get(this.getUrl(`brazil/uf/${uf}`))
			.pipe(map(({ data }) => CovidAdapter.covidIndividual(data)));
	}
}
