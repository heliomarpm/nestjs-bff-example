export interface CovidDataCountryViewModel  {
    country: string;
    cases: number;  
    confirmed: number;
    recovered: number;
    deaths: number;
    updated_at: number;
}

export interface DataPerCountryDto {
    country: string;
    cases: number;
    deaths: number;
    recovered: number;
    updated_at: number;
  }