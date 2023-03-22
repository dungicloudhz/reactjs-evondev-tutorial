import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CheckboxHook from "./checkbox/CheckboxHook";
import DropDownHook from "./dropdown/DropDownHook";
import InputHook from "./input/InputHook";
import RadioHook from "./radio/RadioHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object({
        username: yup.string().required("Please enter your username"),
        email: yup.string().email().required("Please enter your email address"),
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
            .oneOf(["male", "feMale"], "You can only choose male or female"),
        job: yup
            .string()
            .required("Please select your job")
            .oneOf(["teacher", "developer", "doctor"]),
        terms: yup.boolean().required("Please accest condition..."),
    })
    .required();

const RegisterHook = () => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        control,
        watch,
        formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
    const onSubmitHandler = (values) => {
        if (!isValid) return;
        return new Promise((resolver) => {
            setTimeout(() => {
                resolver();
                console.log(values);
                reset({
                    username: "",
                    email: "",
                    password: "",
                    gender: "male",
                    job: "",
                    terms: false,
                });
            }, 2000);
        });
    };
    const watchGender = watch("gender", "male");
    console.log(watchGender);

    return (
        <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="max-w-[300px] mx-auto my-10"
        >
            <div className="flex flex-col gap-3 mb-5">
                <label htmlFor="username" className="cursor-pointer">
                    Username
                </label>
                <InputHook
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    control={control}
                />
                {errors.username && (
                    <p className="text-red-500 text-sm">
                        {errors.username.message}
                    </p>
                )}
                {/* <p className="text-red-500 text-sm">
                    Please enter your username
                </p> */}
            </div>
            <div className="flex flex-col gap-3 mb-5">
                <label htmlFor="email" className="cursor-pointer">
                    Email
                </label>
                <InputHook
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    control={control}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">
                        {errors.email.message}
                    </p>
                )}
                {/* <p className="text-red-500 text-sm">
                    Please enter your username
                </p> */}
            </div>
            <div className="flex flex-col gap-3 mb-5">
                <label htmlFor="password" className="cursor-pointer">
                    Password
                </label>
                <InputHook
                    id="password"
                    name="password"
                    type="text"
                    placeholder="Enter your password"
                    control={control}
                />
                {errors.password && (
                    <p className="text-red-500 text-sm">
                        {errors.password.message}
                    </p>
                )}
                {/* <p className="text-red-500 text-sm">
                    Please enter your username
                </p> */}
            </div>
            <div className="flex flex-col gap-3 mb-5">
                <label className="cursor-pointer">Gender</label>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-x-3">
                        <RadioHook
                            control={control}
                            name="gender"
                            value="male"
                            checked={watchGender === "male"}
                        />
                        <span>Male</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <RadioHook
                            control={control}
                            name="gender"
                            value="feMale"
                            checked={watchGender === "feMale"}
                        />
                        <span>Female</span>
                    </div>
                </div>
                <div>
                    {errors.gender && (
                        <p className="text-red-500 text-sm">
                            {errors.gender.message}
                        </p>
                    )}
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <label className="cursor-pointer">Are you</label>
                    <DropDownHook
                        dropdownLable="Select your jobs"
                        control={control}
                        setValue={setValue}
                        name="job"
                    />
                </div>
                <div className="">
                    <CheckboxHook
                        name="terms"
                        control={control}
                        text="I accept the terms and conditions"
                    />
                    {errors.terms && (
                        <p className="text-red-500 text-sm">
                            {errors.terms.message}
                        </p>
                    )}
                </div>
            </div>
            <button
                className={`w-full p-3 mt-5 bg-blue-500 text-white rounded-lg ${
                    isSubmitting ? "opacity-50" : ""
                }`}
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent mx-auto animate-spin"></div>
                ) : (
                    "Submit"
                )}
            </button>
        </form>
    );
};

export default RegisterHook;
