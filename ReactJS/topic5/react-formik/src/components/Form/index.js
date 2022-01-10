import React from 'react';
import { Formik, Form, Field,ErrorMessage  } from 'formik';
import * as Yup from "yup";

export class FormikReact extends React.Component {
    
    myInitialValues = { username: '', password: '',email:'',file:"" }
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

    constructor(){
        super()

        this.state = {
            netice:null
        }
    }

    myOnSubmit(formum){
        console.log(formum);
        this.setState({ netice:formum})
    }

    render() {

        console.log("Yene isledi");
        return (
            <div>
                <h1>My Form</h1>
                <Formik
                    validationSchema={this.SingValidator}
                    initialValues={this.myInitialValues}
                    onSubmit={this.myOnSubmit}>
                    <Form>
                        <Field type="text" name="username" placeholder="username" />
                        <ErrorMessage name="username" style={{color:"red"}} component="div" />
                        <br/>
                        <Field type="password" name="password" placeholder="password" />
                        <ErrorMessage name="password" component="div" />
                        <br/>
                        <Field type="email" name="email" placeholder="email" />
                        <ErrorMessage name="email" component="div" />
                        <br/>
                        <Field type="file" name="file" placeholder="email" />

                        <button type='submit'>Send</button>
                    </Form>
                </Formik>
            </div>
            
        )
    }
}

