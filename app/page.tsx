"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignInForm = z.infer<typeof signInSchema>;

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInForm) => {
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-4 bg-[url('/background.svg')] bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path opacity="0.08" d="M-46.7584 120.002H46.7601M-46.7584 120.002C-54.0715 120.002 -60 114.073 -60 106.76V13.2416C-60 5.92846 -54.0715 0 -46.7584 0H46.7601C54.0732 0 60.0017 5.92845 60.0017 13.2416M-46.7584 120.002C-54.0715 120.002 -60 125.93 -60 133.243V226.762C-60 234.075 -54.0715 240.003 -46.7584 240.003M60.0017 106.76V13.2416" stroke="url(#sign-in-pattern)" strokeWidth="1.2414"/>
          <defs>
            <linearGradient id="sign-in-pattern" x1="660.019" y1="29.0568" x2="660.019" y2="961.338" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F0F0F0" stopOpacity="0"/>
              <stop offset="0.484375" stopColor="#F0F0F0"/>
              <stop offset="1" stopColor="#F0F0F0" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 py-12 relative"
      >
        <div className="text-center">
          <h1 className="text-6xl font-normal">Sign In</h1>
          <p className="mt-6 text-gray-600">Access our services in one click</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 pt-4 space-y-5">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`pt-6 pb-6 rounded-lg ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 mt-1"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`pr-10 pt-6 pb-6 rounded-lg ${errors.password ? 'border-red-500 focus:ring-red-500' : ''}`}
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 mt-1"
                >
                  {errors.password.message}
                </motion.p>
              )}
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full pt-6 pb-6 pr-10 pl-10 font-normal bg-[#030B53] hover:bg-[#14144B]/90 flex shadow-[0_0_4px_#257A82,0_0_3px_#2E98A2] hover:shadow-lg"
            disabled={isSubmitting}
          >
            <div className="absolute bg-[url('/button-bg.svg')] bg-no-repeat bg-cover bg-center bg-blend-multiply w-full h-full mb-8 left-[-30px] scale-150 pointer-events-none"></div>
            {isSubmitting ? "Signing in..." : "Login"}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-md">
              <span className="bg-white px-2 text-[#383838] font-neutral">or</span>
            </div>
          </div>

          <Button variant="outline" className="w-full  pt-6 pb-6 pr-10 pl-10 font-normal">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </Button>

          <p className="text-center text-sm text-[#242424]">
            Did'nt have an account?{" "}
            <Link href="/register" className="text-[#242424] underline font-medium hover:text-[#242424ce]">
              Register
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}