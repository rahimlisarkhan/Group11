import { ContactForm } from "./components/ContactForm";


 const Contact = () => {


    const addEvent = (form) =>{
        console.log("container",form);
    }

    return(
        <>
             <h1>Contact</h1>
             <ContactForm addEvent={addEvent}/>
        </>
    )
}

export default Contact