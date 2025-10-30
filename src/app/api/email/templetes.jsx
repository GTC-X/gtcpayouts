export const emailTempletesEnglish = (data) => {
  return `
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
          <table width="900" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
           <!-- Logo -->
            <tr>
              <td align="left" style="padding-bottom: 20px;">
                <img src="https://www.gtcaffiliates/logogtcpay.png" alt="GTC Logo" style="width: 140px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                Joining the GTC Partnership Programme
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
You’ve just filled in the GTC Partnership Programme form. Here’s what to do next.
              </td>
            </tr>

            <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Greeting & OTP -->
           <tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    Hi ${data?.nickname || "Client"},
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    Thank you for registering your interest with us.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    You’ve just taken the first step towards the GTC Partnership Programme that’s geared at ensuring you grow your FX partnership business faster, meaning it’s a lot more rewarding.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    One of our outstanding Partnership Managers will call you.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    They’ll get you activated and walk you through our partnership programme.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:20px;">
    Need help? Simply call us on <a href="tel:+971800667788" style="color:#000000; text-decoration: underline;">+971 800 667788</a> or email us at <a href="mailto:partners@gtcfx.com" style="color:#000000; text-decoration: underline;">partners@gtcfx.com</a>.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:30px;">
    Talk soon,<br/>
    The GTC Partnership Team
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
                      <img src="https://www.gtcaffiliates/logogtcpay.png" alt="GTC Logo" style="width: 140px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Phone: +971 800 667788<br/>
                      ✉️ Email: <a href="mailto:support@gtcaffiliates" style="color: #192055; text-decoration: none;">support@gtcaffiliates</a>
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

      
      `;
};

export const emailTempletesArabic = (data) => {
  return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>بريد التحقق من GTC</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Noto Kufi Arabic',sans-serif; direction: rtl;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Noto Kufi Arabic', sans-serif; padding: 20px; direction: rtl;">
      <tr>
        <td align="center">
          <table width="900" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
            <!-- Logo -->
            <tr>
              <td align="right" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="شعار GTC" style="width: 140px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                الانضمام إلى برنامج الشراكة GTC
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                لقد قمت للتو بتعبئة نموذج برنامج الشراكة مع GTC. إليك ما يجب فعله بعد ذلك.
              </td>
            </tr>

            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

         <!-- Greeting & OTP -->
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    مرحباً ${data?.nickname || "الاسم الأول"},
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    نشكرك على تسجيل اهتمامك بالانضمام إلى برنامج الشراكة مع GTC.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    لقد بدأت للتو أولى خطواتك نحو برنامج الشراكة الخاص بـ GTC المصمم لمساعدتك على تنمية أعمالك في عالم الفوركس بسرعة وربحية أكبر.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    سيقوم أحد مدراء الشراكات المتخصصين لدينا بالتواصل معك قريباً لمساعدتك في تفعيل حسابك والإجابة عن أي استفسارات، بالإضافة إلى تزويدك بكافة التفاصيل التي تحتاجها لتحقيق أقصى استفادة من برنامجنا.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    هل لديك أي استفسار؟
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    تواصل معنا مباشرة عبر الرقم: <span dir="ltr" style="unicode-bidi: embed;">+971 800 667788</span><br/>
    أو عبر البريد الإلكتروني: <a href="mailto:partners@gtcfx.com" style="color:#000000; text-decoration: underline;">partners@gtcfx.com</a>
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:30px;">
    نحن هنا لدعمك،<br/>
    GTC فريق الشراكات،
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
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="شعار GTC" style="width: 140px;" />
                    </td>
                   <td align="right" dir="rtl" style="font-size: 13px; color: #192055; line-height: 25px; text-align: right;">
                    📞 الهاتف: <span dir="ltr">+971 800 667788</span><br/>
                    ✉️ البريد الإلكتروني: <a href="mailto:support@gtcaffiliates" style="color: #192055; text-decoration: none;">support@gtcaffiliates</a>
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
            ...
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};

