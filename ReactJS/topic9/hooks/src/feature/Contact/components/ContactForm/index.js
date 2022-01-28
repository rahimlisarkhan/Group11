import { useFormik } from 'formik';


export const ContactForm = (props) => {

    let initialValues = {
        username: '',
        email: '',
    }
    const onSubmit = (values,actions) => {
        props.addEvent(values)
        actions.resetForm()
    }

    const validate = (values) => {
        let errors = {};

        if(!values.email){
            errors.email = "Ejdaha email yaz"
        }

        if(values.username.length < 5){
            errors.username = "Adam kimi username yaz"
        }

        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <input name="username" onChange={formik.handleChange} value={formik.values.username} />
            {formik.errors.username && <div>{formik.errors.username}</div>}
            <br />
            <br />
            <input name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
            {formik.errors.email && <div>{formik.errors.email}</div>}
            <br />
            <button type="submit">Send</button>
        </form>
    )
}