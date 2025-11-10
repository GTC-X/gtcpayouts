import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import otpGenerator from "otp-generator";
import {
  MAILGUN_DOMAIN,
  MAILGUN_FROM,
  mailgunClient,
  transporter,
} from "../../[locale]/config/nodemailer";

export async function POST(req) {
  const { email, first_name, locale } = await req.json();
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    digits: true,
    lowerCaseAlphabets: false,
  });
  const mailData = {
    from: MAILGUN_FROM,
    to: email,
    subject: "Your GTC Affiliates OTP Code",
    text: `Your OTP is ${otp}`,
    html:
      locale == "ar"
        ? `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>رمز التحقق GTC</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&display=swap');
    </style>
  </head>
  <body  dir="rtl" style="margin:0;padding:0;background-color:#ffffff;font-family:'Noto Kufi Arabic', sans-serif; direction: rtl;">
    <table  dir="rtl" width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Noto Kufi Arabic', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
          <table width="900" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
            <!-- Logo -->
            <tr>
              <td align="right" style="padding-bottom: 20px;">
                <img src="https://www.gtcaffiliates.com/logo-gtcaffiliates.webp" alt="شعار GTC" style="width: 120px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                رمز التحقق الخاص بك من GTC
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                شكرًا لاختيارك GTC.
              </td>
            </tr>

            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

            <!-- Greeting & OTP -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                عزيزي ${first_name || "العميل"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                يرجى استخدام رمز التحقق لمرة واحدة التالي لإكمال العملية.
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#2e2e2e;padding-bottom:20px;">
                ${otp}
              </td>
            </tr>

            <!-- partners Info -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                إذا كانت لديك أي أسئلة أو تحتاج إلى مساعدة إضافية، فلا تتردد في التواصل معنا عبر 
                <a href="mailto:partners@gtcaffiliates.com" style="color:#0066cc;text-decoration:none;">partners@gtcaffiliates.com</a>.
                نحن هنا لدعمك وضمان أفضل تجربة لك معنا.
              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                نتمنى لك يومًا سعيدًا،<br>
                فريق GTC
              </td>
            </tr>

            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

            <!-- Contact Info -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="right">
                      <img src="https://www.gtcaffiliates.com/logo-gtcaffiliates.webp" alt="شعار GTC" style="width: 100px;" />
                    </td>
                  <td align="right" dir="rtl" style="font-size: 13px; color: #192055; line-height: 25px; text-align: right;">
                    📞 الهاتف: <span dir="ltr">+971 800 667788</span><br/>
                    ✉️ البريد الإلكتروني: <a href="mailto:partners@gtcaffiliates.com" style="color: #192055; text-decoration: none;">partners@gtcaffiliates.com</a>
                  </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Legal and Social Footer -->
            <!-- You can reuse the same content from the English version as-is here (or translate if needed) -->
            <tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5; text-align: right;" dir="rtl">
    هذا الموقع مملوك ومدار من قبل GTC Global Ltd، وهي شركة محدودة تم تأسيسها في موريشيوس (رقم الشركة: C188049) ومرخصة من قبل لجنة الخدمات المالية في موريشيوس (رقم الترخيص: GB22200292) لمزاولة نشاط وسيط استثمار من الفئة SEC-2.1B. العنوان المسجل: Cyberati Lounge، الطابق الأرضي، The Catalyst، Silicon Avenue، 40 Cybercity، 72201 إيبين، جمهورية موريشيوس.

    <br><br>

    <strong style="font-weight: 600; color: #000;">شركة GTC Global Ltd و GTC Global Trade Capital Co. Limited</strong> تنتميان إلى مجموعة GTC المالية، وهي مجموعة تضم عدة كيانات حول العالم.

    <br><br>

    ينطوي الاستثمار في المنتجات المشتقة على مخاطر كبيرة وقد لا يكون مناسبًا لجميع المستثمرين. يمكن أن يؤدي استخدام الرافعة المالية إلى زيادة المخاطر والخسائر المحتملة. قبل اتخاذ قرار التداول في الفوركس أو العقود مقابل الفروقات، يجب تقييم أهدافك الاستثمارية ومستوى خبرتك وقدرتك على تحمل المخاطر بعناية. يجب أن تستثمر فقط الأموال التي يمكنك تحمل خسارتها. نشجعك بشدة على التثقيف الكامل بالمخاطر واستشارة مستشار مالي أو ضريبي مستقل عند الحاجة.

    <br><br>

    <strong style="font-weight: 600; color: #000;">شركة GTC Global Ltd و GTC Global Trade Capital Co. Limited</strong> لا تقدمان خدمات للأشخاص المقيمين في ولايات قضائية محددة أو حيث يعتبر توزيع هذه الخدمات مخالفًا للقوانين المحلية.

    <br><br>

    <strong style="font-weight: 600; color: #000;">الكيانات الأخرى ضمن المجموعة:</strong><br>
    المنتجات والخدمات المالية المعروضة على هذا الموقع لا يتم تقديمها من قبل الكيانات التالية، ولا يمكن الرجوع إليها قانونياً. إذا كنت مهتمًا بخدمات هذه الكيانات، يرجى زيارة مواقعها الخاصة.

    <br><br>

    <strong style="font-weight: 600; color: #000;">GTC Group LLC-FZ</strong> هي شركة قابضة مسجلة في دبي، الإمارات العربية المتحدة برقم رخصة: 2311147.01. العنوان المسجل: Business Center 1، الطابق الأرضي، فندق Meydan، ند الشبا، دبي.

    <br><br>

    <strong style="font-weight: 600; color: #000;">GTC Multi Trading DMCC</strong> هي شركة مرخصة ومسجلة بموجب قوانين مركز دبي للسلع المتعددة (رقم: DMCC-312687) ومرخصة من هيئة الأوراق المالية والسلع الإماراتية (رقم: 202200000007) لمزاولة نشاط وساطة السلع - التداول والتقاص. العنوان المسجل: الوحدة رقم: 1501، برج ليك بلازا، القطعة JLT-PH2-T2A، أبراج بحيرات جميرا، دبي.

    <br><br>

    كل كيان ضمن مجموعة GTC المالية يُدار بشكل مستقل. المنتجات والخدمات المالية على هذا الموقع مقدمة فقط من قبل GTC Global Ltd و GTC Global Trade Capital Co. Limited.

    <br><br>

    جميع العلامات التجارية هي ملك لأصحابها. جميع الحقوق محفوظة. GTC Global Ltd جزء من مجموعة GTC المالية التي تضم كيانات في جميع أنحاء العالم.

    <br><br>

    <strong>تحذير من المخاطر:</strong> قد لا يكون تداول المنتجات ذات الرافعة المالية مثل الفوركس والمشتقات مناسبًا لجميع المستثمرين نظرًا لمستوى المخاطر العالي. الرجاء التأكد من فهمك الكامل للمخاطر واستشارة مستشار مستقل عند الحاجة.
  </td>
</tr>


            <!-- Social icons, disclaimer, and copyright -->

            <!-- Social Media Footer -->
<tr>
  <td style="padding-top: 30px; text-align: center;">
    <table align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding: 0 5px;">
          <a href="https://www.facebook.com/GTCFXGlobalTradeCapital" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://x.com/GTC_fx" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="X" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://linkedin.com/company/gtcfx-official" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.instagram.com/gtcfxofficial/" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://api.whatsapp.com/send/?phone=448000488461&text&type=phone_number&app_absent=0" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://t.me/gtc_vip_signal" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.tiktok.com/@gtcgroup_official" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" width="20" height="20" style="display:block;">
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr> 

            <tr>
  <td align="center" dir="rtl" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
    &copy; حقوق النشر 2025 GTCFX – جميع الحقوق محفوظة
  </td>
</tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
        : `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>GTC OTP Email</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
           <!-- Logo -->
            <tr>
              <td align="left" style="padding-bottom: 20px;">
                <img src="https://www.gtcaffiliates.com/logo-gtcaffiliates.webp" alt="GTC Logo" style="width: 120px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                Your GTC OTP
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                Thank you for choosing GTC.

              </td>
            </tr>

            <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Greeting & OTP -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Dear ${first_name || "Client"},
              </td>
            </tr>
             <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
              Please use the following One-Time Password to complete your further process.

              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#2e2e2e;padding-bottom:20px;">
                ${otp}
              </td>
            </tr>
        
            <!-- partners Info -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                If you’ve got any questions or need further assistance, please don’t hesitate to contact us at 
                <a href="mailto:partners@gtcaffiliates.com" style="color:#0066cc;text-decoration:none;">partners@gtcaffiliates.com</a>.
                We are here to partners you and ensure your experience with us is the best you’ve ever experienced.
              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                Have a great day,<br>
                Your GTC Team
              </td>
            </tr>

             <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Contact Info -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://www.gtcaffiliates.com/logo-gtcaffiliates.webp" alt="GTC Logo" style="width: 100px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Phone: +971 800 667788<br/>
                      ✉️ Email: <a href="mailto:partners@gtcaffiliates.com" style="color: #192055; text-decoration: none;">partners@gtcaffiliates.com</a>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>

            

<tr>
  <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
    &copy; Copyright 2025 GTC Affiliates – All Rights Reserved
  </td>
</tr>


          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

        `,
  };
  try {
    const res = await mailgunClient.messages.create(MAILGUN_DOMAIN, mailData);
    return NextResponse.json({ message: `5649${otp}632` }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error Sending OTP" }, { status: 500 });
  }
}
