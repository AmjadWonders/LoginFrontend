"use client";

import Link from "next/link";
import { Lock, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1B1E] text-white relative">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path opacity="0.08" d="M-46.7584 120.002H46.7601M-46.7584 120.002C-54.0715 120.002 -60 114.073 -60 106.76V13.2416C-60 5.92846 -54.0715 0 -46.7584 0H46.7601C54.0732 0 60.0017 5.92845 60.0017 13.2416M-46.7584 120.002C-54.0715 120.002 -60 125.93 -60 133.243V226.762C-60 234.075 -54.0715 240.003 -46.7584 240.003M60.0017 106.76V13.2416" stroke="url(#footer-pattern)" strokeWidth="1.2414"/>
          <defs>
            <linearGradient id="footer-pattern" x1="660.019" y1="29.0568" x2="660.019" y2="961.338" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F0F0F0" stopOpacity="0"/>
              <stop offset="0.484375" stopColor="#F0F0F0"/>
              <stop offset="1" stopColor="#F0F0F0" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="flex flex-col items-left">
            <Link href="/" className="flex items-center space-x-2">
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8C0 5.79086 1.79086 4 4 4H28C30.2091 4 32 5.79086 32 8V32C32 34.2091 30.2091 36 28 36H4C1.79086 36 0 34.2091 0 32V8Z" fill="#0719B3"/>
              <path d="M12.0863 8.42176C11.7342 8.48045 11.3685 8.72422 11.1609 9.03571C10.8765 9.46908 10.8674 9.54582 10.8674 12.1686V14.5296H10.1587C9.76594 14.5296 9.30548 14.5522 9.13845 14.5748C8.58319 14.656 8.12273 14.972 7.90153 15.4235L7.77513 15.6808L7.76159 19.1207L7.74805 22.5606L7.87445 22.5922C8.08662 22.6418 8.26268 22.7457 8.45228 22.9308L8.63285 23.1023L10.9351 23.2197L13.2374 23.3416L13.3006 23.2332C13.6031 22.7592 14.1629 22.5741 14.6369 22.7953C15.0025 22.9669 15.2057 23.3009 15.2057 23.7343C15.2057 23.96 15.3095 24.2218 16.2756 26.4925C16.8624 27.8694 17.3545 29.0025 17.3726 29.0115C17.3951 29.0206 17.4764 29.0702 17.5531 29.1244C18.1535 29.5307 17.8827 30.4606 17.1604 30.4697H16.9392L16.5329 30.9933C16.3117 31.2822 16.1176 31.535 16.1131 31.5576C16.104 31.5802 17.6524 31.5892 19.5891 31.5847L23.0786 31.5711L23.336 31.4493C23.679 31.2913 23.977 31.0069 24.126 30.6954L24.2524 30.4426V23.0617V15.6808L24.1576 15.4776C23.9318 15.0036 23.4669 14.6651 22.9206 14.5793C22.7581 14.5522 22.239 14.5296 21.7605 14.5296H20.8937L20.8802 12.0558L20.8666 9.58645L20.7222 9.28399C20.5551 8.93188 20.3159 8.67908 20.0089 8.52559L19.7832 8.41273L15.9912 8.40822C13.9056 8.4037 12.1495 8.40822 12.0863 8.42176ZM19.6884 9.61354L19.8058 9.75348V12.1416V14.5296H19.1286H18.4515V15.7214C18.4515 16.376 18.4379 16.9493 18.4244 16.9899C18.3928 17.0712 18.1761 17.1931 18.0587 17.1931C18.0181 17.1931 17.3861 16.5972 16.6458 15.8613L15.314 14.5296H13.6302H11.9509V12.1416V9.75348L12.0682 9.61354L12.1856 9.47359H15.8783H19.571L19.6884 9.61354Z" fill="white"/>
              <path d="M8.81344 24.0186C8.79538 24.0999 8.71864 24.2805 8.6419 24.4249L8.50195 24.6777L9.50864 26.7724C10.0594 27.919 10.5244 28.8851 10.5424 28.9122C10.5605 28.9392 10.7185 28.9754 10.8945 28.9889L11.2151 29.016L12.3843 26.7724L13.558 24.5288L13.4045 24.3256C13.3187 24.2128 13.2465 24.118 13.2375 24.1089C13.233 24.0999 9.44996 23.8968 8.84955 23.8742C8.84504 23.8742 8.8315 23.9419 8.81344 24.0186Z" fill="white"/>
              <path d="M14.4609 24.7048L14.2849 24.7545L13.057 27.1019L11.8291 29.4494L11.8968 29.5938C11.9374 29.6751 11.9781 29.7428 11.9961 29.7428C12.1316 29.7428 16.5736 29.2462 16.5872 29.2282C16.6143 29.2011 16.6233 29.2282 15.4992 26.5828C15.0613 25.5535 14.6867 24.6958 14.6686 24.6823C14.6505 24.6642 14.5603 24.6777 14.4609 24.7048Z" fill="white"/>
              <path d="M7.75244 27.2057V29.4087L8.66885 29.5847C9.16993 29.6795 9.60782 29.7653 9.63491 29.7743C9.66651 29.7879 9.70714 29.7608 9.72519 29.7156C9.73874 29.666 9.79291 29.5757 9.83805 29.508L9.92382 29.3816L8.8765 27.1921C8.29867 25.9868 7.81113 25.0027 7.78856 25.0027C7.7705 25.0027 7.75244 25.9959 7.75244 27.2057Z" fill="white"/>
              <path d="M14.0049 30.289C12.9395 30.4064 12.0502 30.5057 12.0367 30.5057C12.0186 30.5102 11.9915 30.5644 11.9735 30.6321C11.9328 30.7991 11.7071 31.1016 11.5446 31.2099C11.4408 31.2776 11.4092 31.3363 11.4092 31.4447V31.5936L13.2736 31.5891H15.1335L15.6978 30.8623C16.0093 30.4605 16.2711 30.1174 16.2756 30.0949C16.3027 30.0362 16.0634 30.0588 14.0049 30.289Z" fill="white"/>
              <path d="M7.77936 30.3386C7.86062 30.79 8.22176 31.2324 8.69125 31.4491C8.93502 31.5665 8.98919 31.571 9.79726 31.5846C10.5963 31.6026 10.6414 31.5981 10.6414 31.5168C10.6414 31.4582 10.5782 31.413 10.4112 31.3543C10.1403 31.255 9.81983 30.9571 9.73406 30.7178C9.69794 30.6185 9.63925 30.5418 9.58057 30.5327C9.4316 30.4966 7.8245 30.1942 7.78839 30.1942C7.77033 30.1942 7.76582 30.2619 7.77936 30.3386Z" fill="white"/>
            </svg>
            </Link>
            <p className="mt-2 text-sm text-[#606060]">
              Dokan Front End Test
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 text-[#606060] hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 text-[#606060] hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 22 22">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 text-[#606060] hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 2.16667V13.8333C15.5 14.7538 14.7538 15.5 13.8333 15.5H10.7083C10.4782 15.5 10.2917 15.3135 10.2917 15.0833V10.0833H12.2417C12.4397 10.0834 12.6104 9.94403 12.65 9.75L12.95 8.25C12.9624 8.18941 12.9472 8.12644 12.9086 8.07815C12.8699 8.02985 12.8118 8.00122 12.75 8H10.2917V5.29167C10.2917 5.17661 10.3849 5.08333 10.5 5.08333H12.5833C12.8135 5.08333 13 4.89679 13 4.66667V3.41667C13 3.18655 12.8135 3 12.5833 3H10.5C9.11929 3 8 4.11929 8 5.5V8H6.975C6.74488 8 6.55833 8.18655 6.55833 8.41667V9.66667C6.55833 9.89678 6.74488 10.0833 6.975 10.0833H8V15.0833C8 15.3135 7.81345 15.5 7.58333 15.5H2.16667C1.24619 15.5 0.5 14.7538 0.5 13.8333V2.16667C0.5 1.24619 1.24619 0.5 2.16667 0.5H13.8333C14.7538 0.5 15.5 1.24619 15.5 2.16667Z" clipRule="evenodd"/>
                </svg>

              </Link>

              <Link href="#" className="text-gray-400 text-[#606060] hover:text-white">
                <span className="sr-only">X</span>
                <svg lassName="h-5 w-5" fill="currentColor" width="19" height="18" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.3137 3.22192H16.6134L11.5893 8.9642L17.4998 16.7781H12.8712L9.24649 12.039L5.09898 16.7781H2.7979L8.17172 10.6361L2.50244 3.22192H7.24712L10.5236 7.55366L14.3137 3.22192ZM13.5066 15.4017H14.7809L6.5554 4.5261H5.18796L13.5066 15.4017Z" clipRule="evenodd"/>
                </svg>
              </Link>
            </div>
          </div>
          
          <div>
            <ul className="space-y-3 font-light">
              <li><Link href="/home" className="text-[#fff] hover:text-gray-400">Home</Link></li>
              <li><Link href="/features" className="text-[#fff] hover:text-gray-400">Features</Link></li>
              <li><Link href="/pricing" className="text-[#fff] hover:text-gray-400">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-3 font-light">
              <li><Link href="/about-us" className="text-[#fff] hover:text-gray-400">About Us</Link></li>
              <li><Link href="/integrations" className="text-[#fff] hover:text-gray-400">Integrations</Link></li>
              <li><Link href="/faqs" className="text-[#fff] hover:text-gray-400">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 font-light">
              <li><Link href="/faqs" className="text-[#fff] hover:text-gray-400">Blog</Link></li>
              <li><Link href="/contact-us" className="text-[#fff] hover:text-gray-400">Contact Us</Link></li>
              <li><Link href="/terms" className="text-[#fff] hover:text-gray-400">Terms & Policies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:dokan@test.sa" className="text-gray-400 hover:text-white">dokan@test.sa</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">+999-234-324</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">Saudi Arabia, Jeddah</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 font-light">
            <p className="text-[#606060] text-sm">© 2025 Dokan Inc. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-[#606060] hover:text-white text-sm">Privacy policy</Link>
              <Link href="/gdpr" className="text-[#606060] hover:text-white text-sm">GDPR</Link>
              <Link href="/terms" className="text-[#606060] hover:text-white text-sm">Terms of service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}