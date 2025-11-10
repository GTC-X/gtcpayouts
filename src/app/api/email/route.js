import { NextResponse } from "next/server";
import {
  transporter,
  mailOptions,
  mailgunClient,
  MAILGUN_DOMAIN,
  MAILGUN_FROM,
} from "../../[locale]/config/nodemailer";
import {
  emailTempletesArabic,
  emailTempletesEnglish,
  emailTempleteSwitchArabic,
  emailTempleteSwitchChinese,
  emailTempleteSwitchEnglish,
  emailTempleteSwitchPortuguese,
  emailTempleteSwitchRussian,
  emailTempleteSwitchSpanish,
} from "./templetes";

const getLocalizedSubject = (locale) => {
  switch (locale) {
    case "ar":
      return "شكرًا لتسجيلك في GTC";
    case "ru":
      return "Спасибо за регистрацию в GTC";
    case "pt":
      return "Obrigado por se cadastrar na GTC";
    case "es":
      return "Gracias por registrarte en GTC";
    case "zh":
      return "感谢您注册 GTC";
    default:
      return "Thank you for registering with GTC";
  }
};
const generateEmailContent = (data) => {
  if (data?.locale == "ar") {
    if (data?.isPartnerPage) {
      return {
        html: `${emailTempletesArabic(data)}`,
      };
    } else {
      return {
        html: `${emailTempleteSwitchArabic(data)}`,
      };
    }
  }
  if (data?.locale == "ru") {
    return {
      html: `${emailTempleteSwitchRussian(data)}`,
    };
  }
  if (data?.locale == "pt") {
    return {
      html: `${emailTempleteSwitchPortuguese(data)}`,
    };
  }
  if (data?.locale == "es") {
    return {
      html: `${emailTempleteSwitchSpanish(data)}`,
    };
  }
  if (data?.locale == "zh") {
    return {
      html: `${emailTempleteSwitchChinese(data)}`,
    };
  } else {
    if (data?.isPartnerPage) {
      return {
        html: `${emailTempletesEnglish(data)}`,
      };
    } else {
      return {
        html: `${emailTempleteSwitchEnglish(data)}`,
      };
    }
  }
};

export async function POST(req) {
  const reqBody = await req.json();
  const mailOption = {
    from: MAILGUN_FROM,
    to: reqBody?.email,
  };
  try {
    const res = await mailgunClient.messages.create(MAILGUN_DOMAIN, {
      ...mailOption,
      ...generateEmailContent(reqBody),
      subject: getLocalizedSubject(reqBody?.locale),
    });

    return NextResponse.json(
      { message: "Success", email: reqBody?.email },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
