import '../styles/globals.css'
import Head from "next/head"
import { store } from '../store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </>
  )

}

export default MyApp
