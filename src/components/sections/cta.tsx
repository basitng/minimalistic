import React from "react";
import { Button } from "../ui/button";

export default function CTASection() {
  return (
    <div className="min-h-[75vh] flex flex-col lg:grid lg:grid-cols-2 items-center justify-between pl-0 sm:pl-6 lg:pl-10 py-10">
      <div className="w-full flex justify-center mb-10 lg:mb-0">
        <div className="w-full flex flex-col max-w-sm items-start space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900">
            Ready to get your blank?
          </h1>
          <p className="text-base sm:text-lg leading-7 text-slate-500">
            No matter what project you're working on, we've got you covered with
            the best wireframe kits for any platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
            <Button className="w-full sm:w-auto mb-3 sm:mb-0">
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
              <div className="flex items-center bg-[#e9eaec] text-gray-600 ring-1 ring-gray-300 ml-2 rounded px-1 py-0.5 text-xs">
                $9.9
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-end">
        <img
          src="/assets/semi-half.png"
          alt="macbook"
          className="h-auto max-w-full lg:max-h-[70vh] object-contain"
        />
      </div>
    </div>
  );
}
