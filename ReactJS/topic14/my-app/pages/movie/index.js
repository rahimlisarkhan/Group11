import { Header } from "../../components/Header"
import Head from "next/head"
import { useRouter } from "next/router"
import { getJokes } from "../../services/home"


const MoviePage = (props) => {

    let router = useRouter()

    console.log(props);

    return (
        <>
            <Head>
                <title>Product Page | Foody</title>
            </Head>
            <Header />
            <h1>Movie Page</h1>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {props.movie.Search.map(item => (
                    <div key={item.imdbID} style={{ margin: 20 }} onClick={() => router.push(`/movie/${item.Title}`)}>
                        <img width="200" src={item.Poster} />
                        <h2>{item.Title}</h2>
                        <h3>{item.Year}</h3>
                    </div>
                ))}
            </div>

        </>
    )
}


export default MoviePage



export const getServerSideProps = async (context) => {


    let res

    res = await getJokes()


    if (!res) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            movie: res.data
        }
    }
}