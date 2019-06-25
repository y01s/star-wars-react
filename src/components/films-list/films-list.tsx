import React, {useEffect, useState} from 'react';
import * as filmsService from './../../services/api/films/films.service';
import {Film} from "../../models/film.model";
import {ApiResponse, HttpResponse} from "../../services/api/http.service";
import {FilmItem} from "../film-item/film-item";
import './films-list.scss';

function FilmsList() {

    const [films, setFilms] = useState<Array<Film>>([]);

    useEffect(() => {
        filmsService.getFilms()
            .then((res:HttpResponse<ApiResponse<Film>>) => {
                setFilms(res.data.results);
            })
    }, []);

    const renderFilms = () => {
        return films.map((film:Film, index: number) => {
            return (
                <FilmItem key={film.url} film={film} isOdd={index%2 !== 0}/>
            )
        });
    }
    return <div className="films-container">{renderFilms()}</div>
}

export default FilmsList;