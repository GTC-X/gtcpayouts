"use client";
import React from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "@/i18n/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocationDetail } from "../context/useLocationDetail";

export default function TalkToUs() {
    const btnText = "Talk to Us";
    const router = useRouter()
    const { countryCode: originCountry, ip: originIp, countryData } = useLocationDetail("en");

    // ✅ Yup validation schema
    const Schema = Yup.object({
        firstName: Yup.string().trim().required("First name is required"),
        lastName: Yup.string().trim().required("Last name is required"),
        phone: Yup.string()
            .required("Mobile number is required")
            .test("is-valid-phone", "Enter a valid mobile number", (value) =>
                value ? isValidPhoneNumber(value) : false
            ),
        email: Yup.string()
            .trim()
            .email("Enter a valid email")
            .required("Email is required"),
        message: Yup.string().trim().required("Message is required"),
    });

    // ✅ Replace with your API endpoint if needed
    async function submitForm(values) {
        // Example POST (uncomment & set your endpoint):
        // const res = await fetch("/api/contact", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(values),
        // });
        // if (!res.ok) throw new Error("Failed to submit");
        try {
            const res = await axios.post("/api/send-support-email", JSON.stringify(values));
            if (res?.data?.message === "Success") {
                toast.success("Submitted successfully!");
                router.push(`/success?name=${values.firstName}`) // redirect to success page
            } else {
                toast.error("Failed to submit");
            }
            console.log(res)
        } catch (e) {
            console.log(e)
            toast.error("Failed to submit");
        }
    }

    return (
        <div className="relative overflow-hidden font-[Poppins] text-[#0F172A]">
            {/* page container */}
            <div className="relative">
                {/* main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* left copy */}
                    <div className="lg:col-span-6 xl:col-span-7 text-center md:text-left">
                        <h1 className="mt-2 md:text-[76px] text-[50px] leading-[64px] md:leading-[96px] tracking-[-0.02em] font-bold">
                            <span className="text-[#b88857]">Talk to Us</span>{" "}
                        </h1>

                        <p className="mt-4 max-w-[520px] md:text-[22px] md:leading-[32px] text-[16px] leading-[20px] text-[#04417B]">
                            If you’ve got a question about joining us as a Forex Affiliate or
                            as an Introducing Broker, go ahead and send it over to us. Simply
                            fill in the form and we’ll get back to you!
                        </p>
                    </div>

                    {/* right card with tabs */}
                    <div className="lg:col-span-6 xl:col-span-5">
                        <div
                            className="rounded-[16px] bg-white border border-[#EEF2F7]"
                            style={{ boxShadow: "1px 6px 16px 0px #0000001A" }}
                        >
                            {/* form */}
                            <div className="p-6 lg:p-7">
                                <Formik
                                    initialValues={{
                                        firstName: "",
                                        lastName: "",
                                        phone: "",
                                        email: "",
                                        message: "",
                                    }}
                                    validationSchema={Schema}
                                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                                        try {
                                            await submitForm(values);
                                            resetForm();
                                            // You can show a toast here
                                        } catch (e) {
                                            alert(e?.message || "Something went wrong.");
                                        } finally {
                                            setSubmitting(false);
                                        }
                                    }}
                                    validateOnBlur
                                    validateOnChange={false}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        isSubmitting,
                                        isValid,
                                        setFieldValue,
                                        setFieldTouched,
                                    }) => (
                                        <Form noValidate>
                                            {/* First / Last */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-[14px] text-[#04417B] mb-1">
                                                        First Name
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="firstName"
                                                        placeholder="First Name (e.g., John)"
                                                        className={`w-full h-[42px] rounded-[8px] border px-3 text-[14px] placeholder:text-[#A3AAB5] outline-none focus:border-[#0c143a] focus:ring-2 focus:ring-[#0c143a]/15 ${touched.firstName && errors.firstName
                                                            ? "border-red-400"
                                                            : "border-[#E5E7EB]"
                                                            }`}
                                                    />
                                                    <ErrorMessage
                                                        name="firstName"
                                                        component="div"
                                                        className="mt-1 text-[12px] text-red-500"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-[14px] text-[#04417B] mb-1">
                                                        Last Name
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="lastName"
                                                        placeholder="Last Name (e.g., Doe)"
                                                        className={`w-full h-[42px] rounded-[8px] border px-3 text-[14px] placeholder:text-[#A3AAB5] outline-none focus:border-[#0c143a] focus:ring-2 focus:ring-[#0c143a]/15 ${touched.lastName && errors.lastName
                                                            ? "border-red-400"
                                                            : "border-[#E5E7EB]"
                                                            }`}
                                                    />
                                                    <ErrorMessage
                                                        name="lastName"
                                                        component="div"
                                                        className="mt-1 text-[12px] text-red-500"
                                                    />
                                                </div>
                                            </div>

                                            {/* Mobile */}
                                            <div className="mt-4">
                                                <label className="block text-[14px] text-[#04417B] mb-1">
                                                    Mobile Number
                                                </label>
                                                <div
                                                    className={`rounded-md border ${touched.phone && errors.phone
                                                        ? "border-red-400"
                                                        : "border-[#E5E7EB]"
                                                        } bg-white`}
                                                >
                                                    <PhoneInput
                                                        id="phone"
                                                        name="phone"
                                                        international
                                                        defaultCountry={countryData?.country ?? "AE"}
                                                        countryCallingCodeEditable={false}
                                                        value={values.phone}
                                                        onChange={(val) => setFieldValue("phone", val)}
                                                        onBlur={() => setFieldTouched("phone", true)}
                                                        className="phone-setting !px-2 text-[#0F172A]"
                                                    />
                                                </div>
                                                {touched.phone && errors.phone && (
                                                    <div className="mt-1 text-[12px] text-red-500">
                                                        {errors.phone}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Email */}
                                            <div className="mt-4">
                                                <label className="block text-[14px] text-[#04417B] mb-1">
                                                    Email
                                                </label>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    placeholder="example@mail.com"
                                                    className={`w-full h-[42px] rounded-[8px] border px-3 text-[14px] placeholder:text-[#A3AAB5] outline-none focus:border-[#0c143a] focus:ring-2 focus:ring-[#0c143a]/15 ${touched.email && errors.email
                                                        ? "border-red-400"
                                                        : "border-[#E5E7EB]"
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    name="email"
                                                    component="div"
                                                    className="mt-1 text-[12px] text-red-500"
                                                />
                                            </div>

                                            {/* Message */}
                                            <div className="mt-4">
                                                <label className="block text-[14px] text-[#04417B] mb-1">
                                                    Message
                                                </label>
                                                <Field
                                                    as="textarea"
                                                    name="message"
                                                    placeholder="Add text here..."
                                                    rows={6}
                                                    className={`w-full rounded-[8px] border p-3 text-[14px] placeholder:text-[#A3AAB5] outline-none focus:border-[#0c143a] focus:ring-2 focus:ring-[#0c143a]/15 ${touched.message && errors.message
                                                        ? "border-red-400"
                                                        : "border-[#E5E7EB]"
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    name="message"
                                                    component="div"
                                                    className="mt-1 text-[12px] text-red-500"
                                                />
                                            </div>

                                            {/* Submit */}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting || !isValid}
                                                className={`mt-10 inline-flex w-full items-center justify-center cursor-pointer gap-2 h-[46px] rounded-[10px] font-medium text-[18px] transition
                          ${isSubmitting || !isValid
                                                        ? "bg-[#EEF2F7] text-[#A0AEC0] cursor-not-allowed"
                                                        : "bg-[#b88857] text-white hover:opacity-90"
                                                    }`}
                                            >
                                                {isSubmitting ? "Submitting..." : btnText}
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
