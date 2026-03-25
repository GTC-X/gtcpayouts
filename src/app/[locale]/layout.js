import "./globals.css";
import { ToastContainer } from "react-toastify";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function LocaleLayout({ children, params }) {
  // ❌ no need to await params
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isArabicOrKurdish = locale === "ar" || locale === "ku";

  return (
    <html lang={locale} dir={isArabicOrKurdish ? "rtl" : "ltr"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

   
        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://www.gtcaffiliates.com/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Become a GTC Partner & Earn More with Top CPA & Rebates"
        />
        <meta
          property="og:description"
          content="Register as a GTC Partner today & earn up to $1,850 CPA as an Affiliate or 80% in rebates as an IB. Fast payouts & loyalty rewards that keep traders active."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/cb154a05-2a50-4167-892a-58de3857411f.jpg?token=DCSMy_JE-tqv_tDp5HEeUTPKiBS7c_KGlideyHsDlgY&height=1080&width=1080&expires=33299534457"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="gtcaffiliates.com"
        />
        <meta
          property="twitter:url"
          content="https://www.gtcaffiliates.com/"
        />
        <meta
          name="twitter:title"
          content="Become a GTC Partner & Earn More with Top CPA & Rebates"
        />
        <meta
          name="twitter:description"
          content="Register as a GTC Partner today & earn up to $1,850 CPA as an Affiliate or 80% in rebates as an IB. Fast payouts & loyalty rewards that keep traders active."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/cb154a05-2a50-4167-892a-58de3857411f.jpg?token=DCSMy_JE-tqv_tDp5HEeUTPKiBS7c_KGlideyHsDlgY&height=1080&width=1080&expires=33299534457"
        />

        {/* Google Analytics (gtag.js) - NEW ONE YOU WANT */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FB9YJ0C5RZ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FB9YJ0C5RZ');
            `,
          }}
        />

        <style>{`
          body {
            font-family: '${
              isArabicOrKurdish ? "Noto Kufi Arabic" : "Poppins"
            }', sans-serif;
          }
        `}</style>
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
