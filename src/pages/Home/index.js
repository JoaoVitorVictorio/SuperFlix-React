import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: '078d0a638a1a05ed7822bf6005d9bda4',
                    language: 'pt-br',
                    page: 1,
                }
            })
            setFilmes(response.data.results.slice(0, 10))
            setLoading(false);
            console.log(response.data.results)
        }
        loadFilmes();
    }, [])


    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filme...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>
                                {filme.title}
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </strong>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;