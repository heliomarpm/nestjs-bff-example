import { ResultViewModel } from "src/shared/models/interfaces/result-view.model";
import { CovidDataUfViewModel, IndividualDataUfDto } from "./models/covid-uf.model";
import { CovidDataCountryViewModel, DataPerCountryDto } from "./models";

export class CovidAdapter {
	static covidList(items: CovidDataUfViewModel[]): ResultViewModel<IndividualDataUfDto[]> {
		const newData: IndividualDataUfDto[] = [];

		items.forEach(item =>
			newData.push({
				uf: item.uf,
				state: item.state,
				cases: item.cases,
				deaths: item.deaths,
				suspects: item.suspects,
				datetime: item.datetime,
			}),
		);

		return {
			data: newData,
			error: null,
			status: 200,
			message: "Success",
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
			error: null,
			status: 200,
			message: "Success",
		};
	}

	static getDataPerCountry(data: CovidDataCountryViewModel[]): ResultViewModel<DataPerCountryDto[]> {
		const newData: DataPerCountryDto[] = [];

		data.forEach(item => {
			newData.push({
				country: item?.country,
				cases: item?.cases,
				deaths: item?.deaths,
				recovered: item?.recovered,
				updated_at: item?.updated_at,
			});
		});

		console.log("getDataPerCountry", data);
		console.log("getDataPerCountry", newData);
		return {
			data: newData,
			error: null,
			status: 200,
			message: "Success",
		};
	}
}
