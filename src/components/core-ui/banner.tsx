import React from "react";
import { Button } from "../ui/button";
import { Apple } from "lucide-react";

export default function Banner() {
  return (
    <div
      id="home"
      className="w-full flex flex-col items-center justify-start pt-32 sm:pt-24 md:pt-36 min-h-screen px-4 sm:px-6 lg:px-8"
    >
      <Notos />
      <div className="w-full max-w-2xl flex flex-col pt-8 space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-center leading-tight text-gray-900">
          Website design system and UI Kit for Figma
        </h1>
        <p className="text-lg sm:text-xl text-center max-w-xl mx-auto leading-7 sm:leading-9 text-gray-500">
          No matter what project you're working on, we've got you covered with
          the best wireframe kits for any platform.
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center sm:space-x-4 justify-center mt-8 sm:mt-10 space-y-4 sm:space-y-0">
        <Button className="w-full sm:w-auto">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.18672 6.01833C7.45672 6.01833 6.32672 5.18833 5.13672 5.21833C3.56672 5.23833 2.12672 6.12833 1.31672 7.53833C-0.313282 10.3683 0.896718 14.5483 2.48672 16.8483C3.26672 17.9683 4.18672 19.2283 5.40672 19.1883C6.57672 19.1383 7.01672 18.4283 8.43672 18.4283C9.84672 18.4283 10.2467 19.1883 11.4867 19.1583C12.7467 19.1383 13.5467 18.0183 14.3167 16.8883C15.2067 15.5883 15.5767 14.3283 15.5967 14.2583C15.5667 14.2483 13.1467 13.3183 13.1167 10.5183C13.0967 8.17833 15.0267 7.05833 15.1167 7.00833C14.0167 5.39833 12.3267 5.21833 11.7367 5.17833C10.1967 5.05833 8.90672 6.01833 8.18672 6.01833ZM10.7867 3.65833C11.4367 2.87833 11.8667 1.78833 11.7467 0.708332C10.8167 0.748332 9.69672 1.32833 9.02672 2.10833C8.42672 2.79833 7.90672 3.90833 8.04672 4.96833C9.07672 5.04833 10.1367 4.43833 10.7867 3.65833Z"
              fill="white"
            />
          </svg>
          Mac App Store
        </Button>
        <Button
          variant={"outline"}
          className="w-full sm:w-auto bg-white shadow-sm ring-gray-300 ring-1 border-none"
        >
          Buy Directly
          <div className="flex items-center bg-[#E9EAEC] text-gray-600 ring-1 ring-gray-300 ml-2 rounded px-1 py-0.5 text-xs">
            $9.9
          </div>
        </Button>
      </div>
      <p className="text-sm mt-5 text-gray-500/80">No in-app purchases.</p>

      <div className="w-full mx-auto flex justify-center items-center mt-16 sm:mt-24 md:mt-36">
        <img
          src="/assets/Browser.png"
          alt="browser"
          className="w-full max-w-5xl h-auto"
        />
      </div>
    </div>
  );
}

const Notos = () => {
  return (
    <div className="w-auto py-1 px-2 border border-[#0A0F2908] rounded-full ring-1 ring-gray-200 flex items-center space-x-2 bg-[#e3eafe]">
      <div className="w-fit rounded-full bg-white text-[#133a99] font-medium text-xs sm:text-sm text-center px-2 py-0.5">
        Update
      </div>
      <p className="text-xs sm:text-sm text-[#133a99] font-medium">
        See what's new in Black 2.0
      </p>
      <svg
        width="12"
        height="12"
        className="ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="#133A9A"
        />
      </svg>
    </div>
  );
};
