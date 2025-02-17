"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-white relative z-50 p-2">
      <div className="sm:absolute inset-0 opacity-5 hidden">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path opacity="0.08" d="M-46.7584 120.002H46.7601M-46.7584 120.002C-54.0715 120.002 -60 114.073 -60 106.76V13.2416C-60 5.92846 -54.0715 0 -46.7584 0H46.7601C54.0732 0 60.0017 5.92845 60.0017 13.2416M-46.7584 120.002C-54.0715 120.002 -60 125.93 -60 133.243V226.762C-60 234.075 -54.0715 240.003 -46.7584 240.003M60.0017 106.76V13.2416" stroke="url(#nav-pattern)" strokeWidth="1.2414"/>
          <defs>
            <linearGradient id="nav-pattern" x1="660.019" y1="29.0568" x2="660.019" y2="961.338" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F0F0F0" stopOpacity="0"/>
              <stop offset="0.484375" stopColor="#F0F0F0"/>
              <stop offset="1" stopColor="#F0F0F0" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#0719B3"/>
              <path d="M12.0863 4.42169C11.7342 4.48038 11.3685 4.72415 11.1609 5.03564C10.8765 5.46901 10.8674 5.54575 10.8674 8.16857V10.5296H10.1587C9.76594 10.5296 9.30548 10.5521 9.13845 10.5747C8.58319 10.656 8.12273 10.972 7.90153 11.4234L7.77513 11.6807L7.76159 15.1206L7.74805 18.5605L7.87445 18.5921C8.08662 18.6418 8.26268 18.7456 8.45228 18.9307L8.63285 19.1022L10.9351 19.2196L13.2374 19.3415L13.3006 19.2331C13.6031 18.7591 14.1629 18.5741 14.6369 18.7953C15.0025 18.9668 15.2057 19.3009 15.2057 19.7342C15.2057 19.9599 15.3095 20.2218 16.2756 22.4925C16.8624 23.8693 17.3545 25.0024 17.3726 25.0115C17.3951 25.0205 17.4764 25.0701 17.5531 25.1243C18.1535 25.5306 17.8827 26.4606 17.1604 26.4696H16.9392L16.5329 26.9932C16.3117 27.2822 16.1176 27.535 16.1131 27.5575C16.104 27.5801 17.6524 27.5891 19.5891 27.5846L23.0786 27.5711L23.336 27.4492C23.679 27.2912 23.977 27.0068 24.126 26.6953L24.2524 26.4425V19.0616V11.6807L24.1576 11.4776C23.9318 11.0036 23.4669 10.665 22.9206 10.5792C22.7581 10.5521 22.239 10.5296 21.7605 10.5296H20.8937L20.8802 8.05571L20.8666 5.58638L20.7222 5.28392C20.5551 4.93181 20.3159 4.67901 20.0089 4.52552L19.7832 4.41266L15.9912 4.40815C13.9056 4.40363 12.1495 4.40815 12.0863 4.42169ZM19.6884 5.61347L19.8058 5.75341V8.14148V10.5296H19.1286H18.4515V11.7213C18.4515 12.3759 18.4379 12.9492 18.4244 12.9899C18.3928 13.0711 18.1761 13.193 18.0587 13.193C18.0181 13.193 17.3861 12.5971 16.6458 11.8613L15.314 10.5296H13.6302H11.9509V8.14148V5.75341L12.0682 5.61347L12.1856 5.47353H15.8783H19.571L19.6884 5.61347Z" fill="white"/>
              <path d="M8.81344 20.0186C8.79538 20.0998 8.71864 20.2804 8.6419 20.4249L8.50195 20.6777L9.50864 22.7723C10.0594 23.9189 10.5244 24.885 10.5424 24.9121C10.5605 24.9392 10.7185 24.9753 10.8945 24.9888L11.2151 25.0159L12.3843 22.7723L13.558 20.5287L13.4045 20.3256C13.3187 20.2127 13.2465 20.1179 13.2375 20.1089C13.233 20.0998 9.44996 19.8967 8.84955 19.8741C8.84504 19.8741 8.8315 19.9418 8.81344 20.0186Z" fill="white"/>
              <path d="M14.4609 20.7048L14.2849 20.7544L13.057 23.1019L11.8291 25.4493L11.8968 25.5938C11.9374 25.675 11.9781 25.7427 11.9961 25.7427C12.1316 25.7427 16.5736 25.2462 16.5872 25.2281C16.6143 25.201 16.6233 25.2281 15.4992 22.5827C15.0613 21.5535 14.6867 20.6957 14.6686 20.6822C14.6505 20.6641 14.5603 20.6777 14.4609 20.7048Z" fill="white"/>
              <path d="M7.75244 23.2057V25.4087L8.66885 25.5847C9.16993 25.6795 9.60782 25.7653 9.63491 25.7743C9.66651 25.7879 9.70714 25.7608 9.72519 25.7156C9.73874 25.666 9.79291 25.5757 9.83805 25.508L9.92382 25.3816L8.8765 23.1921C8.29867 21.9868 7.81113 21.0027 7.78856 21.0027C7.7705 21.0027 7.75244 21.9959 7.75244 23.2057Z" fill="white"/>
              <path d="M14.0049 26.289C12.9395 26.4063 12.0502 26.5056 12.0367 26.5056C12.0186 26.5102 11.9915 26.5643 11.9735 26.632C11.9328 26.7991 11.7071 27.1015 11.5446 27.2099C11.4408 27.2776 11.4092 27.3363 11.4092 27.4446V27.5936L13.2736 27.5891H15.1335L15.6978 26.8623C16.0093 26.4605 16.2711 26.1174 16.2756 26.0948C16.3027 26.0362 16.0634 26.0587 14.0049 26.289Z" fill="white"/>
              <path d="M7.77936 26.3386C7.86062 26.7901 8.22176 27.2325 8.69125 27.4491C8.93502 27.5665 8.98919 27.571 9.79726 27.5846C10.5963 27.6026 10.6414 27.5981 10.6414 27.5169C10.6414 27.4582 10.5782 27.413 10.4112 27.3543C10.1403 27.255 9.81983 26.9571 9.73406 26.7178C9.69794 26.6185 9.63925 26.5418 9.58057 26.5327C9.4316 26.4966 7.8245 26.1942 7.78839 26.1942C7.77033 26.1942 7.76582 26.2619 7.77936 26.3386Z" fill="white"/>
            </svg>

              <span className="font-normal text-xl tracking-[-0.1rem]">TEST</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about-us" className="text-[#022C22] hover:text-gray-600 font-semibold">
              About us
            </Link>
            <Link href="/team" className="text-[#022C22] hover:text-gray-600 font-semibold">
              Team
            </Link>
            <Link href="/solutions" className="text-[#022C22] hover:text-gray-600 font-semibold">
              Solutions
            </Link>
            <Link href="/blog" className="text-[#022C22] hover:text-gray-600 font-semibold">
              Blog
            </Link>
          </div>
          <div className="hidden md:flex">
          <Button asChild className="rounded-full border font-semibold border-[#0719B3] bg-[#fff] text-[#1D1F1E] hover:bg-[#14144B]/90 hover:text-[#fff]">
                <Link href="/dashboard" className="flex items-center gap-x-2">
                  Dashboard 
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.75 10H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </Link>
            </Button>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-4 text-center">
              <Link
                href="/about-us"
                className="block text-gray-600 hover:text-gray-900 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                About us
              </Link>
              <Link
                href="/team"
                className="block text-gray-600 hover:text-gray-900 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/solutions"
                className="block text-gray-600 hover:text-gray-900 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/blog"
                className="block text-gray-600 hover:text-gray-900 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Button
                asChild
                className="w-full rounded-full border border-[#0719B3] bg-[#fff] text-[#1D1F1E] hover:bg-[#14144B]/90 hover:text-[#fff]"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/dashboard" className="flex items-center gap-x-2 font-semibold">
                  Dashboard 
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 10H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}