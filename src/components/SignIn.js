import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router";
import {Link} from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail(value) {
    if (value === "") return "Email is Required";

    const isValidEmail = emailRegex.test(value);
    if (!isValidEmail) return "Invalid Email";

    return undefined;
}

function validatePassword(value) {
    if (value === "") return "Password is Required";
    if (value.length < 8) return "Too short";
    return undefined;
}

const SignIn = () => {
    const hisotry = useHistory();

    return (
        <div>
            <Header/>
        <Formik
            initialValues={{ password: "", email: "" }}
            onSubmit={values => {
                hisotry.push(`/one/${values.email}`);
            }}
        >
            {formikProps => (
                <Form>
                    <label style={{
                        display:"flex",
                        justifyContent:"center",
                        marginTop:"10em"
                    }} htmlFor="email">Email</label>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        marginTop:"1em"
                    }}>
                        <Field
                            name="email"
                            validate={validateEmail}
                            type="email"
                            placeholder="email"
                        />
                        <ErrorMessage name="email" />
                    </div>
                    <label style={{
                        display:"flex",
                        justifyContent:"center",
                        marginTop:"1.5em"
                    }} htmlFor="email">Password</label>
                    <div
                        style={{
                        display:"flex",
                        justifyContent:"center",
                            marginTop:"1em"

                    }}>
                        <Field
                            name="password"
                            validate={validatePassword}
                            type="text"
                            placeholder="password"
                        />
                        <ErrorMessage name="password" />
                    </div>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        marginTop:"1em"
                    }}>
                    <button style={{
                        padding:"1em",
                        backgroundColor:"green",
                        color:"white"
                    }} type="submit">Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
            <div style={{
                marginTop:"11em"
            }}>
            <Footer/>
            </div>
        </div>
    );
};

export default SignIn;