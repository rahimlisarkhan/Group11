
export const Auth = (Component) => {

   return ()=>{
       
        let auth = true

        if(auth){
            return <Component/>
        }

        return <h1>Zehmet olmasa Qeydiyyadan kecin</h1>
   } 
}
