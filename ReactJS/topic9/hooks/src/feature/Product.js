import { useFetch } from "../hooks/useFetch"


export default function Product(props) {

    let [data,error] = useFetch("https://icanhazdadjoke.com/search?page=1&limit=10",{
        headers: {
            "Accept": "application/json"
        }
    })

    console.log(error);
    
    if(error){
        return <h1>{error}</h1>
    }

    if(!data){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>Product Page</h1>
        </>
    )

}
