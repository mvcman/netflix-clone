import React from 'react';
import './Banner.css';
import axios from './axios';
import request from './request';

function Banner() {
    const [movie, setMovie] = React.useState([]);
    React.useEffect(() => {
        async function fetchData() {
            const req = await axios.get(request.fetchNetflixOriginals);
            setMovie(
                req.data.results[
                    Math.floor(Math.random() * req.data.results.length - 1)
                ],
            );
            return req;
        }
        fetchData();
    }, []);
    console.log(movie);
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };
    return (
        <div
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner__fadeBottom" />
        </div>
    );
}
export default Banner;
