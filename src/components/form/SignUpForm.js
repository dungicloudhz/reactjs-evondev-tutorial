import React from "react";
import { Field, Form, Formik, useFormik, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
const SignUpForm = () => {
    // const validate = (values) => {
    //     const errors = {};
    //     if (!values.firstName) {
    //         errors.firstName = "Required";
    //     } else if (values.firstName.length > 20) {
    //         errors.firstName = "Must be 20 characters or less";
    //     }
    //     if (!values.lastName) {
    //         errors.lastName = "Required";
    //     } else if (values.lastName.length > 20) {
    //         errors.lastName = "Must be 20 characters or less";
    //     }
    //     return errors;
    // };

    // const formik = useFormik({
    //     onSubmit: (values) => {
    //         console.log(values);
    //     },
    // });
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                intro: "",
                job: "",
                terms: false,
            }}
            // validationSchema={Yup.object({
            //     firstName: Yup.string().required("Required"),
            //     lastName: Yup.string().required("Required"),
            //     email: Yup.string().email().required("Required"),
            //     intro: Yup.string().required("Required"),
            //     job: Yup.string().required("Required"),
            //     terms: Yup.boolean().oneOf(
            //         [true],
            //         "Please check the terms and conditions"
            //     ),
            // })}
            onSubmit={(values, actions) => {
                console.log(actions);
                console.log(values);
            }}
            autoComplete="off"
        >
            <Form className="p-10 max-w-[500px] mx-auto">
                {/* <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                        type="text"
                        name="firstName"
                        placeholder="Enter Your First Name"
                        className="p-4 rounded-md border outline-none border-gray-400"
                    />
                    <div className="text-red-500">
                        <ErrorMessage name="firstName"></ErrorMessage>
                    </div>
                </div> */}
                <MyInput
                    label="First Name"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter Your First Name"
                />
                <MyInput
                    label="Last Name"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Your Last Name"
                />
                <MyInput
                    label="Email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                />
                {/* <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter Your Last Name"
                        className="p-4 rounded-md border outline-none border-gray-400"
                    />
                    <div className="text-red-500">
                        <ErrorMessage name="lastName"></ErrorMessage>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="email">Email</label>
                    <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        className="p-4 rounded-md border outline-none border-gray-400"
                    />
                    <div className="text-red-500">
                        <ErrorMessage name="email"></ErrorMessage>
                    </div>
                </div> */}
                {/* <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="intro">Intro</label>
                    <Field
                        name="intro"
                        id="intro"
                        placeholder="Enter Your Intro"
                        className="p-4 rounded-md border outline-none border-gray-400 h-[150px] resize"
                        as="textarea"
                    />
                    <div className="text-red-500">
                        <ErrorMessage name="intro"></ErrorMessage>
                    </div>
                </div> */}
                <MyTextarea
                    label="Intro"
                    name="intro"
                    id="intro"
                    placeholder="Enter Your Intro"
                />
                {/* <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="job">Job</label>
                    <Field
                        type="job"
                        name="job"
                        placeholder="Enter Your Job"
                        className="p-3 rounded-md border outline-none border-gray-400"
                        as="select"
                    >
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="fullstack">Fullstack Developer</option>
                    </Field>
                    <div className="text-red-500">
                        <ErrorMessage name="job"></ErrorMessage>
                    </div>
                </div> */}
                <MySelect name="job" id="job" label="Job">
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Fullstack Developer</option>
                </MySelect>
                <div className=" mb-5">
                    <div className="flex items-center gap-2">
                        <Field
                            type="checkbox"
                            name="terms"
                            id="terms"
                            className="p-4 rounded-md border outline-none border-gray-400"
                        />
                        <p htmlFor="terms">I accept the terms and conditions</p>
                    </div>
                    <div className="text-red-500">
                        <ErrorMessage name="terms"></ErrorMessage>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </Form>
        </Formik>
    );
};

const MyInput = (props) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col gap-2 mb-5">
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <input
                {...field}
                {...props}
                type="text"
                className="p-4 rounded-md border border-gray-100"
            />
            {meta.touched && meta.error ? (
                <div className="error text-sm text-red-500">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MyTextarea = (props) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col gap-2 mb-5">
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <textarea
                {...field}
                {...props}
                className="p-4 rounded-md border outline-none border-gray-400 h-[150px] resize"
            />
            {meta.touched && meta.error ? (
                <div className="error text-sm text-red-500">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MySelect = (props) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col gap-2 mb-5">
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <select
                {...field}
                {...props}
                className="p-3 rounded-md border outline-none border-gray-400"
            />
            {meta.touched && meta.error ? (
                <div className="error text-sm text-red-500">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MyCheckbox = (props) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col gap-2 mb-5">
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <select
                {...field}
                {...props}
                className="p-3 rounded-md border outline-none border-gray-400"
            />
            {meta.touched && meta.error ? (
                <div className="error text-sm text-red-500">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default SignUpForm;
