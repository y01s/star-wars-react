import React, {useEffect, useState} from 'react';
import * as filmsService from './../../services/api/films/films.service';
import {Film} from "../../models/film.model";
import {ApiResponse, HttpResponse} from "../../services/api/http.service";

function FilmsList() {

    const [films, setFilms] = useState<Array<Film>>([]);

    useEffect(() => {
        filmsService.getFilms()
            .then((res:HttpResponse<ApiResponse<Film>>) => {
                setFilms(res.data.results);
            })
    }, []);

    const renderFilms = () => {
        return films.map((film:any) => {
            return (
                <div key={film.url}>{film.title}</div>
            )
        });
    }
    return <div className="films-container">{renderFilms()}</div>
}

export default FilmsList;