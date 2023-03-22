import React from "react";
import InputFormik from "./input/InputFormik";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import RadioFormik from "./radio/RadioFormik";
import CheckboxFormik from "./checkbox/CheckboxFormik";
import DropDownFormik from "./dropdown/DropDownFormik";
const RegisterFormik = () => {
    return (
        <Formik
            initialValues={{
                username: "",
                email: "",
                password: "",
                gender: "male",
                job: "",
                terms: false,
            }}
            validationSchema={yup.object({
                username: yup.string().required("Please enter your username"),
                email: yup
                    .string()
                    .email()
                    .required("Please enter your email address"),
                password: yup
                    .string()
                    .min(8, "Your password must be 8 characters or most")
                    .matches(
                        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        "Your password must have at least 8 characters, 1 uppercase"
                    )
                    .required("Please enter your password"),
                gender: yup
                    .string()
                    .required("Please select your gender")
                    .oneOf(
                        ["male", "feMale"],
                        "You can only choose male or female"
                    ),
                job: yup
                    .string()
                    .required("Please select your job")
                    .oneOf(["teacher", "developer", "doctor"]),
                terms: yup
                    .boolean()
                    .oneOf([true], "Please check the term and condition"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    resetForm();
                }, 2000);
            }}
        >
            {(formik) => {
                const watchGender = formik.values.gender;

                return (
                    <form
                        onSubmit={formik.handleSubmit}
                        className="max-w-[300px] mx-auto my-10"
                    >
                        {/* <div className="flex flex-col gap-3 mb-5">
                        <label htmlFor="username" className="cursor-pointer">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            className="p-4 border-gray-100 border outline-none rounded-lg bg-white focus:border-blue-500 transition-all"
                            {...formik.getFieldProps("username")}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <p className="text-red-500 text-sm">
                                {formik.errors.username}
                            </p>
                        ) : null}
                        <p className="text-red-500 text-sm">
                            Your errors message
                        </p>
                    </div> */}
                        <InputFormik
                            name="username"
                            placeholder="Enter your username"
                            id="username"
                            label="Username"
                            type="text"
                        />
                        <InputFormik
                            name="email"
                            placeholder="Enter your email"
                            id="email"
                            label="Email"
                            type="email"
                        />
                        <InputFormik
                            name="password"
                            placeholder="Enter your password"
                            id="password"
                            label="Password"
                            type="text"
                        />
                        <div className="flex flex-col gap-3 mb-5">
                            <label className="cursor-pointer">Gender</label>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-x-3">
                                    <RadioFormik
                                        name="gender"
                                        value="male"
                                        checked={watchGender === "male"}
                                        label="Male"
                                    />
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <RadioFormik
                                        name="gender"
                                        value="feMale"
                                        checked={watchGender === "feMale"}
                                        label="Female"
                                    />
                                </div>
                            </div>
                            <DropDownFormik
                                name="job"
                                dropdownLable="Select your jobs"
                                labelText="Are you"
                                setValue={formik.setFieldValue}
                            />
                            <CheckboxFormik name="terms">
                                I accept the terms and conditions
                            </CheckboxFormik>
                            {/* <div>
                    {errors.gender && (
                        <p className="text-red-500 text-sm">
                            {errors.gender.message}
                        </p>
                    )}
                </div> */}
                        </div>
                        <button
                            type="submit"
                            className={`w-full p-3 mt-5 bg-blue-500 text-white rounded-lg ${
                                formik.isSubmitting ? "opacity-50" : ""
                            }`}
                            disabled={formik.isSubmitting}
                        >
                            {formik.isSubmitting ? (
                                <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent mx-auto animate-spin"></div>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </form>
                );
            }}
        </Formik>
    );
};

export default RegisterFormik;