// for switch pages
export const emailTempleteSwitchEnglish = (data) => {
  return ` <!DOCTYPE html>
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
                <img src="https://www.gtcaffiliates/logogtcpay.png" alt="GTC Logo" style="width: 140px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px; text-transform: capitalize;">
                You just made the smartest trading move ✅


              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
Confirm your email to switch to GTC.

              </td>
            </tr>

            <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Greeting & OTP -->
           <tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    Hi ${data?.nickname || "Client"},
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px; font-weight: 600;">
   Welcome aboard!

  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    You’ve just taken the first step towards smarter, faster, and more rewarding Partner Program with GTC. 🎯

  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
     Our friendly GTC Customer Care team will give you a quick call to help you finalise the switch, and yes, they’re genuinely helpful (and very human).

  </td>
</tr>

<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:20px;">
    Need help? Simply call us on <a href="tel:+971800667788" style="color:#000000; text-decoration: underline;">+971 800 667788</a> or email us at <a href="mailto:partners@gtcfx.com" style="color:#000000; text-decoration: underline;">partners@gtcfx.com</a>.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:30px;">
    Talk soon,<br/>
    The GTC Partnership Team
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
                      <img src="https://www.gtcaffiliates/logogtcpay.png" alt="GTC Logo" style="width: 140px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Phone: +971 800 667788<br/>
                      ✉️ Email: <a href="mailto:support@gtcaffiliates" style="color: #192055; text-decoration: none;">support@gtcaffiliates</a>
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
</html>`;
};

