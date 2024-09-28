export abstract class BaseService {
	private baseUrl: string;

	constructor(url: string) {
		this.baseUrl = url;
	}

	protected getUrl(endpoint?: string): string {
		console.log("this.baseUrl", this.baseUrl);
		console.log("endpoint", endpoint);
		return endpoint ? `${this.baseUrl}/${endpoint}` : this.baseUrl;
	}
}
