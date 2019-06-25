import React from 'react';
import {Film} from "../../models/film.model";
import './film-item.scss';

interface Props {
    film: Film,
}
export function FilmItem(props: Props) {
    const {film} = props;

    return (
        <div className="film-item">
            {film.title}
        </div>
    )
}