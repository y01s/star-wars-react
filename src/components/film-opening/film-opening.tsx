import React, {useEffect} from 'react';
import {Film} from "../../models/film.model";
import './film-opening.scss';
import * as d3 from 'd3';

interface Props {
    film: Film,
    isOdd: boolean,
}
export function FilmOpening(props: Props) {
    const {film, isOdd} = props;

    useEffect(() => {
        const openingCrawl = film.opening_crawl.split('\n');
        d3.select('.film-opening')
            .selectAll('div')
            .data(openingCrawl)
            .enter()
            .append('div')
            .transition()
            .duration(750)
            .text((d: string) => d);

    }, []);

    return (
        <div className={'film-opening-container '}>
            <div className="film-opening"></div>
        </div>
    )
}