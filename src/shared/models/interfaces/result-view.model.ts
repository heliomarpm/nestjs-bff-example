export interface ResultViewModel<T> {
	data: T;
	error?: {
		status: number;
		message: string;
		dataError: string | unknown;
	};
}
