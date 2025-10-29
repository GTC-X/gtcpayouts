
'use client';

import React, { useMemo, useState, useEffect, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLocationDetail } from "../context/useLocationDetail";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import OtpInput from 'react-otp-input';
import Select from 'react-select';
import { countryList } from "../context/useCountriesDetails";
// import { countries as phoneAllowed } from './defaultCountries';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Logo from '../assets/logogtcpay.png'

const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Step1Schema = Yup.object({
    first_name: Yup.string()
        .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi, 'Only contain letters.')
        .required('First name is required'),
    last_name: Yup.string()
        .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi, 'Only contain letters.')
        .required('Last name is required'),
    email: Yup.string().matches(EmailRegex, 'Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    country: Yup.string().required('Country is required'),
    Password: Yup.string().required('Password is required'),
    // otp required but validated by UI before advancing
    otp: Yup.string().length(6, 'Enter 6 digits'),
});

const Step2Schema = Yup.object({
    mainTargetCountries: Yup.array().min(1, 'Select at least one country'),
    promotionMethod: Yup.string().required('Select a method'),
    affiliateOtherBroker: Yup.string().required('Select an option'),
    monthlyClients: Yup.string().matches(/^[0-9]+$/, 'Numbers only').required('Required'),
    hasGtcAccount: Yup.string().required('Select an option'),
    terms: Yup.bool().oneOf([true], 'You must accept Terms'),
});

const promotionMethods = [
    'Social Media',
    'SEO / Blog',
    'Paid Ads',
    'Email Marketing',
    'Influencer / KOL',
    'Other',
];

const yesNo = ['Yes', 'No'];

