export interface CovidDataUfViewModel {
    uid: number;
    uf: string;
    state: string;
    cases: number;
    deaths: number;
    suspects: number;
    refuses: number;
    datetime: string;
}

export interface IndividualDataUfDto {
    uf: string;
    state: string;
    cases: number;
    deaths: number;
    suspects: number;
    datetime: string;
  }