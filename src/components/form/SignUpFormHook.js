import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schemaValidation = yup.object({
    firstName: yup
        .string()
        .required()
        .max(10, "The characters is required less 10 keys"),
});

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        control,
        setFocus,
        formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    } = useForm({
        resolver: yupResolver(schemaValidation),
        mode: "onChange",
    });
    const watchTerms = watch("terms", false);
    const onSubmit = async (values) => {
        console.log(values);
        reset({
            firstName: "",
            lastName: "",
            email: "",
        });
    };
    useEffect(() => {
        setFocus("email");
    }, [setFocus]);
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-10 max-w-[500px] mx-auto"
            >
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        {...register("firstName")}
                        // {...register("firstName", {
                        //     required: true,
                        //     maxLength: 10,
                        // })}
                        placeholder="Enter Your First Name"
                        className="p-4 rounded-md border outline-none border-gray-400"
                    />
                    {errors?.firstName?.message && (
                        <div className="text-red-500 text-sm">
                            {errors.firstName.message}
                        </div>
                    )}
                    {/* {errors?.firstName?.type === "max" && (
                        <div className="text-red-500 text-sm">
                            {errors.firstName.message}
                        </div>
                    )} */}
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="lastName">Last Name</label>
                    <MyInput
                        name="lastName"
                        id="lastName"
                        placeholder="Enter Your Last Name"
                        control={control}
                    ></MyInput>
                    {/* <input
                        type="text"
                        name="lastName"
                        {...register("lastName")}
                        id="lastName"
                        placeholder="Enter Your Last Name"
                        className="p-4 rounded-md border outline-none border-gray-400"
                    /> */}
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        {...register("email")}
                        id="email"
                        placeholder="Enter Your Email"
                        className="p-4 rounded-md border outline-none border-gray-400"
                    />
                </div>
                {/* <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="intro">Intro</label>
                    <input
                        name="intro"
                        id="intro"
                        placeholder="Enter Your Intro"
                        className="p-4 rounded-md border outline-none border-gray-400 h-[150px] resize"
                        as="textarea"
                    />
                </div> */}

                <div className=" mb-5">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="terms"
                            id="terms"
                            className="p-4 rounded-md border outline-none border-gray-400"
                            {...register("terms")}
                        />
                        <p htmlFor="terms">I accept the terms and conditions</p>
                    </div>
                    {watchTerms && (
                        <input type="number" placeholder="Number..." />
                    )}
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
                    >
                        {isSubmitting ? (
                            <div className="mx-auto w-5 h-5 border-2 border-white border-t-4 border-t-transparent rounded-full animate-spin "></div>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

const MyInput = ({ control, ...props }) => {
    const { field } = useController({
        control,
        name: props.name,
        defaultValue: "",
    });
    return (
        <input
            className="p-4 rounded-md border outline-none border-gray-400"
            {...props}
            {...field}
        />
    );
};

// const MyInput = ({ control, ...props }) => {
//     return (
//         <Controller
//             name={props.name}
//             defaultValue=""
//             control={control}
//             render={({ field }) => (
//                 <input
//                     className="p-4 rounded-md border outline-none border-gray-400"
//                     {...props}
//                     {...field}
//                 />
//             )}
//         ></Controller>
//     );
// };
export default SignUpForm;
