import { useEffect, useState } from "react";
import api from "../../services/api";

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: '078d0a638a1a05ed7822bf6005d9bda4',
                    language: 'pt-br',
                    page: 1,
                }
            })
            console.log(response.data.results);
        }
        loadFilmes();
    }, [])


    return (
        <h1>Bem-vindo a home</h1>
    )
}

export default Home;