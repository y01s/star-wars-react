import http, {ApiResponse, HttpResponse} from '../http.service';
import {Film} from "../../../models/film.model";

export function getFilms(): Promise<HttpResponse<ApiResponse<Film>>> {
    return http.getInstance().get<ApiResponse<Film>>('films');
}