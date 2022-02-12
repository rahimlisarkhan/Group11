import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

export class FormikReact extends React.Component {

    myInitialValues = { username: '', password: '', email: '', }
    SingValidator = Yup.object().shape({
        username: Yup.string()
            .min(4, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Too Short!')
            .max(15, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
    });

    constructor() {
        super()

        this.state = {
            netice: null
        }
    }

    myOnSubmit(formum, props) {
        console.log(formum);
        props.resetForm()
        // this.setState({ netice:formum})
    }

    render() {

        return (
            <div>
                <h1>My Form</h1>
                <Formik
                    // validationSchema={this.SingValidator}
                    initialValues={this.myInitialValues}
                    onSubmit={this.myOnSubmit}>

                    {(props) => {
                        return (
                            <Form>
                                <Field type="text" name="username" placeholder="username" />
                                <ErrorMessage name="username" style={{ color: "red" }} component="div" />
                                <br />
                                <Field type="password" name="password" placeholder="password" />
                                <ErrorMessage name="password" component="div" />
                                <br />
                                <Field type="email" name="email" placeholder="email" />
                                <ErrorMessage name="email" component="div" />
                                
                                <br />
                                <br />
                                
                                <div className="form-image-group">
                                    <input id='dowloadImage' type="file" onChange={(e)=>{
                                        props.setFieldValue("img_file",e.target.files[0]);
                                    }} />
                                    <label htmlFor='dowloadImage'>Yukle</label>
                                </div>
                                
                                <br />

                                <button type='submit'>Send</button>
                            </Form>
                        )
                    }}

                </Formik>
            </div>

        )
    }
}

{/* <input type="file" name="photoFile" onChange={(event) => {
    const files = event.target.files;
    props.setFieldValue("photoFile", files[0]);
}} /> */}


{/* <Form>
                        <Field type="text" name="username" placeholder="username" />
                        <ErrorMessage name="username" style={{color:"red"}} component="div" />
                        <br/>
                        <Field type="password" name="password" placeholder="password" />
                        <ErrorMessage name="password" component="div" />
                        <br/>
                        <Field type="email" name="email" placeholder="email" />
                        <ErrorMessage name="email" component="div" />
                        <br/>
                        <input type="file" name="photoFile"  onChange={(event) => {
                                const files = event.target.files;
                                formik.setFieldValue("photoFile", files[0]);
                }}  />

                        <button type='submit'>Send</button>
                    </Form> */}