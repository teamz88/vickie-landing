"use client";
import Image from "next/image";
import EmailTo from "../components/EmailTo";
import { Input } from "@heroui/input";
import { Providers } from "../providers";
import { Select, SelectItem, Textarea, Button } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(9, "Phone number must be at least 9 digits"),
  hearAbout: z.string().min(1, "Please select an option"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

// Rate limiting functions
const getRateLimitKey = (email: string) => `form_submissions_${email}`;

const checkRateLimit = (email: string): { allowed: boolean; remaining: number } => {
  const key = getRateLimitKey(email);
  const today = new Date().toDateString();
  const stored = localStorage.getItem(key);
  
  if (!stored) {
    return { allowed: true, remaining: 3 };
  }
  
  const data = JSON.parse(stored);
  if (data.date !== today) {
    return { allowed: true, remaining: 3 };
  }
  
  const remaining = 3 - data.count;
  return { allowed: remaining > 0, remaining };
};

const updateRateLimit = (email: string) => {
  const key = getRateLimitKey(email);
  const today = new Date().toDateString();
  const stored = localStorage.getItem(key);
  
  if (!stored || JSON.parse(stored).date !== today) {
    localStorage.setItem(key, JSON.stringify({ date: today, count: 1 }));
  } else {
    const data = JSON.parse(stored);
    localStorage.setItem(key, JSON.stringify({ ...data, count: data.count + 1 }));
  }
};

export default function TouchForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'rate_limited'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const emailValue = watch('email');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Check rate limit
       const rateLimit = checkRateLimit(data.email);
       if (!rateLimit.allowed) {
         setSubmitStatus('rate_limited');
         setErrorMessage(`You have reached the maximum number of submissions (3) for today. Please try again tomorrow.`);
         setIsSubmitting(false);
         return;
       }

      // Submit to n8n webhook
      const response = await fetch('https://n8n.omadligrouphq.com/webhook/form-catcher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          hearAbout: data.hearAbout,
          message: data.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Update rate limit
        updateRateLimit(data.email);
        setSubmitStatus('success');
        reset();
      } else {
         throw new Error('Server error');
       }
      } catch (error) {
        // Handle form submission error
        setSubmitStatus('error');
        setErrorMessage('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
  };

  return (
    <Providers>
      <div className="py-6 max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col items-center justify-center pb-8 sm:pb-12 xl:pb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[62px] font-bold text-[#19331B] leading-tight sm:leading-normal xl:leading-[74px] text-center">
          Get in Touch
        </h2>
          <p className="text-base sm:text-lg xl:text-xl font-medium text-[#4C4C4C] leading-relaxed xl:leading-[24px] mt-4 text-center max-w-2xl">
            Have questions or need support? Our team is here to help—reach out
            and we'll respond promptly.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-stretch justify-center gap-4 xl:gap-5 w-full">
          <div className="rounded-[20px] xl:rounded-[30px] bg-[#ECFEEC] px-4 sm:px-6 py-6 xl:py-8 w-full xl:w-[467px] xl:flex-shrink-0">
            <p className="rounded-full bg-[#1C5E20] py-2 sm:py-3 px-6 sm:px-8 font-bold w-fit flex items-center justify-center text-white text-sm sm:text-base">
              Contact
            </p>
            <Image
              src="/icons/Calendar.svg"
              className="mx-auto py-8 sm:py-10 xl:py-12"
              alt="Calendar"
              width={200}
              height={200}
              sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 264px"
            />
            <div className="space-y-3 sm:space-y-4 pb-6 sm:pb-8 px-2 sm:px-4 xl:px-6">
              <h3 className="text-xl sm:text-2xl xl:text-[30px] font-bold text-[#19331B] leading-tight xl:leading-[36px] text-center xl:text-left">
                Schedule a Call
              </h3>
              <p className="text-base sm:text-lg xl:text-xl font-medium text-[#4C4C4C] leading-relaxed xl:leading-[24px] text-center xl:text-left">
                Pick a time that works for you.
              </p>
            </div>
            <EmailTo />
          </div>
          <div className="rounded-[20px] xl:rounded-[30px] bg-[#F8F8F9] px-4 sm:px-6 py-6 xl:py-8 w-full xl:w-[784px] flex-1">
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 sm:py-16 space-y-4 sm:space-y-6 min-h-[400px] xl:h-[586px]">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                   <svg className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Success checkmark">
                     <title>Success</title>
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                <h3 className="text-xl sm:text-2xl xl:text-[30px] font-bold text-[#19331B] leading-tight xl:leading-[36px] text-center">
                  Thank You!
                </h3>
                <p className="text-base sm:text-lg xl:text-xl font-medium text-[#4C4C4C] leading-relaxed xl:leading-[24px] text-center max-w-md px-4">
                  Your form has been submitted successfully! We will contact you soon.
                </p>
                <Button
                  onClick={() => {
                    window.location.reload();
                  }}
                  className="flex items-center justify-center gap-3 sm:gap-4 py-6 sm:py-8 px-6 sm:px-8 bg-[#1C5E20] hover:bg-[#164A1A] transition-all duration-300 ease-in rounded-full w-full sm:w-auto"
                >
                  <span className="text-base sm:text-xl font-semibold text-white">
                    Submit Another Form
                  </span>
                  <div className="w-8 sm:w-9 h-8 sm:h-9 bg-white flex items-center justify-center rounded-full shrink-0">
                    <ArrowRight className="w-3 sm:w-4 text-black"/>
                  </div>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl xl:text-[30px] font-bold text-[#19331B] leading-tight xl:leading-[36px] pb-8 text-center xl:text-left">
                  Fill Out The Form
                </h3>
                
                {/* Error Messages */}
                {(submitStatus === 'error' || submitStatus === 'rate_limited') && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm sm:text-base">
                    {errorMessage}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <div className="flex-1 w-full">
                    <Input 
                      {...register('firstName')}
                      label="First Name" 
                      variant="bordered"
                      isInvalid={!!errors.firstName}
                      errorMessage={errors.firstName?.message}
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <Input 
                      {...register('lastName')}
                      label="Last Name" 
                      variant="bordered"
                      isInvalid={!!errors.lastName}
                      errorMessage={errors.lastName?.message}
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <Input 
                      {...register('email')}
                      label="Email" 
                      type="email" 
                      variant="bordered"
                      isInvalid={!!errors.email}
                      errorMessage={errors.email?.message}
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <div className="flex-1 w-full">
                    <Input 
                      {...register('phone')}
                      label="Phone" 
                      variant="bordered"
                      isInvalid={!!errors.phone}
                      errorMessage={errors.phone?.message}
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <Select 
                      {...register('hearAbout')}
                      label="How did you hear about us?" 
                      variant="bordered"
                      isInvalid={!!errors.hearAbout}
                      errorMessage={errors.hearAbout?.message}
                    >
                      <SelectItem key="friend">Friend</SelectItem>
                      <SelectItem key="google">Google</SelectItem>
                      <SelectItem key="other">Other</SelectItem>
                    </Select>
                  </div>
                </div>
                <Textarea
                  {...register('message')}
                  label="Type your message"
                  minRows={6}
                  variant="bordered"
                  className="h-[180px]"
                  isInvalid={!!errors.message}
                  errorMessage={errors.message?.message}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-3 sm:gap-4 py-6 sm:py-8 px-4 sm:px-5 book-demo transition-all duration-300 ease-in w-full"
                >
                  <h1 className="text-base sm:text-xl font-semibold text-white flex-auto text-center">
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </h1>
                  <div className="w-8 sm:w-9 h-8 sm:h-9 bg-white flex items-center justify-center rounded-full shrink-0">
                    <ArrowRight className="w-3 sm:w-4 text-black"/>
                  </div>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Providers>
  );
}