export const emailTempleteSwitchArabic = (data) => {
  return `
    <!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>بريد التحقق من GTC</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Noto Kufi Arabic',sans-serif;direction:rtl;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Noto Kufi Arabic', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
            <!-- الشعار -->
            <tr>
              <td align="right" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="GTC Logo" style="width: 140px;" />
              </td>
            </tr>

            <!-- العنوان -->
            <tr>
              <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px; text-transform: capitalize;">
                لقد قمت بأذكى خطوة تداول ✅
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                قم بتأكيد بريدك الإلكتروني للانتقال إلى GTC.
              </td>
            </tr>

            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

            <!-- الترحيب والمحتوى -->
            <tr>
              <td style="font-size:14px; color:#000000; padding-bottom:10px;">
                مرحبًا ${data?.nickname || "العميل"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px; color:#000000; padding-bottom:10px; font-weight: 600;">
                أهلاً بك معنا!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px; color:#000000; padding-bottom:10px;">
                لقد اتخذت للتو الخطوة الأولى نحو تداول أكثر ذكاءً وسرعة وربحية مع GTC. 🎯
              </td>
            </tr>
            <tr>
              <td style="font-size:14px; color:#000000; padding-bottom:10px;">
                سيتواصل معك فريق خدمة عملاء GTC الودود لإجراء مكالمة سريعة لمساعدتك في إتمام عملية الانتقال، ونعم، هم بالفعل ودودون جدًا (وبشريون للغاية).
              </td>
            </tr>
            <tr>
              <td style="font-size:14px; color:#000000; padding-bottom:20px;">
                تحتاج مساعدة؟ ببساطة اتصل بنا على <a href="tel:+971800667788" style="color:#000000; text-decoration: underline;">+971 800 667788</a> أو راسلنا عبر البريد الإلكتروني على <a href="mailto:partners@gtcfx.com" style="color:#000000; text-decoration: underline;">partners@gtcfx.com</a>.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px; color:#000000; padding-bottom:30px;">
                إلى اللقاء قريبًا،<br/>
                فريق شراكات GTC
              </td>
            </tr>

            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

            <!-- معلومات الاتصال -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="right">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="GTC Logo" style="width: 140px;" />
                    </td>
                    <td align="left" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 الهاتف: +971 800 667788<br/>
                      ✉️ البريد: <a href="mailto:support@gtcaffiliates" style="color: #192055; text-decoration: none;">support@gtcaffiliates</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- نص قانوني -->
            <tr>
              <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
                هذا الموقع مملوك ومدار من قبل شركة GTC Global Ltd، وهي شركة محدودة مسجلة في موريشيوس (رقم الشركة: C188049) ومرخصة من لجنة الخدمات المالية في موريشيوس (رقم: GB22200292) للعمل كوسيط استثمار من الفئة SEC-2.1B. العنوان المسجل: Cyberati Lounge، الطابق الأرضي، The Catalyst، Silicon Avenue، 40 Cybercity، 72201 إيبيني، جمهورية موريشيوس. يتم تقديم الخدمات والمنتجات المالية المعروضة على هذا الموقع من قبل GTC Global Ltd و GTC Global Trade Capital Co. Limited، وهي شركة مرخصة من لجنة الخدمات المالية في فانواتو، جمهورية فانواتو، برخصة رقم: 40354.
                <br/><br/>
                <strong>GTC Global Ltd و GTC Global Trade Capital Co. Limited</strong> تنتميان إلى مجموعة GTC المالية، والتي تضم مجموعة من الكيانات حول العالم.
                <br/><br/>
                الاستثمار في المنتجات المشتقة يحمل مخاطر كبيرة وقد لا يكون مناسبًا لجميع المستثمرين. يمكن أن يؤدي استخدام الرافعة المالية إلى زيادة مستوى المخاطر واحتمال التعرض للخسائر. قبل اتخاذ أي قرار بالمشاركة في تداول الفوركس أو عقود الفروقات، من الضروري تقييم أهدافك الاستثمارية ومستوى خبرتك وتحملك للمخاطر. يجب أن تستثمر فقط الأموال التي يمكنك تحمل خسارتها. ننصحك بشدة بتثقيف نفسك بشكل كامل حول المخاطر المرتبطة، وإذا كانت لديك أي أسئلة، فاطلب المشورة من مستشار مالي أو ضريبي مستقل.
                <br/><br/>
                <strong>GTC Global Ltd و GTC Global Trade Capital Co. Limited</strong> لا تقدمان خدمات للأفراد المقيمين في ولايات قضائية محددة و/أو حيث يكون تقديم هذه الخدمات مخالفًا للقوانين أو اللوائح المحلية.
                <br/><br/>
                <strong>كيانات المجموعة الأخرى:</strong><br/>
                المنتجات والخدمات المالية المعروضة على هذا الموقع <u>لا</u> يتم تقديمها من قبل الكيانات التالية، ولا يمكن الرجوع إلى هذه الكيانات. إذا كنت مهتمًا بالمنتجات والخدمات التي تقدمها الكيانات التالية، يرجى زيارة مواقعها الإلكترونية الخاصة.
                <br/><br/>
                <strong>GTC Group LLC-FZ</strong> هي شركة قابضة مسجلة في دبي، الإمارات العربية المتحدة، برقم رخصة تجارية: 2311147.01. مكتبها المسجل في Business Center 1، الطابق M، فندق الميدان، ند الشبا، دبي، الإمارات العربية المتحدة.
                <br/><br/>
                <strong>GTC Multi Trading DMCC</strong> هي شركة محدودة مرخصة ومسجلة بموجب قوانين مركز دبي للسلع المتعددة (رقم: DMCC-312687) ومرخصة من هيئة الأوراق المالية والسلع في الإمارات العربية المتحدة (رقم: 202200000007) لمزاولة نشاط الوساطة في السلع – التداول والمقاصة. العنوان المسجل: الوحدة رقم 1501، 1 Lake Plaza، قطعة رقم: JLT-PH2-T2A، أبراج بحيرات جميرا، دبي، الإمارات العربية المتحدة.
                <br/><br/>
                كل كيان من كيانات مجموعة GTC المالية يُدار بشكل منفصل. يتم تقديم المنتجات والخدمات المالية على هذا الموقع فقط من قبل GTC Global Ltd و GTC Global Trade Capital Co. Limited.
                <br/><br/>
                جميع العلامات التجارية هي ملك لأصحابها. جميع الحقوق محفوظة. GTC Global Ltd هي جزء من مجموعة GTC المالية، التي تضم مجموعة من الكيانات حول العالم.
                <br/><br/>
                <strong>تحذير المخاطر:</strong> إن تداول المنتجات ذات الرافعة المالية مثل الفوركس والمشتقات قد لا يكون مناسبًا لجميع المستثمرين نظرًا لأنه ينطوي على درجة عالية من المخاطر على رأس المال. يرجى التأكد من أنك تفهم تمامًا المخاطر المتضمنة واطلب المشورة المستقلة إذا لزم الأمر.
              </td>
            </tr>

            <!-- وسائل التواصل -->
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
              <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
                &copy; جميع الحقوق محفوظة 2025 GTCFX
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
export const emailTempleteSwitchRussian = (data) => {
  return ` <!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Письмо с OTP от GTC</title>
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
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="Логотип GTC" style="width: 140px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px; text-transform: capitalize;">
                Вы только что сделали самый разумный шаг в трейдинге ✅
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
Подтвердите свою электронную почту, чтобы перейти на GTC.
              </td>
            </tr>

            <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Greeting & OTP -->
           <tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    Здравствуйте, ${data?.nickname || "Клиент"},
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px; font-weight: 600;">
   Добро пожаловать на борт!
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    Вы сделали первый шаг к более умной, быстрой и выгодной торговле с GTC. 🎯
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
     Наша дружелюбная команда поддержки GTC скоро свяжется с вами, чтобы помочь завершить переход. И да, они действительно помогают (и это реальные люди).
  </td>
</tr>

<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:20px;">
    Нужна помощь? Просто позвоните нам по номеру <a href="tel:+971800667788" style="color:#000000; text-decoration: underline;">+971 800 667788</a> или напишите на <a href="mailto:partners@gtcfx.com" style="color:#000000; text-decoration: underline;">partners@gtcfx.com</a>.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:30px;">
    До скорой связи,<br/>
    Команда по работе с партнёрами GTC
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
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="Логотип GTC" style="width: 140px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Телефон: +971 800 667788<br/>
                      ✉️ Эл. почта: <a href="mailto:support@gtcaffiliates" style="color: #192055; text-decoration: none;">support@gtcaffiliates</a>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>

            <!-- Legal Footer -->
<tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
    Этот веб-сайт принадлежит и управляется компанией GTC Global Ltd, зарегистрированной на Маврикии (регистрационный номер компании: C188049) и лицензированной Комиссией по финансовым услугам Маврикия (№ GB22200292) для деятельности в качестве инвестиционного дилера SEC-2.1B. Юридический адрес: Cyberati Lounge, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Эбен, Республика Маврикий. Финансовые услуги и продукты, представленные на этом сайте, предлагаются компанией GTC Global Ltd и компанией GTC Global Trade Capital Co. Limited, уполномоченной Комиссией по финансовым услугам Республики Вануату (Vanuatu FSC), номер лицензии компании: 40354.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd и GTC Global Trade Capital Co. Limited</stong> входят в GTC Financial Group — группу компаний по всему миру.
    <br/><br/>
    Инвестирование в производные финансовые инструменты связано с существенными рисками и может подходить не всем инвесторам. Кредитное плечо в этих инструментах повышает уровень риска и потенциальные убытки. Прежде чем принимать решение об участии в торговле на рынке форекс или CFD, внимательно оцените свои инвестиционные цели, уровень опыта и толерантность к риску. Инвестируйте только те средства, которые вы готовы потерять. Настоятельно рекомендуем тщательно ознакомиться с сопутствующими рисками и при необходимости обратиться за консультацией к независимому финансовому или налоговому консультанту.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd и GTC Global Trade Capital Co. Limited</stong> не предоставляют услуги лицам, проживающим в отдельных юрисдикциях и/или там, где распространение таких услуг противоречит местному законодательству или регулированию.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">Другие компании группы:</strong><br/>
    Финансовые продукты и услуги, представленные на этом сайте, <u>НЕ</u> предоставляются следующими компаниями группы, и обращаться к ним по вопросам этих продуктов/услуг нельзя. Если вас интересуют продукты и услуги указанных компаний, посетите их официальные сайты.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Group LLC-FZ</strong> — холдинговая компания, зарегистрированная в Дубае (ОАЭ), номер коммерческой лицензии: 2311147.01. Юридический адрес: Business Center 1, M Floor, Meydan Hotel, Nad Al Sheba, Dubai, United Arab Emirates.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Multi Trading DMCC</strong> — компания, зарегистрированная по законам Dubai Multi Commodities Centre (№ DMCC-312687) и лицензированная Управлением по ценным бумагам и сырьевым товарам ОАЭ (№ 202200000007) для осуществления деятельности «Товарный брокер — Торговля и клиринг». Юридический адрес: Unit No: 1501, 1 Lake Plaza, Plot No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, United Arab Emirates.
    <br/><br/>
    Каждая компания в составе GTC Financial Group управляется отдельно. Финансовые продукты и услуги, представленные на этом сайте, ПРЕДОСТАВЛЯЮТСЯ ТОЛЬКО GTC Global Ltd и GTC Global Trade Capital Co. Limited.
    <br/><br/>
    Все товарные знаки принадлежат их законным правообладателям. Все права защищены. GTC Global Ltd является частью GTC Financial Group — группы компаний по всему миру.
    <br/><br/>
    <strong>Предупреждение о рисках:</strong> Торговля с использованием кредитного плеча (например, форекс и производные инструменты) может быть не подходящей для всех инвесторов, поскольку несёт высокий риск для вашего капитала. Убедитесь, что вы полностью понимаете сопутствующие риски, и при необходимости обратитесь за независимой консультацией.
  </td>
</tr>

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
  <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
    &copy; 2025 GTCFX — Все права защищены
  </td>
</tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export const emailTempleteSwitchSpanish = (data) => {
  return ` <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Correo OTP de GTC</title>
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
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="Logotipo de GTC" style="width: 140px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px; text-transform: capitalize;">
                Acabas de tomar la decisión más inteligente en trading ✅

              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
Confirma tu correo electrónico para pasarte a GTC.
              </td>
            </tr>

            <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Greeting & OTP -->
           <tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    Hola ${data?.nickname || "Cliente"},
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px; font-weight: 600;">
   ¡Bienvenido(a) a bordo!
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    Acabas de dar el primer paso hacia un trading más inteligente, rápido y rentable con GTC. 🎯
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
     Nuestro amable equipo de Atención al Cliente de GTC te hará una llamada rápida para ayudarte a finalizar el cambio y, sí, son realmente serviciales (y muy humanos).
  </td>
</tr>

<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:20px;">
    ¿Necesitas ayuda? Llámanos al <a href="tel:+971800667788" style="color:#000000; text-decoration: underline;">+971 800 667788</a> o escríbenos a <a href="mailto:partners@gtcfx.com" style="color:#000000; text-decoration: underline;">partners@gtcfx.com</a>.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:30px;">
    Hablamos pronto,<br/>
    El Equipo de Alianzas de GTC
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
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="Logotipo de GTC" style="width: 140px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Teléfono: +971 800 667788<br/>
                      ✉️ Correo electrónico: <a href="mailto:support@gtcaffiliates" style="color: #192055; text-decoration: none;">support@gtcaffiliates</a>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>

            <!-- Legal Footer -->
<tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
    Este sitio web es propiedad y está operado por GTC Global Ltd, una sociedad limitada constituida en Mauricio (número de empresa: C188049) y autorizada por la Comisión de Servicios Financieros de Mauricio (No. GB22200292) para operar como Dealer de Inversiones SEC-2.1B. Dirección registrada: Cyberati Lounge, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, República de Mauricio. Los servicios y productos financieros promocionados en este sitio web son ofrecidos por GTC Global Ltd y GTC Global Trade Capital Co. Limited, una empresa autorizada por la Comisión de Servicios Financieros de la República de Vanuatu, Número de Licencia de la empresa: 40354.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd y GTC Global Trade Capital Co. Limited</stong> pertenecen al Grupo Financiero GTC, que está compuesto por un conjunto de entidades en todo el mundo.
    <br/><br/>
    Invertir en productos derivados conlleva riesgos significativos y puede no ser adecuado para todos los inversores. El uso de apalancamiento en estos instrumentos puede aumentar el nivel de riesgo y la exposición a pérdidas potenciales. Antes de decidir participar en operaciones de divisas o CFD, es esencial evaluar cuidadosamente tus objetivos de inversión, tu experiencia y tu tolerancia al riesgo. Solo debes invertir fondos que puedas permitirte perder. Te recomendamos encarecidamente informarte a fondo sobre los riesgos asociados y, si tienes preguntas, buscar asesoramiento de un asesor financiero o fiscal independiente.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd y GTC Global Trade Capital Co. Limited</stong> no prestan servicios a personas que residan en determinadas jurisdicciones y/o en aquellas donde la distribución de dichos servicios contravenga la ley o la normativa local.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">Otras entidades del Grupo:</strong><br/>
    Los productos y servicios financieros ofrecidos en este sitio web <u>NO</u> son proporcionados por las siguientes entidades del grupo y no existe recurso alguno contra ellas por estos productos/servicios. Si te interesan los productos y servicios ofrecidos por cada una de las siguientes entidades, visita sus respectivos sitios web.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Group LLC-FZ</strong> es una sociedad holding constituida en Dubái, Emiratos Árabes Unidos, con Número de Licencia Comercial: 2311147.01. Su oficina registrada se encuentra en Business Center 1, M Floor, Meydan Hotel, Nad Al Sheba, Dubai, United Arab Emirates.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Multi Trading DMCC</strong> es una sociedad limitada licenciada y constituida conforme a las leyes del Dubai Multi Commodities Centre (No. DMCC-312687) y autorizada por la Autoridad de Valores y Materias Primas de los Emiratos Árabes Unidos (No. 202200000007) para ejercer la actividad de Corretaje de Materias Primas - Trading y Compensación. Dirección registrada: Unit No: 1501, 1 Lake Plaza, Plot No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, United Arab Emirates.
    <br/><br/>
    Cada una de las entidades dentro del Grupo Financiero GTC se gestiona de forma independiente. Los productos y servicios financieros ofrecidos en este sitio web son proporcionados ÚNICAMENTE por GTC Global Ltd y GTC Global Trade Capital Co. Limited.
    <br/><br/>
    Todas las marcas comerciales son propiedad de sus respectivos titulares. Todos los derechos reservados. GTC Global Ltd forma parte del Grupo Financiero GTC, que está compuesto por un conjunto de entidades en todo el mundo.
    <br/><br/>
    <strong>Advertencia de Riesgo:</strong> Operar con productos apalancados como forex y derivados puede no ser adecuado para todos los inversores, ya que conlleva un alto grado de riesgo para tu capital. Asegúrate de comprender completamente los riesgos implicados y, si es necesario, busca asesoramiento independiente.
  </td>
</tr>

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
  <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
    &copy; Copyright 2025 GTCFX – Todos los derechos reservados
  </td>
</tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export const emailTempleteSwitchPortuguese = (data) => {
  return ` <!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <title>E-mail OTP da GTC</title>
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
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="Logotipo da GTC" style="width: 140px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px; text-transform: capitalize;">
                Você acabou de tomar a decisão mais inteligente no trading ✅
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
Confirme seu e-mail para migrar para a GTC.
              </td>
            </tr>

            <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Greeting & OTP -->
           <tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    Olá ${data?.nickname || "Cliente"},
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px; font-weight: 600;">
   Bem-vindo(a) a bordo!
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    Você acaba de dar o primeiro passo rumo a uma negociação mais inteligente, rápida e recompensadora com a GTC. 🎯
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
     Nossa equipe amigável de Atendimento ao Cliente da GTC fará uma ligação rápida para ajudar a finalizar a migração e, sim, eles são realmente prestativos (e muito humanos).
  </td>
</tr>

<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:20px;">
    Precisa de ajuda? Basta ligar para <a href="tel:+971800667788" style="color:#000000; text-decoration: underline;">+971 800 667788</a> ou enviar um e-mail para <a href="mailto:partners@gtcfx.com" style="color:#000000; text-decoration: underline;">partners@gtcfx.com</a>.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:30px;">
    Até breve,<br/>
    Equipe de Parcerias da GTC
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
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="Logotipo da GTC" style="width: 140px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Telefone: +971 800 667788<br/>
                      ✉️ E-mail: <a href="mailto:support@gtcaffiliates" style="color: #192055; text-decoration: none;">support@gtcaffiliates</a>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>

            <!-- Legal Footer -->
<tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
    Este site é de propriedade e operado pela GTC Global Ltd, uma sociedade limitada incorporada em Maurício (número da empresa: C188049) e licenciada pela Comissão de Serviços Financeiros de Maurício (No. GB22200292) para atuar como Investment Dealer SEC-2.1B. Endereço registrado: Cyberati Lounge, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, República de Maurício. Os serviços e produtos financeiros promovidos neste site são oferecidos pela GTC Global Ltd e pela GTC Global Trade Capital Co. Limited, uma empresa autorizada pela Comissão de Serviços Financeiros da República de Vanuatu, Número da Licença: 40354.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd e GTC Global Trade Capital Co. Limited</stong> pertencem ao GTC Financial Group, que é composto por um conjunto de entidades em todo o mundo.
    <br/><br/>
    Investir em produtos derivados envolve riscos significativos e pode não ser adequado para todos os investidores. O uso de alavancagem nesses instrumentos pode aumentar o nível de risco e a exposição a perdas potenciais. Antes de decidir participar de operações de câmbio ou CFDs, é essencial avaliar cuidadosamente seus objetivos de investimento, seu nível de experiência e sua tolerância ao risco. Invista apenas fundos que você possa se dar ao luxo de perder. Recomendamos fortemente que você se informe detalhadamente sobre os riscos envolvidos e, em caso de dúvidas, procure aconselhamento de um consultor financeiro ou tributário independente.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd e GTC Global Trade Capital Co. Limited</stong> não prestam serviços a indivíduos residentes em determinadas jurisdições e/ou em jurisdições onde a distribuição desses serviços contrarie a legislação ou regulamentação local.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">Outras Entidades do Grupo:</strong><br/>
    Os produtos e serviços financeiros oferecidos neste site <u>NÃO</u> são fornecidos pelas seguintes entidades do grupo, e não há qualquer recurso contra essas entidades por tais produtos/serviços. Se você tiver interesse nos produtos e serviços oferecidos por cada uma das entidades a seguir, visite seus respectivos sites.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Group LLC-FZ</strong> é uma holding incorporada em Dubai, Emirados Árabes Unidos, com Número de Licença Comercial: 2311147.01. Seu escritório registrado fica em Business Center 1, M Floor, Meydan Hotel, Nad Al Sheba, Dubai, United Arab Emirates.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Multi Trading DMCC</strong> é uma sociedade limitada licenciada e incorporada de acordo com as leis do Dubai Multi Commodities Centre (No. DMCC-312687) e licenciada pela Autoridade de Valores Mobiliários e Mercadorias dos Emirados Árabes Unidos (No. 202200000007) para exercer a atividade de Corretagem de Commodities – Negociação e Compensação. Endereço registrado: Unit No: 1501, 1 Lake Plaza, Plot No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, United Arab Emirates.
    <br/><br/>
    Cada uma das entidades dentro do GTC Financial Group é administrada separadamente. Os produtos e serviços financeiros oferecidos neste site são fornecidos SOMENTE pela GTC Global Ltd e pela GTC Global Trade Capital Co. Limited.
    <br/><br/>
    Todas as marcas comerciais são propriedade de seus respectivos titulares. Todos os direitos reservados. A GTC Global Ltd faz parte do GTC Financial Group, que é composto por um conjunto de entidades em todo o mundo.
    <br/><br/>
    <strong>Aviso de Risco:</strong> Negociar produtos alavancados, como forex e derivados, pode não ser adequado para todos os investidores, pois envolve alto grau de risco para o seu capital. Certifique-se de compreender totalmente os riscos envolvidos e, se necessário, busque aconselhamento independente.
  </td>
</tr>

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
  <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
    &copy; Copyright 2025 GTCFX – Todos os direitos reservados
  </td>
</tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};


export const emailTempleteSwitchChinese = (data) => {
  return ` <!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <title>GTC 验证码邮件</title>
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
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="GTC 标志" style="width: 140px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px; text-transform: capitalize;">
                您刚刚做出了最明智的交易决定 ✅
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
请确认您的邮箱以切换至 GTC。
              </td>
            </tr>

            <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Greeting & OTP -->
           <tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    您好，${data?.nickname || "尊敬的客户"}：
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px; font-weight: 600;">
   欢迎加入！
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    您已经迈出了与 GTC 一起实现更聪明、更快速、更具回报交易的第一步。🎯
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
     我们友善的 GTC 客服团队将尽快致电与您联系，协助您完成切换。没错，他们确实很专业，也非常有人情味。
  </td>
</tr>

<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:20px;">
    需要帮助？请拨打 <a href="tel:+971800667788" style="color:#000000; text-decoration: underline;">+971 800 667788</a> 或发送邮件至 <a href="mailto:partners@gtcfx.com" style="color:#000000; text-decoration: underline;">partners@gtcfx.com</a>。
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:30px;">
    很快再联系，<br/>
    GTC 合作伙伴团队
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
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="GTC 标志" style="width: 140px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 电话：+971 800 667788<br/>
                      ✉️ 邮箱：<a href="mailto:support@gtcaffiliates" style="color: #192055; text-decoration: none;">support@gtcaffiliates</a>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>

            <!-- Legal Footer -->
<tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
    本网站由 GTC Global Ltd 持有并运营，该公司为在毛里求斯注册成立的有限公司（公司编号：C188049），并获毛里求斯金融服务委员会（FSC）许可（编号：GB22200292），以 SEC-2.1B 投资交易商身份开展业务。注册地址：Republic of Mauritius, Ebene 72201, 40 Cybercity, Silicon Avenue, The Catalyst, Ground Floor, Cyberati Lounge。 本网站所推广的金融服务与产品由 GTC Global Ltd 和 GTC Global Trade Capital Co. Limited 提供，后者为获瓦努阿图金融服务委员会授权的公司（公司牌照号：40354）。
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd 和 GTC Global Trade Capital Co. Limited</stong> 同属 GTC 金融集团，该集团由遍布全球的多家实体组成。
    <br/><br/>
    投资衍生产品具有重大风险，并非适合所有投资者。此类工具中的杠杆可能提高风险水平及潜在亏损敞口。在决定参与外汇或差价合约交易之前，请认真评估您的投资目标、经验水平与风险承受能力。仅投入您可承受损失的资金。我们强烈建议您充分了解相关风险，如有疑问，请咨询独立的财务或税务顾问。
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd 和 GTC Global Trade Capital Co. Limited</stong> 不向居住在特定司法辖区的个人及/或在提供此类服务与当地法律或监管规定相抵触的司法辖区提供服务。
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">集团其他实体：</strong><br/>
    本网站所述金融产品与服务<u>并非</u>由以下集团实体提供，且就该等产品/服务不得向以下实体寻求救济。若您对下列实体提供的产品与服务感兴趣，请访问其各自官方网站。
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Group LLC-FZ</strong> 为在阿联酋迪拜注册的控股公司，商业许可编号：2311147.01。注册地址：Business Center 1, M Floor, Meydan Hotel, Nad Al Sheba, Dubai, United Arab Emirates。
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Multi Trading DMCC</strong> 为依据迪拜多种商品中心（DMCC）法律注册成立并持牌的有限公司（编号：DMCC-312687），并获阿联酋证券与商品管理局许可（编号：202200000007）从事“商品经纪—交易与清算”活动。注册地址：Unit No: 1501, 1 Lake Plaza, Plot No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, United Arab Emirates。
    <br/><br/>
    GTC 金融集团内各实体独立运营。本网站所述金融产品与服务仅由 GTC Global Ltd 和 GTC Global Trade Capital Co. Limited 提供。
    <br/><br/>
    所有商标均为其各自所有者的财产。保留所有权利。GTC Global Ltd 是 GTC 金融集团的一部分，该集团由遍布全球的多家实体组成。
    <br/><br/>
    <strong>风险提示：</strong> 交易外汇及其他杠杆产品（如衍生品）可能并不适合所有投资者，且对您的资本带来高度风险。请务必充分理解所涉风险，并在需要时寻求独立建议。
  </td>
</tr>

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
  <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
    &copy; 2025 GTCFX – 保留所有权利
  </td>
</tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};
