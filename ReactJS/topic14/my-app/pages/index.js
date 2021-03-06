import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Header } from '../components/Header'
import { getJokes } from '../services/home'
import styles from '../styles/Home.module.css'

const Home = (props) => {

  // useEffect(()=>{

  //   getJokes()

  // },[])


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />

      <main className={styles.main}>
          {props.movie.Search.map((item) => (
            <ul key={item.imdbID}>
              <li>{item.Title}</li>
              <li>{item.Year}</li>
            </ul>
          ))}
      </main>

    </div>
  )
}

export default Home


export const getServerSideProps = async (context) => {


  let res

     res = await getJokes()

     if(!res){
       return {
         notFound:true
       }
     }
   
  return {
    props: {
      movie:  res.data
    }
  }
}