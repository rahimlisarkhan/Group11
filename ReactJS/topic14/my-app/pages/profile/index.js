import { useRouter } from "next/router"
import Image from "next/image"
import useSWR from 'swr'
import axios from "axios"
import { getProfile } from "../../services/home"
import { push } from "firebase/database"
import { useEffect } from "react"


export default function ProfilePage (){

    let auth = null
    let router = useRouter()
    const myObject = useSWR("http://www.omdbapi.com/?t=El%20Camino:%20A%20Breaking%20Bad%20Movie&apikey=a407a7b3",getProfile)


    useEffect(()=>{
        if(!auth) {
            router.push("/")
        }

    },[auth,router])



    if(!auth) {
        return <h1>Loading</h1>
    }

    return(
        <div>
            <h1>Profile</h1>
            <Image src="/images/flower.jpg"  width="200" height="200" alt="Flower"/>
        </div>
    )
}


export async function getServerSideProps(context) {
    let {category,name} = context.query

    // let res = await getProducts(category,name)

    return {
        props:{}
    }
}