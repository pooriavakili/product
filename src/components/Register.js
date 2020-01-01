import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const labelEmail={
    display:"flex",
    justifyContent:"center",
    marginTop:"10em"
}
const Email={
    display:"flex",
    justifyContent:"center",
    marginTop:"1em"
}
const LabelPassword={
    display:"flex",
    justifyContent:"center",
    marginTop:"1.5em"
}
const Password={
    display:"flex",
    justifyContent:"center",
    marginTop:"1em"
}
const labelButton={
    display:"flex",
    justifyContent:"center",
    marginTop:"1em"
}
const Button={
    padding:"1em",
    backgroundColor:"green",
    color:"white"
}
const Footers={
    marginTop:"11em"
}
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

const Register = () => {
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
                        <label style={labelEmail} htmlFor="email">Email</label>
                        <div style={Email}>
                            <Field
                                name="email"
                                validate={validateEmail}
                                type="email"
                                placeholder="email"
                            />
                            <ErrorMessage name="email" />
                        </div>
                        <label style={
                            LabelPassword} htmlFor="email">Password</label>
                        <div style={Password}>
                            <Field
                                name="password"
                                validate={validatePassword}
                                type="text"
                                placeholder="password"
                            />
                            <ErrorMessage name="password" />
                        </div>
                        <div style={labelButton}>
                            <button style={Button}  type="submit">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div style={Footers}>
                <Footer/>
            </div>
        </div>
    );
};

export default Register;