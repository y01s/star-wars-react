import React from 'react';
import {Film} from "../../models/film.model";
import './film-opening.scss';

interface Props {
    film: Film,
    isOdd: boolean,
}
export function FilmOpening(props: Props) {
    const {film, isOdd} = props;

    return (
        <div className={'film-opening-container ' + (isOdd ?  'right' : '')}>
            <div className="film-opening">
                {film.opening_crawl}
            </div>
        </div>
    )
}