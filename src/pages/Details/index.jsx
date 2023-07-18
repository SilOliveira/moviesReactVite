import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Container } from "./styles";

const api_key= import.meta.env.VITE_API_KEY;
const image_path=`https://image.tmdb.org/t/p/w1280`;

function Details() {

    const {id} = useParams()

    const[movie, setMovie] = useState({})

    useEffect(() => {

        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
        .then (response => response.json())
        .then (data => {
            
            const movie = {
                id,
                title:data.title,
                sinopse:data.overview,
                image:`${image_path + data.backdrop_path}`,
                releaseDate: data.release_date,
            }
            
            setMovie (movie)
           
        })
}  , [id])

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt="{sinopse}" /> 
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse:{movie.sinopse}</span>
                    <span className="release-date">Release date:  {movie.releaseDate}</span>
                    <Link to="/"><button>Go Back</button></Link>
                    
                </div>
            </div> 

        </Container>
    )
}

export default Details