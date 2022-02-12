import { Header } from "../../components/Header"
import Head from "next/head"
import { AboutTitle } from "../../feature/about/components/AboutTitle"



const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About Page | Foody</title>
            </Head>
            <Header />
            <h1>About Page</h1>
            <AboutTitle>
                    sub title
            </AboutTitle>
        </>
    )
}


export default AboutPage