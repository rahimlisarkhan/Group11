import { Header } from "../../components/Header"
import Head from "next/head"
import { AboutTitle } from "../../feature/about/components/AboutTitle"
import {useRouter} from "next/router"


const PruductPage = () => {

    let muradRouter = useRouter()

    console.log(muradRouter);
    return (
        <>
            <Head>
                <title>Product Page | Foody</title>
            </Head>
            <Header />
            <h1>Product Page</h1>

        </>
    )
}


export default PruductPage