import nodemailer from "nodemailer";
// config/mailgun.js
import Mailgun from "mailgun.js";
import formData from "form-data";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.mailgun.org", // Mailgun SMTP host
  port: Number(process.env.SMTP_PORT || 465), // SSL/TLS port
  secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : true, // Use TLS
  auth: {
    user: process.env.SMTP_USER, // Mailgun SMTP username
    pass: process.env.SMTP_PASS, // Mailgun SMTP password
  },
});

export const mailOptions = {
  from: process.env.MAILGUN_FROM,
  to: "zeeshan@gtcfx.com",
  bcc: "mohammad.zeeshan@gtcfx.com",
};

export const mailOptionsSupport = {
  from: process.env.MAILGUN_FROM,
  to: "partners@gtcaffiliates.com",
};

const mg = new Mailgun(formData);

export const mailgunClient = mg.client({
  username: process.env.MAILGUN_USERNAME || "api",
  key: process.env.MAILGUN_API_KEY,
  url: process.env.MAILGUN_API_URL || "https://api.mailgun.net",
});
export const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || "mx.gtcmail.com";

export const MAILGUN_FROM =
  "GTCFX <portal@mx.gtcmail.com>" || `GTCFX <postmaster@${MAILGUN_DOMAIN}>`;
