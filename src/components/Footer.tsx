import React from "react";

function Footer() {
  return (
    <div className="bg-[#101010] w-full h-20vh py-10 text-white px-10">
      <div className="pb-5">
      <svg width="137" height="42" viewBox="0 0 137 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.6735 24.7965L54.9281 8.52026H58.6484L65.9262 24.7965H61.9734L56.0209 10.4269H57.509L51.5333 24.7965H47.6735ZM51.3008 21.3087L52.3007 18.4488H60.6713L61.6944 21.3087H51.3008ZM72.9628 25.0755C71.6607 25.0755 70.4128 24.905 69.2192 24.564C68.0256 24.2075 67.0646 23.7502 66.336 23.1921L67.6149 20.3554C68.3124 20.8515 69.134 21.2622 70.0795 21.5878C71.0406 21.8978 72.0094 22.0528 72.986 22.0528C73.7301 22.0528 74.3269 21.983 74.7764 21.8435C75.2414 21.6885 75.5825 21.4793 75.7995 21.2157C76.0165 20.9522 76.125 20.6499 76.125 20.3089C76.125 19.8749 75.9545 19.5339 75.6135 19.2858C75.2724 19.0223 74.8229 18.8131 74.2649 18.658C73.7068 18.4875 73.0868 18.3325 72.4047 18.193C71.7382 18.038 71.0639 17.852 70.3818 17.635C69.7153 17.4179 69.103 17.1389 68.5449 16.7979C67.9869 16.4569 67.5296 16.0073 67.1731 15.4493C66.832 14.8913 66.6615 14.1782 66.6615 13.3101C66.6615 12.3801 66.9095 11.5352 67.4056 10.7757C67.9171 10.0006 68.6767 9.38833 69.6843 8.9388C70.7073 8.47376 71.9862 8.24124 73.5208 8.24124C74.5439 8.24124 75.5515 8.36525 76.5435 8.61327C77.5356 8.84579 78.4114 9.20232 79.171 9.68285L78.0084 12.5428C77.2488 12.1088 76.4893 11.791 75.7297 11.5895C74.9702 11.3725 74.2261 11.264 73.4976 11.264C72.769 11.264 72.1722 11.3492 71.7072 11.5197C71.2421 11.6903 70.9089 11.915 70.7073 12.194C70.5058 12.4576 70.4051 12.7676 70.4051 13.1241C70.4051 13.5426 70.5756 13.8837 70.9166 14.1472C71.2576 14.3952 71.7072 14.5967 72.2652 14.7517C72.8233 14.9068 73.4355 15.0618 74.1021 15.2168C74.7842 15.3718 75.4585 15.5501 76.125 15.7516C76.8071 15.9531 77.4271 16.2244 77.9851 16.5654C78.5432 16.9064 78.9927 17.3559 79.3337 17.914C79.6903 18.472 79.8685 19.1773 79.8685 20.0299C79.8685 20.9445 79.6128 21.7815 79.1012 22.5411C78.5897 23.3006 77.8224 23.9129 76.7993 24.378C75.7917 24.843 74.5129 25.0755 72.9628 25.0755ZM85.8139 21.0762L85.6046 16.7281L93.394 8.52026H97.5793L90.5573 16.0771L88.4646 18.3093L85.8139 21.0762ZM82.4424 24.7965V8.52026H86.1859V24.7965H82.4424ZM93.58 24.7965L87.7903 17.7047L90.255 15.0308L97.9746 24.7965H93.58Z" fill="white"/>
          <path d="M106.853 25.0755C105.598 25.0755 104.427 24.874 103.342 24.471C102.273 24.0525 101.342 23.4634 100.552 22.7038C99.7613 21.9443 99.1413 21.053 98.6918 20.0299C98.2577 19.0068 98.0407 17.883 98.0407 16.6584C98.0407 15.4338 98.2577 14.31 98.6918 13.2869C99.1413 12.2638 99.7613 11.3725 100.552 10.6129C101.358 9.85337 102.296 9.27207 103.365 8.86904C104.435 8.45051 105.605 8.24124 106.876 8.24124C108.287 8.24124 109.558 8.48926 110.69 8.9853C111.837 9.46584 112.798 10.1789 113.573 11.1245L111.155 13.3566C110.597 12.7211 109.977 12.2483 109.295 11.9383C108.613 11.6128 107.868 11.45 107.062 11.45C106.303 11.45 105.605 11.574 104.97 11.822C104.334 12.07 103.784 12.4266 103.319 12.8916C102.854 13.3566 102.49 13.9069 102.226 14.5425C101.978 15.178 101.854 15.8833 101.854 16.6584C101.854 17.4334 101.978 18.1387 102.226 18.7743C102.49 19.4098 102.854 19.9601 103.319 20.4252C103.784 20.8902 104.334 21.2467 104.97 21.4948C105.605 21.7428 106.303 21.8668 107.062 21.8668C107.868 21.8668 108.613 21.7118 109.295 21.4017C109.977 21.0762 110.597 20.5879 111.155 19.9369L113.573 22.1691C112.798 23.1146 111.837 23.8354 110.69 24.3315C109.558 24.8275 108.279 25.0755 106.853 25.0755ZM113.682 24.7965L120.937 8.52026H124.657L131.935 24.7965H127.982L122.03 10.4269H123.518L117.542 24.7965H113.682ZM117.31 21.3087L118.309 18.4488H126.68L127.703 21.3087H117.31Z" fill="#F69526"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.066 12.7062C14.066 12.599 14.6158 11.4023 15.2877 10.047L16.4139 7.77565C16.4725 7.65754 16.5929 7.58283 16.7247 7.58283H19.4022H22.0814C22.2124 7.58283 22.3322 7.65663 22.3912 7.77362L23.8521 10.6723C24.7087 12.3716 25.4509 13.8033 25.5016 13.854C25.5523 13.9047 26.1749 15.1082 26.885 16.5285C27.5951 17.9487 28.2176 19.1522 28.2683 19.2029C28.319 19.2537 28.7755 20.1252 29.2828 21.1396C29.75 22.0742 30.1939 22.9414 30.261 23.0722C30.267 23.0839 30.2733 23.0947 30.2807 23.1056L30.4282 23.327C30.4382 23.3419 30.4464 23.3565 30.454 23.3727C30.5721 23.6276 31.6197 25.8821 31.7698 26.0274C31.8222 26.0782 32.3885 27.1572 33.0281 28.4252C33.6678 29.6933 34.4731 31.2288 34.8176 31.8375C35.1622 32.4462 35.4481 33.048 35.4529 33.1747C35.4577 33.3006 35.357 33.4053 35.231 33.4053H31.9941H28.3616L27.8448 32.2907C27.8424 32.2854 27.84 32.2805 27.8373 32.2754C27.803 32.2098 27.5474 31.7178 27.2751 31.1146C26.9824 30.4661 26.4429 29.3513 26.0762 28.6372L25.5048 27.5244C25.4461 27.4101 25.3291 27.3376 25.2006 27.336L16.1871 27.2204C8.68145 27.1241 7.05028 27.1605 6.94121 26.7709C6.89806 26.6167 7.09314 26.3959 7.25695 26.0737L7.60729 25.3848C7.66586 25.2696 7.78358 25.1966 7.91279 25.1952L12.2676 25.1482L16.4895 25.1025C16.6796 25.1004 16.8327 24.9457 16.8327 24.7556V24.5487V24.3455C16.8327 24.1539 16.6773 23.9985 16.4857 23.9985H12.6826H8.77107C8.63936 23.9985 8.53258 23.8918 8.53258 23.76C8.53258 23.6289 9.23717 22.1142 10.0985 20.3939C10.9235 18.7461 11.6066 17.1876 11.6626 17.0595C11.6654 17.0531 11.6679 17.0479 11.671 17.0417L11.8005 16.7872C11.8049 16.7786 11.8094 16.7706 11.8144 16.7623C11.8815 16.6531 12.3927 15.8143 12.8628 14.8684C13.3671 13.854 13.8441 12.9963 13.9228 12.9626C14.0016 12.9286 14.066 12.8133 14.066 12.7062ZM17.4601 18.9456C17.8052 18.2248 18.3835 16.992 18.745 16.2057C19.1067 15.4194 19.4675 14.7801 19.547 14.7849C19.7146 14.7949 20.9012 17.2674 20.9847 17.4419C20.988 17.4488 20.9912 17.4549 20.995 17.4617L21.2479 17.9111C21.2555 17.9247 21.2622 17.9387 21.268 17.9532C21.3543 18.1695 22.0754 19.9645 22.7464 21.2955C22.943 21.6854 23.1038 22.038 23.1038 22.0794C23.1038 22.1205 21.4757 22.1541 19.4859 22.1541H16.4116C16.178 22.1541 16.0379 21.8947 16.1659 21.6994C16.3206 21.4633 16.54 21.056 16.5638 21.0115C16.5653 21.0088 16.5666 21.0062 16.568 21.0033L16.7394 20.6606L16.8243 20.4846C16.8299 20.4731 16.8347 20.4616 16.839 20.4496C16.8824 20.3281 17.1452 19.6035 17.4601 18.9456ZM4.07395 29.3816C4.08193 29.3589 4.09226 29.3371 4.10476 29.3165L4.33888 28.9312C4.35695 28.9015 4.37044 28.8692 4.3789 28.8354L4.41594 28.6878C4.45464 28.5334 4.59335 28.4252 4.75244 28.4252H9.84713H13.2935C13.5189 28.4252 13.6845 28.637 13.6302 28.8558L13.6111 28.9325C13.5534 29.1653 13.4147 29.4102 13.3706 29.4846C13.3615 29.4999 13.3533 29.5156 13.3463 29.532L13.1521 29.9851C13.1165 30.0681 13.0479 30.1274 12.9584 30.1386C12.6602 30.176 11.7451 30.2454 9.01731 30.2618L4.26984 30.282C4.07766 30.2829 3.92143 30.1273 3.92143 29.9351V29.8748C3.92143 29.8356 3.92807 29.7967 3.94106 29.7597L4.07395 29.3816ZM0.558822 33.4053C0.301531 33.4053 0.13376 33.135 0.247895 32.9044L0.498927 32.3973L0.902572 31.5822C0.961052 31.4641 1.08138 31.3894 1.21315 31.3893L8.27122 31.3828C10.4101 31.3793 12.2064 31.4227 12.263 31.4793C12.3915 31.6077 11.9309 32.5333 11.8859 32.6228C11.8833 32.6279 11.8812 32.6323 11.8789 32.6375L11.5354 33.4053H7.23464H0.558822Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28.191 4.4229C28.1366 4.51106 27.6753 4.63833 27.1657 4.70602C26.7202 4.76505 26.3455 4.95088 26.2585 4.99661C26.2457 5.00332 26.2336 5.01115 26.222 5.01971L26.0174 5.17043C26.0042 5.18015 25.9907 5.18871 25.9765 5.19686C25.8557 5.26616 25.2337 5.64273 24.591 6.39868L24.224 6.83031C24.1706 6.89304 24.1413 6.97271 24.1413 7.05506V8.09891C24.1413 8.74336 24.2192 9.32658 24.3143 9.39501C24.5276 9.54865 24.8072 10.0094 25.3415 11.0873C25.5677 11.5438 25.8001 11.9588 25.8578 12.0095C25.9155 12.0603 26.1171 12.4338 26.3058 12.8395C26.4945 13.2453 26.7197 13.7018 26.806 13.854C26.8925 14.0062 27.1532 14.5042 27.385 14.9607C27.617 15.4172 27.8485 15.8322 27.8992 15.8829C27.9501 15.9336 28.2822 16.551 28.6372 17.255L29.211 18.3923C29.2565 18.4827 29.3393 18.5486 29.4376 18.5729L29.9283 18.694C30.2834 18.7817 30.8445 18.9777 31.1754 19.1299C31.5063 19.2821 31.8798 19.3453 32.0054 19.2703C32.2922 19.0993 34.1914 17.698 34.4692 17.4525L34.4862 17.4375C34.5992 17.3378 34.6348 17.1765 34.5744 17.0384L34.4731 16.807C34.3615 16.5524 34.2208 16.3025 34.1603 16.2518C34.0998 16.2011 33.8533 15.6616 33.6125 15.0529C33.3716 14.4442 33.1082 13.8675 33.027 13.771C32.954 13.6843 32.8163 13.3626 32.7895 13.2993C32.7864 13.2919 32.7831 13.2848 32.7796 13.2777L32.6255 12.9696C32.6162 12.9509 32.6051 12.9331 32.594 12.9154C32.5651 12.8691 32.5106 12.767 32.5106 12.6551C32.5106 12.5023 32.6344 12.3784 32.7872 12.3784H33.4966C36.3659 12.3784 39.0212 7.49964 36.6477 6.58903C36.0427 6.35681 35.89 6.65064 35.902 8.02384C35.9143 9.42987 35.8511 9.5706 34.9134 10.2187C34.2201 10.6981 31.2966 9.8204 31.0787 9.75401C31.0692 9.75112 31.0612 9.74821 31.0521 9.74449L30.7248 9.61173L28.7978 8.95263C28.7961 8.95204 28.7945 8.95149 28.7928 8.95088C28.7464 8.93439 28.0463 8.68816 27.5792 8.68674C25.0558 8.67862 25.587 6.24412 28.2532 5.59874C29.0354 5.40932 29.3604 4.96646 29.019 4.55496C28.7538 4.2355 28.3471 4.17058 28.191 4.4229ZM29.8145 13.4851C29.0708 13.4851 28.6527 13.1066 28.6431 12.4245C28.6398 12.1964 28.666 12.0095 28.701 12.0095C28.9969 12.0095 29.9507 12.6617 30.1908 13.0284C30.3194 13.2246 30.1787 13.4851 29.9441 13.4851H29.8145Z" fill="#F69526"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.36556 6.49626C9.8013 6.96271 9.92533 6.99463 11.6478 7.08258C13.0286 7.153 13.6682 7.26905 14.2921 7.56238C14.7449 7.77522 15.1152 7.98043 15.1152 8.01842C15.1152 8.05641 14.2495 9.81778 13.1912 11.9327L11.2671 15.7777L10.7753 14.9876C10.5047 14.553 10.0492 14.0306 9.76297 13.8267C9.47675 13.6229 8.90501 13.3941 8.49268 13.3181C8.08035 13.2423 6.97885 13.2536 6.04509 13.3433C5.11115 13.4331 4.32084 13.4769 4.28858 13.4408C4.25631 13.4047 4.17808 13.2059 4.11459 12.999C4.04087 12.7592 4.08025 12.596 4.22301 12.5488C4.34634 12.5082 4.24382 12.5056 3.99542 12.5429C3.66688 12.5925 3.47121 12.5004 3.27797 12.2055C3.02679 11.822 3.04379 11.7654 3.59316 11.1659C3.91268 10.8173 4.33316 10.4469 4.52744 10.343C4.77133 10.2124 4.88079 9.97979 4.88079 9.5914C4.88079 9.12392 5.04974 8.8802 5.88272 8.14713C6.43365 7.66212 7.0387 7.21562 7.22708 7.15491C7.41529 7.0942 7.70255 6.81024 7.86491 6.52385C8.04948 6.1986 8.30031 6.00293 8.53258 6.00293C8.73727 6.00293 9.11212 6.22497 9.36556 6.49626ZM9.1456 6.95525C9.34162 7.25465 9.38412 7.4668 9.2705 7.58042C9.15705 7.69387 9.02331 7.66143 8.87656 7.48467C8.75444 7.33757 8.54125 7.21719 8.40283 7.21719C8.25712 7.21719 8.17559 7.09021 8.20924 6.91553C8.24116 6.7497 8.39814 6.5889 8.5579 6.55802C8.72235 6.52645 8.97752 6.69905 9.1456 6.95525ZM6.70217 6.78109C6.51136 6.91674 6.21873 7.16202 6.05168 7.3263C5.76425 7.60887 5.74811 7.60662 5.74811 7.28224C5.74811 7.09385 5.84179 6.84597 5.95627 6.73148C6.07076 6.617 6.3634 6.52575 6.60677 6.52888C7.03644 6.53425 7.03922 6.54137 6.70217 6.78109ZM5.88689 9.50693C6.00137 9.62141 6.09505 9.85559 6.09505 10.0273C6.09505 10.1991 5.97796 10.3396 5.83485 10.3396C5.66138 10.3396 5.57465 10.1661 5.57465 9.81916C5.57465 9.53295 5.59807 9.29877 5.62669 9.29877C5.65531 9.29877 5.7724 9.39244 5.88689 9.50693ZM9.16555 14.3223C9.47102 14.5084 9.83964 14.8902 9.98465 15.1707C10.1297 15.4511 10.2983 15.993 10.3593 16.3748C10.4223 16.7687 10.3802 17.3425 10.2619 17.7009L10.0533 18.3327L9.01776 18.2154C8.07793 18.1091 7.95754 18.1335 7.71573 18.4787C7.53203 18.741 7.30635 18.8426 6.98891 18.8059C6.57034 18.7575 6.52871 18.685 6.52871 18.0053V17.2579L6.13928 17.7451L5.74985 18.2322L5.74898 17.6745C5.74846 17.3033 5.91933 16.9217 6.26018 16.5335C6.54189 16.2127 7.07027 15.8611 7.43437 15.752C7.79865 15.6429 8.24081 15.4481 8.41722 15.3192C8.71957 15.0981 8.72165 15.0535 8.45278 14.5336C8.2389 14.1201 8.22312 13.9825 8.38895 13.983C8.51072 13.9834 8.86025 14.136 9.16555 14.3223Z" fill="#F69526"/>
          <path d="M46.8478 33.7L48.3408 30.4031H48.8071L50.3048 33.7H49.8102L48.4774 30.6669H48.6658L47.3329 33.7H46.8478ZM47.4836 32.8758L47.6108 32.499H49.4664L49.603 32.8758H47.4836ZM50.7966 33.7V30.4031H51.1828L53.3634 33.1112H53.1608V30.4031H53.6318V33.7H53.2456L51.065 30.9919H51.2675V33.7H50.7966ZM55.3842 33.7L56.8772 30.4031H57.3434L58.8411 33.7H58.3466L57.0138 30.6669H57.2021L55.8693 33.7H55.3842ZM56.02 32.8758L56.1472 32.499H58.0028L58.1394 32.8758H56.02ZM59.3329 33.7V30.4031H59.8039V33.7H59.3329ZM60.7909 33.7V30.4031H62.1803C62.5319 30.4031 62.8412 30.4722 63.1081 30.6104C63.3781 30.7485 63.5869 30.9416 63.7345 31.1897C63.8852 31.4377 63.9606 31.725 63.9606 32.0515C63.9606 32.3781 63.8852 32.6654 63.7345 32.9134C63.5869 33.1615 63.3781 33.3546 63.1081 33.4927C62.8412 33.6309 62.5319 33.7 62.1803 33.7H60.7909ZM61.2619 33.2902H62.152C62.4252 33.2902 62.6607 33.2384 62.8585 33.1348C63.0594 33.0312 63.2149 32.8867 63.3247 32.7015C63.4346 32.5131 63.4896 32.2965 63.4896 32.0515C63.4896 31.8035 63.4346 31.5869 63.3247 31.4016C63.2149 31.2164 63.0594 31.0719 62.8585 30.9683C62.6607 30.8647 62.4252 30.8129 62.152 30.8129H61.2619V33.2902ZM66.6014 33.7V30.8129H65.4711V30.4031H68.198V30.8129H67.0677V33.7H66.6014ZM70.1532 33.7376C69.9021 33.7376 69.6681 33.6952 69.4515 33.6105C69.238 33.5257 69.0527 33.4079 68.8958 33.2572C68.7388 33.1034 68.6163 32.9244 68.5284 32.7203C68.4405 32.5162 68.3965 32.2933 68.3965 32.0515C68.3965 31.8098 68.4405 31.5869 68.5284 31.3828C68.6163 31.1787 68.7388 31.0013 68.8958 30.8506C69.0527 30.6967 69.238 30.5774 69.4515 30.4926C69.665 30.4079 69.8989 30.3655 70.1532 30.3655C70.4044 30.3655 70.6352 30.4079 70.8456 30.4926C71.0591 30.5743 71.2443 30.692 71.4013 30.8459C71.5615 30.9966 71.6839 31.174 71.7687 31.3781C71.8566 31.5821 71.9006 31.8066 71.9006 32.0515C71.9006 32.2965 71.8566 32.521 71.7687 32.725C71.6839 32.9291 71.5615 33.1081 71.4013 33.2619C71.2443 33.4127 71.0591 33.5304 70.8456 33.6152C70.6352 33.6968 70.4044 33.7376 70.1532 33.7376ZM70.1532 33.3185C70.3354 33.3185 70.5033 33.2871 70.6572 33.2243C70.8142 33.1615 70.9492 33.0736 71.0622 32.9605C71.1784 32.8444 71.2679 32.7093 71.3307 32.5555C71.3966 32.4016 71.4296 32.2337 71.4296 32.0515C71.4296 31.8694 71.3966 31.7015 71.3307 31.5476C71.2679 31.3938 71.1784 31.2603 71.0622 31.1473C70.9492 31.0311 70.8142 30.9416 70.6572 30.8788C70.5033 30.816 70.3354 30.7846 70.1532 30.7846C69.968 30.7846 69.7969 30.816 69.6399 30.8788C69.486 30.9416 69.351 31.0311 69.2349 31.1473C69.1187 31.2603 69.0276 31.3938 68.9617 31.5476C68.8989 31.7015 68.8675 31.8694 68.8675 32.0515C68.8675 32.2337 68.8989 32.4016 68.9617 32.5555C69.0276 32.7093 69.1187 32.8444 69.2349 32.9605C69.351 33.0736 69.486 33.1615 69.6399 33.2243C69.7969 33.2871 69.968 33.3185 70.1532 33.3185ZM74.6812 33.7V32.4377L74.7895 32.7297L73.3719 30.4031H73.8758L75.0674 32.3671H74.7942L75.9905 30.4031H76.4567L75.0438 32.7297L75.1474 32.4377V33.7H74.6812ZM78.2803 33.7376C78.0291 33.7376 77.7952 33.6952 77.5785 33.6105C77.365 33.5257 77.1798 33.4079 77.0228 33.2572C76.8658 33.1034 76.7433 32.9244 76.6554 32.7203C76.5675 32.5162 76.5235 32.2933 76.5235 32.0515C76.5235 31.8098 76.5675 31.5869 76.6554 31.3828C76.7433 31.1787 76.8658 31.0013 77.0228 30.8506C77.1798 30.6967 77.365 30.5774 77.5785 30.4926C77.792 30.4079 78.0259 30.3655 78.2803 30.3655C78.5315 30.3655 78.7622 30.4079 78.9726 30.4926C79.1861 30.5743 79.3714 30.692 79.5283 30.8459C79.6885 30.9966 79.8109 31.174 79.8957 31.3781C79.9836 31.5821 80.0276 31.8066 80.0276 32.0515C80.0276 32.2965 79.9836 32.521 79.8957 32.725C79.8109 32.9291 79.6885 33.1081 79.5283 33.2619C79.3714 33.4127 79.1861 33.5304 78.9726 33.6152C78.7622 33.6968 78.5315 33.7376 78.2803 33.7376ZM78.2803 33.3185C78.4624 33.3185 78.6304 33.2871 78.7842 33.2243C78.9412 33.1615 79.0762 33.0736 79.1892 32.9605C79.3054 32.8444 79.3949 32.7093 79.4577 32.5555C79.5236 32.4016 79.5566 32.2337 79.5566 32.0515C79.5566 31.8694 79.5236 31.7015 79.4577 31.5476C79.3949 31.3938 79.3054 31.2603 79.1892 31.1473C79.0762 31.0311 78.9412 30.9416 78.7842 30.8788C78.6304 30.816 78.4624 30.7846 78.2803 30.7846C78.095 30.7846 77.9239 30.816 77.7669 30.8788C77.6131 30.9416 77.478 31.0311 77.3619 31.1473C77.2457 31.2603 77.1546 31.3938 77.0887 31.5476C77.0259 31.7015 76.9945 31.8694 76.9945 32.0515C76.9945 32.2337 77.0259 32.4016 77.0887 32.5555C77.1546 32.7093 77.2457 32.8444 77.3619 32.9605C77.478 33.0736 77.6131 33.1615 77.7669 33.2243C77.9239 33.2871 78.095 33.3185 78.2803 33.3185ZM82.1132 33.7376C81.68 33.7376 81.3393 33.6136 81.0912 33.3656C80.8432 33.1175 80.7192 32.7549 80.7192 32.2776V30.4031H81.1901V32.2588C81.1901 32.6261 81.2702 32.8946 81.4303 33.0641C81.5936 33.2337 81.8228 33.3185 82.118 33.3185C82.4162 33.3185 82.6454 33.2337 82.8056 33.0641C82.9688 32.8946 83.0505 32.6261 83.0505 32.2588V30.4031H83.5073V32.2776C83.5073 32.7549 83.3833 33.1175 83.1353 33.3656C82.8903 33.6136 82.5497 33.7376 82.1132 33.7376ZM84.4729 33.7V30.4031H85.7586C86.0475 30.4031 86.294 30.4487 86.4981 30.5397C86.7022 30.6308 86.8591 30.7627 86.969 30.9353C87.0789 31.108 87.1339 31.3137 87.1339 31.5523C87.1339 31.7909 87.0789 31.9966 86.969 32.1693C86.8591 32.3388 86.7022 32.4691 86.4981 32.5602C86.294 32.6513 86.0475 32.6968 85.7586 32.6968H84.7319L84.9439 32.4801V33.7H84.4729ZM86.677 33.7L85.8387 32.5037H86.3426L87.1904 33.7H86.677ZM84.9439 32.5272L84.7319 32.2965H85.7445C86.0459 32.2965 86.2736 32.2321 86.4274 32.1034C86.5844 31.9715 86.6629 31.7878 86.6629 31.5523C86.6629 31.3168 86.5844 31.1347 86.4274 31.006C86.2736 30.8773 86.0459 30.8129 85.7445 30.8129H84.7319L84.9439 30.5774V32.5272ZM89.8143 33.7V30.8129H88.6839V30.4031H91.4109V30.8129H90.2805V33.7H89.8143ZM91.9238 33.7V30.4031H93.2096C93.4984 30.4031 93.7449 30.4487 93.949 30.5397C94.1531 30.6308 94.3101 30.7627 94.42 30.9353C94.5299 31.108 94.5848 31.3137 94.5848 31.5523C94.5848 31.7909 94.5299 31.9966 94.42 32.1693C94.3101 32.3388 94.1531 32.4691 93.949 32.5602C93.7449 32.6513 93.4984 32.6968 93.2096 32.6968H92.1828L92.3948 32.4801V33.7H91.9238ZM94.128 33.7L93.2896 32.5037H93.7936L94.6413 33.7H94.128ZM92.3948 32.5272L92.1828 32.2965H93.1954C93.4969 32.2965 93.7245 32.2321 93.8783 32.1034C94.0353 31.9715 94.1138 31.7878 94.1138 31.5523C94.1138 31.3168 94.0353 31.1347 93.8783 31.006C93.7245 30.8773 93.4969 30.8129 93.1954 30.8129H92.1828L92.3948 30.5774V32.5272ZM94.8465 33.7L96.3395 30.4031H96.8057L98.3034 33.7H97.8089L96.476 30.6669H96.6644L95.3316 33.7H94.8465ZM95.4823 32.8758L95.6095 32.499H97.4651L97.6017 32.8758H95.4823ZM98.7952 33.7V30.4031H100.185C100.536 30.4031 100.846 30.4722 101.112 30.6104C101.382 30.7485 101.591 30.9416 101.739 31.1897C101.89 31.4377 101.965 31.725 101.965 32.0515C101.965 32.3781 101.89 32.6654 101.739 32.9134C101.591 33.1615 101.382 33.3546 101.112 33.4927C100.846 33.6309 100.536 33.7 100.185 33.7H98.7952ZM99.2662 33.2902H100.156C100.429 33.2902 100.665 33.2384 100.863 33.1348C101.064 33.0312 101.219 32.8867 101.329 32.7015C101.439 32.5131 101.494 32.2965 101.494 32.0515C101.494 31.8035 101.439 31.5869 101.329 31.4016C101.219 31.2164 101.064 31.0719 100.863 30.9683C100.665 30.8647 100.429 30.8129 100.156 30.8129H99.2662V33.2902ZM102.686 33.7V30.4031H103.157V33.7H102.686ZM104.144 33.7V30.4031H104.53L106.711 33.1112H106.509V30.4031H106.979V33.7H106.593L104.413 30.9919H104.615V33.7H104.144ZM109.455 33.7376C109.2 33.7376 108.966 33.6968 108.753 33.6152C108.539 33.5304 108.354 33.4127 108.197 33.2619C108.04 33.1081 107.918 32.9291 107.83 32.725C107.742 32.521 107.698 32.2965 107.698 32.0515C107.698 31.8066 107.742 31.5821 107.83 31.3781C107.918 31.174 108.04 30.9966 108.197 30.8459C108.357 30.692 108.544 30.5743 108.758 30.4926C108.971 30.4079 109.207 30.3655 109.464 30.3655C109.725 30.3655 109.963 30.4079 110.18 30.4926C110.397 30.5774 110.58 30.7046 110.731 30.8741L110.439 31.1661C110.304 31.0343 110.156 30.9385 109.996 30.8788C109.839 30.816 109.668 30.7846 109.483 30.7846C109.294 30.7846 109.119 30.816 108.955 30.8788C108.795 30.9416 108.655 31.0295 108.536 31.1426C108.42 31.2556 108.329 31.3906 108.263 31.5476C108.2 31.7015 108.169 31.8694 108.169 32.0515C108.169 32.2305 108.2 32.3985 108.263 32.5555C108.329 32.7093 108.42 32.8444 108.536 32.9605C108.655 33.0736 108.795 33.1615 108.955 33.2243C109.115 33.2871 109.29 33.3185 109.478 33.3185C109.654 33.3185 109.822 33.2918 109.982 33.2384C110.145 33.1819 110.296 33.0893 110.434 32.9605L110.703 33.3185C110.539 33.4566 110.348 33.5618 110.128 33.634C109.911 33.7031 109.687 33.7376 109.455 33.7376ZM110.251 33.2572V32.0327H110.703V33.3185L110.251 33.2572ZM113.293 33.7376C113.098 33.7376 112.916 33.6968 112.747 33.6152C112.577 33.5335 112.439 33.4158 112.332 33.2619L112.605 32.9417C112.696 33.0673 112.799 33.1646 112.912 33.2337C113.028 33.2996 113.155 33.3326 113.293 33.3326C113.67 33.3326 113.858 33.1097 113.858 32.6638V30.8129H112.667V30.4031H114.324V32.6403C114.324 33.0076 114.237 33.2824 114.061 33.4645C113.888 33.6466 113.632 33.7376 113.293 33.7376ZM116.772 33.7376C116.521 33.7376 116.287 33.6952 116.07 33.6105C115.857 33.5257 115.672 33.4079 115.515 33.2572C115.358 33.1034 115.235 32.9244 115.147 32.7203C115.059 32.5162 115.015 32.2933 115.015 32.0515C115.015 31.8098 115.059 31.5869 115.147 31.3828C115.235 31.1787 115.358 31.0013 115.515 30.8506C115.672 30.6967 115.857 30.5774 116.07 30.4926C116.284 30.4079 116.518 30.3655 116.772 30.3655C117.023 30.3655 117.254 30.4079 117.464 30.4926C117.678 30.5743 117.863 30.692 118.02 30.8459C118.18 30.9966 118.303 31.174 118.388 31.3781C118.475 31.5821 118.519 31.8066 118.519 32.0515C118.519 32.2965 118.475 32.521 118.388 32.725C118.303 32.9291 118.18 33.1081 118.02 33.2619C117.863 33.4127 117.678 33.5304 117.464 33.6152C117.254 33.6968 117.023 33.7376 116.772 33.7376ZM116.772 33.3185C116.954 33.3185 117.122 33.2871 117.276 33.2243C117.433 33.1615 117.568 33.0736 117.681 32.9605C117.797 32.8444 117.887 32.7093 117.95 32.5555C118.015 32.4016 118.048 32.2337 118.048 32.0515C118.048 31.8694 118.015 31.7015 117.95 31.5476C117.887 31.3938 117.797 31.2603 117.681 31.1473C117.568 31.0311 117.433 30.9416 117.276 30.8788C117.122 30.816 116.954 30.7846 116.772 30.7846C116.587 30.7846 116.416 30.816 116.259 30.8788C116.105 30.9416 115.97 31.0311 115.854 31.1473C115.738 31.2603 115.646 31.3938 115.581 31.5476C115.518 31.7015 115.486 31.8694 115.486 32.0515C115.486 32.2337 115.518 32.4016 115.581 32.5555C115.646 32.7093 115.738 32.8444 115.854 32.9605C115.97 33.0736 116.105 33.1615 116.259 33.2243C116.416 33.2871 116.587 33.3185 116.772 33.3185ZM120.605 33.7376C120.172 33.7376 119.831 33.6136 119.583 33.3656C119.335 33.1175 119.211 32.7549 119.211 32.2776V30.4031H119.682V32.2588C119.682 32.6261 119.762 32.8946 119.922 33.0641C120.085 33.2337 120.315 33.3185 120.61 33.3185C120.908 33.3185 121.137 33.2337 121.297 33.0641C121.461 32.8946 121.542 32.6261 121.542 32.2588V30.4031H121.999V32.2776C121.999 32.7549 121.875 33.1175 121.627 33.3656C121.382 33.6136 121.042 33.7376 120.605 33.7376ZM122.965 33.7V30.4031H124.25C124.539 30.4031 124.786 30.4487 124.99 30.5397C125.194 30.6308 125.351 30.7627 125.461 30.9353C125.571 31.108 125.626 31.3137 125.626 31.5523C125.626 31.7909 125.571 31.9966 125.461 32.1693C125.351 32.3388 125.194 32.4691 124.99 32.5602C124.786 32.6513 124.539 32.6968 124.25 32.6968H123.224L123.436 32.4801V33.7H122.965ZM125.169 33.7L124.331 32.5037H124.834L125.682 33.7H125.169ZM123.436 32.5272L123.224 32.2965H124.236C124.538 32.2965 124.765 32.2321 124.919 32.1034C125.076 31.9715 125.155 31.7878 125.155 31.5523C125.155 31.3168 125.076 31.1347 124.919 31.006C124.765 30.8773 124.538 30.8129 124.236 30.8129H123.224L123.436 30.5774V32.5272ZM126.387 33.7V30.4031H126.773L128.953 33.1112H128.751V30.4031H129.222V33.7H128.836L126.655 30.9919H126.858V33.7H126.387ZM130.637 31.8255H132.333V32.2258H130.637V31.8255ZM130.68 33.2902H132.601V33.7H130.209V30.4031H132.535V30.8129H130.68V33.2902ZM134.123 33.7V32.4377L134.231 32.7297L132.814 30.4031H133.318L134.509 32.3671H134.236L135.432 30.4031H135.899L134.486 32.7297L134.589 32.4377V33.7H134.123Z" fill="white"/>
          <line x1="41.8485" y1="1.93002e-08" x2="41.8485" y2="41.21" stroke="white" stroke-width="0.883072"/>
          </svg>
      </div>
      <div className="flex-col gap-3 md:gap-0 md:flex-row flex justify-between">
        <div className="flex gap-5">
        <a href="#about-us">About</a>
        <a href="#features">Features</a>
        <a href="mailto:aggarwalshivamkumar@gmail.com">Contact</a>
        </div>
        <div className="hidden">	&copy; {new Date().getFullYear()} All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
