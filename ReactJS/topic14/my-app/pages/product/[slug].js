import {useRouter} from "next/router"


const ProductSlugPage = () => {

    let {query} = useRouter()

    return(
        <h1>Product Slug Page {query.slug}</h1>
    )
}


export default ProductSlugPage