const AffiliatedForm = ({ title = 'Register Now', subtitle = '' }) => {
    const searchParams = useSearchParams();
    const path = usePathname();
    const { countryCode: originCountry, ip: originIp, countryData } = useLocationDetail("en");

    // Stepper & OTP state
    const [step, setStep] = useState(0);
    const [otpOpen, setOtpOpen] = useState(false);
    const [otpLoading, setOtpLoading] = useState(false);
    const [storedEmailOtp, setStoredEmailOtp] = useState('');
    const [emailVerified, setEmailVerified] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Build country options with flag (react-select)
    const countryOptions = useMemo(
        () =>
            countryList?.map((c) => ({
                value: c.en_short_name,
                code: c.alpha_2_code,
                label: (
                    <div className="flex items-center gap-2">
                        <img
                            src={`https://flagcdn.com/w40/${c.alpha_2_code.toLowerCase()}.png`}
                            alt={c.en_short_name}
                            className="w-5 h-4 object-cover"
                        />
                        <span>{c.en_short_name}</span>
                    </div>
                ),
            })),
        []
    );

    const defaultCountryName =
        countryList?.find((n) => n.alpha_2_code == originCountry)?.en_short_name ||
        'UAE (United Arab Emirates)';

    useEffect(() => {
        if (countryData?.country) {
            const filterData = countryList.find(
                (item) => item?.alpha_2_code == countryData.country
            );
            formik.setFieldValue(
                "country",
                filterData ? filterData?.en_short_name : ""
            );
        }
    }, [countryData?.country, countryList]);

    const formik = useFormik({
        initialValues: {
            // meta / utm
            ip: '',
            fbclid: '',
            utm_campain: '',
            utm_source: '',
            // step1
            first_name: '',
            last_name: '',
            email: '',
            confirmEmail: '',
            phone: '',
            country: defaultCountryName,
            Password: '',
            ConfirmPassword: '',
            skype: '', // using as "Microsoft Teams ID" to match your old payload
            telegramId: '',
            otp: '',
            // step2
            mainTargetCountries: [],
            promotionMethod: '',
            affiliateOtherBroker: '',
            monthlyClients: '',
            hasGtcAccount: '',
            terms: false,
            // extras from your previous submit
            marketingChannel: '',
            website: '',
            userName: '', // if empty we’ll send email as username
        },
        validateOnBlur: true,
        validateOnChange: false,
        validationSchema: step === 0 ? Step1Schema : Step2Schema,
        onSubmit: async (values) => {
            // require OTP by geo: EU(S) => phone; otherwise email
            if (step === 0) return;
            if (originCountry === 'EUS' ? !phoneVerified : !emailVerified) {
                toast.error(('otp_not_verified'));
                return;
            }

            // fallback username = email if missing
            const payload = { ...values, userName: values.userName || values.email };

            try {
                setSubmitting(true);

                // 1) Zapier
                await axios.post(
                    'https://hooks.zapier.com/hooks/catch/16420445/utrkgne/',
                    JSON.stringify(payload)
                );

                // 2) CellXpert
                await sendToCellxpertAPI(payload);

                toast.success("Successfully Submitted");
                formik.resetForm();
                setStep(0);
                setEmailVerified(false);
                setOtpOpen(false);
            } catch (err) {
                console.error(err);
                toast.error('Submission failed');
            } finally {
                setSubmitting(false);
            }
        },
    });

    // Set UTM + IP after mount
    useEffect(() => {
        formik.setFieldValue('ip', originIp || '');
        formik.setFieldValue('utm_campain', path || '');
        formik.setFieldValue('utm_source', searchParams.get('utm_source') || '');
        formik.setFieldValue('fbclid', searchParams.get('fbclid') || '');
    }, [originIp, path, searchParams]);

    // ====== OTP: Email ======
    const sendEmailOtp = async () => {
        if (!EmailRegex.test(formik.values.email)) {
            toast.error('Invalid email');
            return;
        }
        setOtpLoading(true);
        try {
            const res = await axios.post(`/api/otp-smtp`, {
                email: formik.values.email,
                first_name: formik.values.first_name,
                locale: "en",
                type: '0',
            });
            if (res?.data?.message) {
                setStoredEmailOtp(res.data.message.slice(4, -3)); // same as your backend
                setOtpOpen(true);
                toast.success(` ${formik.values.email}`);
            } else {
                toast.error("Error");
            }
        } catch {
            toast.error("Error");
        } finally {
            setOtpLoading(false);
        }
    };

    const verifyEmailOtp = () => {
        if (formik.values.otp && storedEmailOtp && formik.values.otp === storedEmailOtp) {
            setEmailVerified(true);
            toast.success("Varified");
            setOtpOpen(false);
        } else {
            setEmailVerified(false);
            toast.error("Not Verified");
        }
    };

    // ====== CellXpert submit (kept as in your code) ======
    const sendToCellxpertAPI = async (values) => {
        const apiUrl = '/api/affilicate';
        const params = new URLSearchParams({
            username: values.userName || values.email,
            password: values?.Password,
            firstName: values.first_name,
            lastName: values?.last_name || 'null',
            email: values.email,
            country: values.country,
            phone: values.phone,
            website: values.website || '',
            skype: values?.skype || '',
            AgreedToTermsAndConditions: values.terms ? '1' : '0',
            AgreedToPrivacyPolicy: values.terms ? '1' : '0',
            AgreedToMarketingMaterial: values.terms ? '1' : '0',
            account: values?.accountAff || '',
        });

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
        });
        const data = await response.text();
        console.log('CellXpert response:', data);
        return response;
    };

    // ====== UI (Pixel-perfect like the screenshots) ======
    const cardShadow = 'shadow-[0_12px_36px_rgba(13,13,13,0.10)]';
    const labelCls = 'block text-[14px] font-normal text-left text-[#04417B] mb-1.5';
    const inputBase =
        'w-full h-[48px] rounded-[8px] border border-[#CCCCD6] bg-white px-3 placeholder:text-[#B8C6D5] text-[14px] text-[#0F2742] outline-none focus:border-[#14A0DB] transition';
    const selectBase =
        'w-full h-[48px] rounded-[8px] border border-[#CCCCD6] bg-white text-[14px] text-[#0F2742] outline-none focus:border-[#14A0DB] transition px-3 text-left';
    const errorCls = 'mt-1 text-[12px] text-left text-[#E5484D] ';

    const canProceed =
        step === 0
            ? originCountry === 'EUS'
                ? phoneVerified
                : emailVerified
            : true;

    return (
        <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
            <div className="w-full max-w-100%">


                <div className={` bg-white ${cardShadow} border border-[#E6EEF6]`}>
                    <div className="px-6 pt-7 pb-6">

                        {subtitle ? (
                            <p className="text-center text-sm text-[#6B7A8B] mb-5">{subtitle}</p>
                        ) : (
                            <div className="mb-6" />
                        )}

                        {/* STEP 1 */}
                        {step === 0 && (
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="space-y-4"
                                noValidate
                                autoComplete="off"
                            >
                                {/* First / Last */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className={labelCls}>First Name</label>
                                        <input
                                            className={inputBase}
                                            name="first_name"
                                            placeholder="First Name (e.g., John)"
                                            value={formik.values.first_name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.first_name && formik.errors.first_name && (
                                            <div className={errorCls}>{formik.errors.first_name}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label className={labelCls}>Last Name</label>
                                        <input
                                            className={inputBase}
                                            name="last_name"
                                            placeholder="Last Name (e.g., Doe)"
                                            value={formik.values.last_name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.last_name && formik.errors.last_name && (
                                            <div className={errorCls}>{formik.errors.last_name}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className={labelCls}>Mobile Number</label>
                                    <div className="gtc-phone flex items-center h-[50px] rounded-[12px] border border-[#DDE6F0] bg-white px-2">
                                        <PhoneInput
                                            name="phone"
                                            international
                                            countryCallingCodeEditable={false}
                                            defaultCountry={originCountry || 'AE'}
                                            value={formik.values.phone}
                                            onChange={(v) => formik.setFieldValue('phone', v)}
                                            //   countries={phoneAllowed}
                                            className="flex-1"
                                        />
                                    </div>
                                    {formik.touched.phone && formik.errors.phone && (
                                        <div className={errorCls}>{formik.errors.phone}</div>
                                    )}
                                </div>

                                {/* Email + OTP (or Phone OTP for EUS) */}
                                <div>
                                    <label className={labelCls}>Email</label>
                                    <div className="relative">
                                        <input
                                            className={inputBase}
                                            type="email"
                                            name="email"
                                            placeholder="example@mail.com"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {originCountry !== 'EUS' && (
                                            <button
                                                type="button"
                                                onClick={sendEmailOtp}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 h-[36px] px-3 rounded-[10px] bg-[#09A5DE] hover:bg-[#0797CB] text-white text-[12px] font-semibold"
                                            >
                                                {otpLoading ? 'Sending…' : 'Get Code'}
                                            </button>
                                        )}
                                    </div>
                                    {formik.touched.email && formik.errors.email && (
                                        <div className={errorCls}>{formik.errors.email}</div>
                                    )}

                                    {/* Email OTP block */}
                                    {originCountry !== 'EUS' && otpOpen && (
                                        <div className="mt-3">
                                            <div className={labelCls}>OTP</div>
                                            <div className=' flex justify-between items-center'>
                                                <OtpInput
                                                    value={formik.values.otp}
                                                    onChange={(v) => formik.setFieldValue('otp', v)}
                                                    numInputs={6}
                                                    isInputNum
                                                    renderInput={(props) => (
                                                        <input
                                                            {...props}
                                                            type="tel" // Triggers number pad
                                                            inputMode="numeric" // Helps mobile keyboard detect numeric input
                                                            pattern="[0-9]*" // Optional: enforce numeric
                                                        />
                                                    )}
                                                    inputStyle={{
                                                        width: 54,
                                                        height: 46,
                                                        borderRadius: 10,
                                                        border: '1px solid #DDE6F0',
                                                        background: '#fff',
                                                        color: '#0F2742',
                                                        fontWeight: 600,
                                                        fontSize: 16,
                                                        outline: 'none',
                                                    }}
                                                    containerStyle={{ display: 'flex', gap: 10 }}
                                                />
                                                <div className="">
                                                    <button
                                                        type="button"
                                                        onClick={verifyEmailOtp}
                                                        className="h-[46px] px-4 rounded-[10px] border border-[#DDE6F0] text-[#0F2742] hover:bg-[#F6FAFE]"
                                                    >
                                                        Verify Code
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}


                                </div>

                                {/* Country of Residence */}
                                <div>
                                    <label className={labelCls}>Country of Residence</label>
                                    <Select
                                        instanceId="country-select"
                                        name="country"
                                        options={countryOptions}
                                        value={countryOptions.find((o) => o.value === formik.values.country)}
                                        onChange={(opt) => formik.setFieldValue('country', opt?.value)}
                                        onBlur={() => formik.setFieldTouched('country', true)}
                                        classNamePrefix="react-select"
                                        styles={{
                                            control: (base, state) => ({
                                                ...base,
                                                minHeight: 50,
                                                height: 50,
                                                borderRadius: 12,
                                                borderColor:
                                                    formik.touched.country && formik.errors.country
                                                        ? '#E5484D'
                                                        : '#DDE6F0',
                                                boxShadow: 'none',
                                                ':hover': { borderColor: state.isFocused ? '#14A0DB' : '#DDE6F0' },
                                            }),
                                            valueContainer: (base) => ({ ...base, paddingLeft: 12, paddingRight: 40 }),
                                            singleValue: (base) => ({ ...base, color: '#0F2742', fontSize: 14 }),
                                            placeholder: (base) => ({ ...base, color: '#B8C6D5' }),
                                            dropdownIndicator: (base) => ({ ...base, color: '#5B6B7C', paddingRight: 12 }),
                                            menu: (base) => ({ ...base, zIndex: 50 }),
                                        }}
                                        placeholder="Select country"
                                    />
                                    {formik.touched.country && formik.errors.country && (
                                        <div className={errorCls}>{formik.errors.country}</div>
                                    )}
                                </div>

                                {/* Microsoft Teams ID + Telegram ID (optional) */}
                                <div>
                                    <label className={labelCls}>Microsoft Teams ID</label>
                                    <input
                                        className={inputBase}
                                        name="skype"
                                        placeholder="example@mail.com"
                                        value={formik.values.skype}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div>
                                    <label className={labelCls}>Telegram ID</label>
                                    <input
                                        className={inputBase}
                                        name="telegramId"
                                        placeholder="@example"
                                        value={formik.values.telegramId}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label className={labelCls}>Password</label>
                                    <input
                                        className={inputBase}
                                        type="password"
                                        name="Password"
                                        placeholder="Enter password"
                                        value={formik.values.Password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.Password && formik.errors.Password && (
                                        <div className={errorCls}>{formik.errors.Password}</div>
                                    )}
                                </div>

                                {/* Next */}
                                <div className="pt-2">
                                    <button
                                        type="button"
                                        onClick={async () => {
                                            // validate step1 basic fields
                                            const errs = await Step1Schema.validate(formik.values, { abortEarly: false })
                                                .then(() => ({}))
                                                .catch((e) =>
                                                    e.inner.reduce(
                                                        (acc, cur) => ({ ...acc, [cur.path]: cur.message }),
                                                        {}
                                                    )
                                                );
                                            formik.setTouched(
                                                {
                                                    first_name: true,
                                                    last_name: true,
                                                    email: true,
                                                    phone: true,
                                                    country: true,
                                                    Password: true,
                                                },
                                                true
                                            );
                                            if (Object.keys(errs).length) return;
                                            if (!canProceed) {
                                                toast.error(('otp_not_verified'));
                                                return;
                                            }
                                            setStep(1);
                                        }}
                                        className={`w-full h-[54px] rounded-[12px] font-semibold tracking-wide flex items-center justify-center gap-2 transition ${canProceed
                                            ? 'bg-[#09A5DE] hover:bg-[#0797CB] text-white'
                                            : 'bg-[#F2F2F5] text-[#B2B2C1] cursor-not-allowed'
                                            }`}
                                    >
                                        Sign Up as an Affiliate
                                        <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                                            <path
                                                fill="currentColor"
                                                d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* STEP 2 */}
                        {step === 1 && (
                            <form
                                onSubmit={formik.handleSubmit}
                                className="space-y-4"
                                noValidate
                                autoComplete="off"
                            >
                                {/* Target countries (multi) */}
                                <div>
                                    <label className={labelCls}>Your Main Target Countries</label>
                                    <Select
                                        instanceId="targets"
                                        isMulti
                                        options={countryOptions.map((c) => ({ value: c.value, label: c.value }))}
                                        value={formik.values.mainTargetCountries.map((v) => ({ value: v, label: v }))}
                                        onChange={(opts) =>
                                            formik.setFieldValue(
                                                'mainTargetCountries',
                                                (opts || []).map((o) => o.value)
                                            )
                                        }
                                        className=' text-left'
                                        classNamePrefix="react-select"
                                        styles={{
                                            control: (base, state) => ({
                                                ...base,
                                                minHeight: 50,
                                                height: 'auto',
                                                borderRadius: 12,
                                                borderColor:
                                                    formik.touched.mainTargetCountries && formik.errors.mainTargetCountries
                                                        ? '#E5484D'
                                                        : '#DDE6F0',
                                                boxShadow: 'none',
                                                ':hover': { borderColor: state.isFocused ? '#14A0DB' : '#DDE6F0' },
                                            }),
                                            valueContainer: (base) => ({ ...base, paddingLeft: 12 }),
                                            multiValue: (base) => ({ ...base, backgroundColor: '#EEF7FD' }),
                                            placeholder: (b) => ({ ...b, color: '#B8C6D5' }),
                                            menu: (b) => ({ ...b, zIndex: 50 }),
                                        }}
                                        placeholder="Select your target countries"
                                    />
                                    {formik.touched.mainTargetCountries && formik.errors.mainTargetCountries && (
                                        <div className={errorCls}>
                                            {formik.errors.mainTargetCountries}
                                        </div>
                                    )}
                                </div>

                                {/* Promotion method */}
                                <div>
                                    <label className={labelCls}>How do you intend to promote GTC?</label>
                                    <select
                                        className={selectBase}
                                        name="promotionMethod"
                                        value={formik.values.promotionMethod}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="" disabled>
                                            Select promotion method
                                        </option>
                                        {promotionMethods.map((m) => (
                                            <option key={m} value={m}>
                                                {m}
                                            </option>
                                        ))}
                                    </select>
                                    {formik.touched.promotionMethod && formik.errors.promotionMethod && (
                                        <div className={errorCls}>{formik.errors.promotionMethod}</div>
                                    )}
                                </div>

                                {/* Affiliate other broker */}
                                <div>
                                    <label className={labelCls}>Are you an affiliate with another broker?</label>
                                    <select
                                        className={selectBase}
                                        name="affiliateOtherBroker"
                                        value={formik.values.affiliateOtherBroker}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="" disabled>
                                            Select an option
                                        </option>
                                        {yesNo.map((o) => (
                                            <option key={o} value={o}>
                                                {o}
                                            </option>
                                        ))}
                                    </select>
                                    {formik.touched.affiliateOtherBroker &&
                                        formik.errors.affiliateOtherBroker && (
                                            <div className={errorCls}>{formik.errors.affiliateOtherBroker}</div>
                                        )}
                                </div>

                                {/* Monthly clients */}
                                <div>
                                    <label className={labelCls}>
                                        How many clients will you refer to us each month?
                                    </label>
                                    <input
                                        className={inputBase}
                                        name="monthlyClients"
                                        placeholder="e.g., 100"
                                        value={formik.values.monthlyClients}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.monthlyClients && formik.errors.monthlyClients && (
                                        <div className={errorCls}>{formik.errors.monthlyClients}</div>
                                    )}
                                </div>

                                {/* Has GTC account */}
                                <div>
                                    <label className={labelCls}>
                                        Do you already have a GTC IB or trading account?
                                    </label>
                                    <select
                                        className={selectBase}
                                        name="hasGtcAccount"
                                        value={formik.values.hasGtcAccount}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="" disabled>
                                            Select an option
                                        </option>
                                        {yesNo.map((o) => (
                                            <option key={o} value={o}>
                                                {o}
                                            </option>
                                        ))}
                                    </select>
                                    {formik.touched.hasGtcAccount && formik.errors.hasGtcAccount && (
                                        <div className={errorCls}>{formik.errors.hasGtcAccount}</div>
                                    )}
                                </div>

                                {/* Terms */}
                                <div className="flex items-start gap-2 pt-1">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="h-5 w-5 mt-0.5"
                                        checked={formik.values.terms}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="terms"
                                    />
                                    <p className="text-[13px] text-[#0F2742]">
                                        I agree to the{' '}
                                        <Link
                                            href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf"
                                            target="_blank"
                                            className="underline text-[#0C7BCF]"
                                        >
                                            Client Agreement
                                        </Link>{' '}
                                        and the{' '}
                                        <Link href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/08.+Privacy+Policy+%E2%80%93+GTC+Financial+Consultancy+LLC+V1.0+09-06-2025.pdf" target="_blank" className="underline text-[#0C7BCF]">
                                            Privacy Policy
                                        </Link>
                                        .
                                    </p>
                                </div>
                                {formik.touched.terms && formik.errors.terms && (
                                    <div className={errorCls}>{formik.errors.terms}</div>
                                )}

                                {/* CTA Row */}
                                <div className="flex items-center gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setStep(0)}
                                        className="h-[48px] px-4 rounded-[12px] border border-[#DDE6F0] text-[#0F2742] font-medium hover:bg-[#F6FAFE]"
                                    >
                                        Back
                                    </button>

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full h-[54px] rounded-[12px] bg-[#09A5DE] hover:bg-[#0797CB] disabled:opacity-60 text-white font-semibold tracking-wide transition flex items-center justify-center gap-2"
                                    >
                                        {submitting ? 'Submitting…' : 'Go!'}
                                        <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                                            <path
                                                fill="currentColor"
                                                d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AffiliatedForm;
