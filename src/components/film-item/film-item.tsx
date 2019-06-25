import React, {useState} from 'react';
import {Film} from "../../models/film.model";
import './film-item.scss';
import {FilmOpening} from "../film-opening/film-opening";

interface Props {
    film: Film,
    isOdd: boolean,
}
export function FilmItem(props: Props) {
    const {film, isOdd} = props;
    const [isOpeningOn, setIsOpeningOn] = useState<boolean>(false);

    const hideOpening = () => {
        setIsOpeningOn(false);
    };

    const showOpening = () => {
        setIsOpeningOn(true);
    };

    return (
        <div className="film-item" onMouseOver={showOpening} onMouseLeave={hideOpening}>
            {film.title}
            {
                isOpeningOn && (
                    <FilmOpening film={film} isOdd={isOdd}/>
                )
            }
        </div>
    )
}