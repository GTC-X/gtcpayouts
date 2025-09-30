"use client"
import { useRouter } from "@/i18n/navigation";
import React from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";

/** ======= Config ======= */
const CARDS = [
  {
    title: "Biggest CPA in the\nFX Affiliate World",
    band: "teal",
    bgColor: "bg-[#03A7D9]",
    color: "text-[#03A7D9]",
    icon: (
      // globe
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
      >
        <path
          d="M39.5533 6.47466C38.1534 6.06183 36.7147 5.79376 35.26 5.67466C32.042 5.29397 28.7805 5.54764 25.66 6.42133L25.4733 6.47466C19.8781 8.01106 14.9426 11.343 11.4259 15.9581C7.90911 20.5732 6.00588 26.2159 6.00891 32.0182C6.01194 37.8205 7.92106 43.4611 11.4426 48.0725C14.9642 52.684 19.9032 56.0108 25.5 57.5413C27.5483 58.1213 29.6646 58.4262 31.7933 58.448C32.0308 58.4908 32.2721 58.5087 32.5133 58.5013C34.8841 58.5042 37.2439 58.1812 39.5267 57.5413C45.1187 56.0055 50.052 52.6766 53.569 48.0658C57.0861 43.455 58.9925 37.8172 58.9956 32.0182C58.9986 26.2191 57.0981 20.5793 53.5858 15.9649C50.0735 11.3504 45.1437 8.01635 39.5533 6.47466ZM38.8333 9.03466C42.2862 9.98989 45.4794 11.711 48.1756 14.0702C50.8718 16.4293 53.0015 19.3658 54.4067 22.6613H43.0467C41.689 17.4267 39.1942 12.5556 35.74 8.39466C36.7855 8.53126 37.8195 8.74518 38.8333 9.03466ZM32.5133 8.79467C36.1549 12.742 38.8136 17.493 40.2733 22.6613H24.7C26.1522 17.4799 28.8324 12.7251 32.5133 8.8V8.79467ZM40.94 25.328C41.7929 29.7405 41.7929 34.2755 40.94 38.688H24.0867C23.6356 36.4946 23.4122 34.2606 23.42 32.0213C23.4141 29.7734 23.6375 27.5306 24.0867 25.328H40.94ZM26.0067 9.088L26.1933 9.03466C27.2099 8.76263 28.2432 8.55774 29.2867 8.42133C25.8108 12.5637 23.3052 17.4309 21.9533 22.6667H10.6333C12.0333 19.408 14.1381 16.5002 16.7963 14.1523C19.4545 11.8044 22.6001 10.0748 26.0067 9.088ZM8.67334 32.0213C8.67339 29.754 9.00581 27.4989 9.66001 25.328H21.3667C20.9614 27.5361 20.7561 29.7763 20.7533 32.0213C20.7577 34.2574 20.963 36.4886 21.3667 38.688H9.66001C9.00461 36.5265 8.67214 34.28 8.67334 32.0213ZM26.1933 54.9813C22.7371 54.0332 19.5405 52.3147 16.8433 49.9547C14.1462 47.5947 12.0185 44.6544 10.62 41.3547H21.9267C23.2914 46.6026 25.8155 51.4778 29.3133 55.6213C28.2588 55.486 27.2159 55.2721 26.1933 54.9813ZM24.7 41.3547H40.2733C38.8326 46.5388 36.1718 51.3026 32.5133 55.248C28.8571 51.2925 26.1808 46.5336 24.7 41.3547ZM38.8333 54.9813C37.8046 55.2463 36.7633 55.4599 35.7133 55.6213C39.1771 51.4629 41.681 46.5916 43.0467 41.3547H54.4067C53.0048 44.6523 50.8761 47.5907 48.1795 49.9502C45.4828 52.3098 42.2879 54.0297 38.8333 54.9813ZM43.6333 38.688C44.4607 34.2731 44.4607 29.7429 43.6333 25.328H55.34C56.0059 27.4963 56.3386 29.7531 56.3267 32.0213C56.3327 34.2784 56.0093 36.5243 55.3667 38.688H43.6333Z"
          fill="#03A7D9"
        />
      </svg>
    ),
    back: "We don’t play small. With GTC Payouts you can earn up to $1,850 CPA per referral, which is one of the highest offers in the entire FX world. More referrals, more cash, no caps.",
  },
  {
    title: "Massive Rebates for IBs",
    band: "navy",
    bgColor: "bg-[#04417B]",
    color: "text-[#04417B]",

    icon: (
      // gift
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
      >
        <path
          d="M32.5 17.3333V57.3333M32.5 17.3333V10.6667M32.5 17.3333H25.8334C24.5148 17.3333 23.2259 16.9423 22.1296 16.2098C21.0332 15.4773 20.1787 14.4361 19.6742 13.2179C19.1696 11.9997 19.0376 10.6593 19.2948 9.36607C19.552 8.07286 20.187 6.88497 21.1193 5.95262C22.0517 5.02027 23.2395 4.38534 24.5328 4.1281C25.826 3.87087 27.1664 4.00289 28.3846 4.50747C29.6028 5.01206 30.6439 5.86654 31.3765 6.96287C32.109 8.0592 32.5 9.34813 32.5 10.6667M32.5 17.3333H39.1667C40.4852 17.3333 41.7742 16.9423 42.8705 16.2098C43.9668 15.4773 44.8213 14.4361 45.3259 13.2179C45.8305 11.9997 45.9625 10.6593 45.7053 9.36607C45.448 8.07286 44.8131 6.88497 43.8807 5.95262C42.9484 5.02027 41.7605 4.38534 40.4673 4.1281C39.1741 3.87087 37.8336 4.00289 36.6155 4.50747C35.3973 5.01206 34.3561 5.86654 33.6236 6.96287C32.891 8.0592 32.5 9.34813 32.5 10.6667M9.16669 37.3333H55.8334M9.16669 37.3333C9.16669 31.1253 8.55335 24.9333 7.33735 18.848L7.16669 18V17.3333H57.8334V18L57.6627 18.848C56.4467 24.9347 55.8339 31.1264 55.8334 37.3333M9.16669 37.3333C9.16669 43.5413 8.55335 49.7333 7.33735 55.8187L7.16669 56.6667V57.3333H57.8334V56.6667L57.6627 55.8187C56.4467 49.732 55.8339 43.5403 55.8334 37.3333"
          stroke="url(#paint0_linear_375_432)"
          stroke-width="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_375_432"
            x1="7.16669"
            y1="4"
            x2="60.4299"
            y2="54.6001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#003651" />
            <stop offset="0.350973" stop-color="#04417B" />
            <stop offset="1" stop-color="#03A7D9" />
          </linearGradient>
        </defs>
      </svg>
    ),
    back: "As a GTC Introducing Broker, you’ll earn up to 80% of the revenue from every trader you refer. Your traders trade, and you keep the lion’s share. Simple, aggressive, and highly rewarding.",
  },
  {
    title: "Global Reach, Limitless Earnings",
    band: "orange",
    bgColor: "bg-[#ED8946]",
    color: "text-[#ED8946]",
    icon: (
      // globe pin
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
      >
        <path
          d="M12.7626 27.4241C13.5533 27.7628 14.3293 28.0974 15.1546 28.3828M17.072 52.9641C14.2453 49.5321 14.72 44.3374 11.2493 41.3094C9.70531 39.5641 9.93598 37.0534 10.356 34.9334C10.5906 31.4348 7.47331 28.6561 7.35065 25.1094M25.504 7.27077C25.2533 11.8241 19.2946 9.05743 18.3893 13.1094C19.52 14.2934 21.0373 13.1321 21.9946 12.6188C26.8373 12.7921 24.5146 17.2081 21.028 17.5641C18.6986 18.7974 15.7986 20.0508 14.5573 22.6108C13.7453 23.2788 13.8786 24.8041 12.3706 24.7068C11.788 23.8801 11.96 20.8188 10.4893 22.3334C7.22398 24.5814 11.0893 27.9628 11.1746 30.9694C16.7826 30.4628 19.548 35.5534 23.58 38.4534C25.732 40.1814 30.1346 41.8361 26.76 44.7814C24.984 48.4334 19.8 51.4241 21.8733 55.8148C21.852 56.0148 22.132 55.9761 22.0373 56.2041M57.132 40.2201C54.436 40.0201 53.8866 44.3868 54.4333 46.3321M34.2546 15.9121C34.476 15.8588 34.712 15.8081 34.896 15.6668C35.2346 15.4628 35.1813 14.8934 35.1453 14.5334C34.9853 14.2588 34.852 13.7761 34.5333 13.5814M56.6706 21.8974C55.5306 22.2161 52.5973 20.6308 53.7853 22.4548C53.976 23.6908 55.0386 23.9801 55.6333 24.4001C56.0773 25.2921 56.3746 27.5481 55.156 28.0041C54.3813 28.0321 50.3173 23.8934 51.4453 26.3241C51.664 27.9014 52.8546 29.1588 53.816 30.1508C54.32 31.5508 56.532 30.8161 56.616 31.8894C55.7866 34.5934 54.024 36.4988 52.9226 39.0521C53.1173 41.9201 53.016 44.7988 51.3146 47.2388C43.5666 55.7588 41.688 46.6308 44.3866 39.3961C45.3706 30.7734 36.392 38.0534 33.3466 33.7254C30.6 30.8294 33.0026 25.5428 35.8106 23.4828C36.8506 22.3454 38.652 22.2974 40.064 22.7694C42.9066 23.2308 46.952 23.0094 49.4373 21.5574C49.272 20.6814 47.8106 19.7521 46.816 19.6614C46.652 18.7428 48.98 18.4214 47.4493 17.6468C45.712 17.4961 45.7146 20.8414 44.0933 19.0828C43.7133 17.9241 41.184 17.9281 42.672 19.1668C42.7386 20.5081 42.8546 21.3961 41.9986 19.9534C39.7253 18.7401 37.588 21.3934 35.5133 21.7108C33.5106 19.3908 38.5 14.5681 40.6626 13.8254C42.068 12.6348 38.6786 10.7814 39.4893 12.9588C38.9253 14.3734 35.9133 13.3828 37.2866 11.9988C37.6573 10.6614 38.7 9.74143 39.8253 9.3361C41.228 9.47877 41.8226 9.40943 41.8373 7.85877M28.5573 6.97077C28.4426 7.8841 28.924 8.7521 28.824 9.66543C28.824 10.4761 26.8026 11.9254 27.9946 12.3001C29.2386 12.7201 30.1546 12.2361 30.9013 11.2508C32.2573 10.2068 33.4746 9.13343 33.2573 7.21077C33.0826 7.1481 32.828 7.1001 32.8733 6.98677C31.58 5.97877 29.9826 6.41877 28.5573 6.97077ZM58.8133 32.0001C58.8133 46.5334 47.0333 58.3134 32.5 58.3134C17.9666 58.3134 6.18665 46.5334 6.18665 32.0001C6.18665 17.4668 17.9666 5.68677 32.5 5.68677C47.0333 5.68677 58.8133 17.4668 58.8133 32.0001Z"
          stroke="#ED8946"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    back: "Why limit your earning potential? With GTC, we accept traffic from South America, South East Asia, MENA, and the GCC. This gives you global reach, international scalability, and unlimited Affiliate & IB growth.",
  },
  {
    title: "Instant Access to Your Commissions",
    band: "navy",
    bgColor: "bg-[#04417B]",
    color: "text-[#04417B]",
    icon: (
      // hand/withdraw
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
      >
        <path
          d="M39.1293 25.9573C41.1029 25.9573 43.0322 25.3721 44.6732 24.2756C46.3142 23.1792 47.5932 21.6207 48.3484 19.7973C49.1037 17.974 49.3013 15.9676 48.9163 14.0319C48.5312 12.0963 47.5809 10.3182 46.1853 8.92269C44.7898 7.52715 43.0117 6.57677 41.0761 6.19174C39.1404 5.80671 37.134 6.00432 35.3107 6.75959C33.4873 7.51485 31.9288 8.79384 30.8324 10.4348C29.7359 12.0758 29.1507 14.0051 29.1507 15.9787"
          stroke="url(#paint0_linear_375_435)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M49.516 25.9572C49.516 23.2025 48.4217 20.5606 46.4738 18.6127C44.5259 16.6649 41.884 15.5706 39.1293 15.5706C36.3746 15.5706 33.7327 16.6649 31.7848 18.6127C29.837 20.5606 28.7427 23.2025 28.7427 25.9572C28.7427 30.3639 31.4987 34.1079 35.3733 35.6159V53.1386L39.1293 57.9999L42.8867 53.1386V35.6159C46.76 34.1079 49.516 30.3639 49.516 25.9572Z"
          stroke="url(#paint1_linear_375_435)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26.616 33.1121L16.2653 43.4627L15.484 49.5561L21.5773 48.7761L31.9293 38.4241"
          stroke="url(#paint2_linear_375_435)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_375_435"
            x1="29.1507"
            y1="6"
            x2="49.108"
            y2="25.9573"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#003651" />
            <stop offset="0.350973" stop-color="#04417B" />
            <stop offset="1" stop-color="#03A7D9" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_375_435"
            x1="28.7427"
            y1="15.5706"
            x2="62.256"
            y2="31.9786"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#003651" />
            <stop offset="0.350973" stop-color="#04417B" />
            <stop offset="1" stop-color="#03A7D9" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_375_435"
            x1="15.484"
            y1="33.1121"
            x2="31.928"
            y2="49.5574"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#003651" />
            <stop offset="0.350973" stop-color="#04417B" />
            <stop offset="1" stop-color="#03A7D9" />
          </linearGradient>
        </defs>
      </svg>
    ),
    back: "Your money moves as fast as your traffic. Withdraw your commissions instantly through a wide range of secure payment methods. No delays, no excuses, just quick access to your earnings.",
  },
  {
    title: "Marketing Tools \n& Promos",
    band: "orange",
    bgColor: "bg-[#ED8946]",
    color: "text-[#ED8946]",
    icon: (
      // megaphone
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
      >
        <path
          d="M48.5 47.9999C54.391 47.9999 59.1666 38.4487 59.1666 26.6666C59.1666 14.8845 54.391 5.33325 48.5 5.33325C42.6089 5.33325 37.8333 14.8845 37.8333 26.6666C37.8333 38.4487 42.6089 47.9999 48.5 47.9999Z"
          stroke="#ED8946"
          stroke-width="2"
        />
        <path
          d="M48.5 5.33325C40.2253 5.33325 23.0733 11.6746 13.2226 15.6106C8.71065 17.4133 5.83331 21.8079 5.83331 26.6666C5.83331 31.5253 8.71331 35.9199 13.2226 37.7226C23.0733 41.6586 40.2253 47.9999 48.5 47.9999"
          stroke="#ED8946"
          stroke-width="2"
        />
        <path
          d="M29.8333 58.6667L24.652 55.8133C21.8858 54.2824 19.642 51.9575 18.2103 49.1387C16.7786 46.32 16.2246 43.1367 16.62 40"
          stroke="#ED8946"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    back: "From high-converting banners, landing pages, videos, widgets, and content, we arm you with everything you need to drive traffic, crush conversions, and scale your income fast.",
  },
  {
    title: "Track Every Click & Conversion",
    band: "teal",
    bgColor: "bg-[#03A7D9]",
    color: "text-[#03A7D9]",
    icon: (
      // arrow graph
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
      >
        <path
          d="M56.4999 8L39.1666 56C39.0496 56.2553 38.8618 56.4717 38.6254 56.6233C38.3891 56.775 38.1141 56.8557 37.8333 56.8557C37.5524 56.8557 37.2775 56.775 37.0411 56.6233C36.8048 56.4717 36.6169 56.2553 36.4999 56L27.1666 37.3333L8.49994 28C8.24463 27.883 8.02828 27.6952 7.8766 27.4588C7.72492 27.2224 7.64429 26.9475 7.64429 26.6667C7.64429 26.3858 7.72492 26.1109 7.8766 25.8745C8.02828 25.6382 8.24463 25.4503 8.49994 25.3333L56.4999 8Z"
          stroke="#03A7D9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    back: "See exactly how much you’re earning in real-time with detailed reports on clicks, referrals, conversions, and commissions. No hidden numbers, just complete transparency on your growth.",
  },
];

/** ======= Section ======= */
export default function ReasonsFlipGrid() {
  const router = useRouter();
  return (
    <section className="bg-white">
      <div className="container mx-auto pt-12 pb-10 md:pt-16 md:pb-20 font-[Poppins]">
        {/* heading */}
        <h2 className="text-center text-[#03A7D9] font-semibold text-[24px] md:text-[32px] leading-tight">
          Here’s why thousands of Affiliates & IBs are
          <br className="hidden md:block" /> partnering with GTC
        </h2>
        <p className="mt-8 text-center text-[#04417B] text-[22px] leading-[32px] max-w-[780px] mx-auto">
          With over 175,000 partners across a multitude of countries, there’s a
          reason so many forex Affiliates & Introducing Brokers are flocking to
          GTC. Here’s some of the reasons:
        </p>

        {/* grid */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {CARDS.map((c, i) => (
            <FlipCard
              key={i}
              front={<FrontCard {...c} />}
              back={<BackCard text={c.back} />}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <button className=" inline-flex h-[46px] cursor-pointer items-center gap-2 rounded-[12px] bg-[#ED8946] px-6 text-[16px] font-semibold text-white transition-colors hover:bg-[#ea9a0a]"
            onMouseEnter={() => router.prefetch?.("/single-form")} // prefetch on intent too
            onClick={() => router.push("/single-form?source=affiliate")}
          >
            Grow My Business
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="translate-x-[1px]"
              fill="none"
            >
              <path
                d="M9 6l6 6l-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/** ======= Flip card (pure Tailwind 3D) ======= */
function FlipCard({ front, back }) {
  return (
    <div className="group outline-none" tabIndex={0}>
      <div
        className="
          relative h-[350px] sm:h-[400px] w-full
          [transform-style:preserve-3d] transform-gpu transition-transform duration-700
          hover:[transform:rotateY(180deg)]
          focus:[transform:rotateY(180deg)]
        "
      >
        {/* front */}
        <div
          className="
            absolute inset-0 [backface-visibility:hidden]
            rounded-[16px] bg-white
            border border-[#EEF2F7]
          "
          style={{
            boxShadow: "1px 6px 16px 0px #0000001A",
          }}
        >
          {front}
        </div>

        {/* back */}
        <div
          className="
            absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]
            rounded-[16px] text-white
            bg-[#03A7D9]
             border border-transparent
            flex items-center justify-center px-6 text-center
          "
          style={{
            boxShadow: "1px 6px 16px 0px #0000001A",
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}

/** ======= Card faces ======= */
function FrontCard({ title, icon, bgColor, color, band }) {
  const bandBg =
    band === "teal"
      ? "bg-[linear-gradient(135deg,#00B8D4_0%,#15A7CF_48%,transparent_48%)]"
      : band === "navy"
        ? "bg-[linear-gradient(135deg,#0B4E8F_0%,#0B6BB2_48%,transparent_48%)]"
        : "bg-[linear-gradient(135deg,#F59E0B_0%,#F39A0D_48%,transparent_48%)]";

  return (
    <div className="relative h-full rounded-[16px] overflow-hidden">
      {/* diagonal band */}
      <div
        className={` md:h-[200px] h-[150px] ${bgColor} [clip-path:polygon(0%_0%,100%_0,100%_20%,100%_100%,0%_40%)]
 ${band}`}
      />

      <div className="relative flex flex-col justify-end px-6 pb-6">
        <div className="mb-6">{icon}</div>
        <h3 className={`text-[26px] leading-[36px] ${color}`}> {title.split("\n").map((line, i) => (
      <span key={i} className="block">{line}</span>
    ))}</h3>
      </div>
    </div>
  );
}

function BackCard({ text }) {
  return (
    <p className="text-base md:text-[18px] leading-[32px] text-white">{text}</p>
  );
}
