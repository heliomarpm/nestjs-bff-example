export interface ResultViewModel<T> {
    data: T;    
    status: number;
    error: string | unknown
    message: string;
}