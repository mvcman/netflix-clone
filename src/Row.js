import React, { useEffect } from 'react';
import './Row.css';
import axios from './axios';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = React.useState([]);
    const baseUrl = 'https://image.tmdb.org/t/p/original/';
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(fetchUrl);
            setMovies(req.data.results);
        }
        fetchData();
    }, [fetchUrl]);
    console.log(movies);
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map(
                    (m, i) =>
                        ((isLargeRow && m.poster_path) ||
                            (!isLargeRow && m.backdrop_path)) && (
                            <img
                                className={
                                    isLargeRow
                                        ? 'row__poster row__posterLarge'
                                        : 'row__poster'
                                }
                                key={i}
                                src={`${baseUrl}${
                                    isLargeRow ? m.poster_path : m.backdrop_path
                                }`}
                                alt={m.name}
                            />
                        ),
                )}
            </div>
        </div>
    );
}

export default Row;
