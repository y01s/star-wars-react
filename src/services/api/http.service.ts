import Axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

export interface HttpResponse<T> extends AxiosResponse<T> {

}

export interface ApiResponse<T> {
    count: number;
    next: string;
    previous: string;
    results: Array<T>;
}

export default class HttpService {

    private static instance = new HttpService();
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = Axios.create({
            baseURL: 'https://swapi.co/api/',
        })
    }

    static getInstance() {
        return HttpService.instance;
    }

    get<T>(url: string, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
        return this.axiosInstance.get<T>(url, config);
    }
}