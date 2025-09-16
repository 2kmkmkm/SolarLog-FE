export type APIResponseType<T> = {
    success: boolean;
    data: T;
    message: string;
}