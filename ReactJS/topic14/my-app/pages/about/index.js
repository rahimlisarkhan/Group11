import { Header } from "../../components/Header"
import Head from "next/head"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "../../store/homeSlice"
import dynamic from 'next/dynamic'

// const AboutTitle = dynamic(() => import('../../feature/about/components/AboutTitle'))
const AboutTitle = dynamic(
    () => import('../../feature/about/components/AboutTitle'),
    { loading: () => <p>Loading...</p> }
  )
const AboutPage = (props) => {

    const count = useSelector((state) => state.home.value)
    const dispatch = useDispatch()

    const writeData = () => {
        dispatch(increment())
    }

    return (
        <>
            <Head>
                <title>About Page | Foody</title>
            </Head>
            <Header />
            <h1>About Page {count}</h1>
            <AboutTitle>
                    sub title, edit
            </AboutTitle>
            <button onClick={writeData}>send</button>
        </>
    )
}


export default AboutPage


export const getServerSideProps = async () => {


    return {
        props:{
            data:"test"
        }
    }


}