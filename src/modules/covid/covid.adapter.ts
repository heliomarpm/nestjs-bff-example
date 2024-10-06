import { ResultViewModel } from "src/shared/models/interfaces/result-view.model";

import { CovidDataCountryViewModel, DataPerCountryDto } from "./models";
import { CovidDataUfViewModel, IndividualDataUfDto } from "./models/covid-uf.model";

export class CovidAdapter {
	static covidList(items: CovidDataUfViewModel[]): ResultViewModel<IndividualDataUfDto[]> {
		return {
			data: items.map(item => ({
				uf: item.uf,
				state: item.state,
				cases: item.cases,
				deaths: item.deaths,
				suspects: item.suspects,
				datetime: item.datetime,
			})),
		};
	}

	static covidIndividual(data: CovidDataUfViewModel): ResultViewModel<IndividualDataUfDto> {
		return {
			data: {
				uf: data.uf,
				state: data.state,
				cases: data.cases,
				deaths: data.deaths,
				suspects: data.suspects,
				datetime: data.datetime,
			},
		};
	}

	static getDataPerCountry(
		data: CovidDataCountryViewModel[],
	): ResultViewModel<DataPerCountryDto[]> {
		return {
			data: data.map(item => ({
				country: item.country,
				cases: item.cases,
				deaths: item.deaths,
				recovered: item.recovered,
				updated_at: item.updated_at,
			})),
		};
	}
}
