import { useTranslations } from 'next-intl'
import React from 'react'
import Link from 'next/link';
import {
    BiLogoFacebookCircle,
    BiLogoYoutube,
    BiLogoLinkedinSquare,
    BiLogoInstagramAlt,
    BiLogoWhatsapp,
    BiLogoTelegram ,
    BiLogoTiktok,
  } from "react-icons/bi";
  import { FaThreads,FaXTwitter} from "react-icons/fa6";


  const socialMediaIcons = [
  { icon: BiLogoFacebookCircle, link: "https://www.facebook.com/profile.php?id=61581869887151" },
  // { icon: FaXTwitter, link: "/" },
  // { icon: BiLogoYoutube, link: "/" },
  { icon: BiLogoLinkedinSquare, link: "https://www.linkedin.com/company/gtc-payouts/" },
  { icon: BiLogoInstagramAlt, link: "https://www.instagram.com/gtcpayouts_official/" },
  // { icon: BiLogoWhatsapp, link: "/" },

];

const CopyRight = () => {
 
  return (
    <ul className="flex justify-center items-center mt-6 gap-2">
    {socialMediaIcons.map((social, index) => (
      <li key={index}>
        <Link href={social.link} target='_blank' className='hover:animate-spi text-[#b88857] hover:text-white'>
          {React.createElement(social.icon, { size: 26})}
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default CopyRight 