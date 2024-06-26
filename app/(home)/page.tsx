import { SignIn } from "@clerk/clerk-react";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image"

const HomePage = () => {
  return (
    <div className="relative bg-white">
      {/*<header className="h-20 w-full border-b-2 border-slate-200 px-4">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
  <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">*/}
      <header className="relative z-10 h-20 w-full border-b-2 border-slate-200 px-4 bg-white">
        <div className="flex items-center justify-between h-full">{/*rmvd lg:max-w-screen-lg mx-auto*/}
          <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
            <Image src="/patientSimLogo.png" height={80} width={80} alt="Logo" />
            <a href ="" className="text-2xl font-extrabold text-grey-500 tracking-wide">
              PatientSimAI
            </a>
          </div>

          <div className="col-span-5 flex items-center justify-end">
            <ClerkLoading>
              <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedIn>
                <UserButton/>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal" forceRedirectUrl={"/roles"}>
                  <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Log in
                  </button>
                </SignInButton>
              </SignedOut>
            </ClerkLoaded>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <Image src="/patientSimLogo.png" height={120} width={120} alt="Logo" />

            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                The future of medical training with realistic, AI-driven
                simulations.{" "}
                <a
                  href="#"
                  className="whitespace-nowrap font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Discover more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Training Tomorrow Healthcare Professionals
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              PatientSimAI empowers medical students and professionals to excel
              in clinical reasoning and decision-making through our advanced AI
              simulations. Practice and learn in a risk-free environment with
              immediate feedback.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <ClerkLoaded>
                <SignedIn>
                  <a
                    href="roles"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get Started
                  </a>
                </SignedIn>

                <SignedOut>
                  <SignInButton
                    mode="modal"
                    forceRedirectUrl={"/roles"}
                    signUpForceRedirectUrl={"/roles"}
                  >
                    <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Get Started
                    </button>
                  </SignInButton>
                </SignedOut>
              </ClerkLoaded>

              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-0 lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
