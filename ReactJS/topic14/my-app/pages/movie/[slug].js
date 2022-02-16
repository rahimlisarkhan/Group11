import { useRouter } from "next/router"
import { getMovieSlug } from "../../services/home"


const ProductSlugPage = (props) => {

    let { query } = useRouter()

    return (
        <>
            {/* <h1>Product Slug Page {query.slug}</h1> */}
            <img width="400" src={props.data.Poster} alt={props.data.Title} />
            <h1>{props.data.Title}</h1>
            <h3>{props.data.Year}</h3>
        </>
    )
}


export default ProductSlugPage


export const getServerSideProps = async (context) => {

    let res = await getMovieSlug(context.query.slug)

    return {
        props: {
            data: res.data
        }
    }

}