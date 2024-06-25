import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Box, Component } from "lucide-react";
import { Badge } from "../ui/badge";

export default function IntroSection() {
  return (
    <div className="w-full space-y-6 flex items-center flex-col mt-16 sm:mt-24 md:mt-48 px-4 sm:px-6 lg:px-8">
      <Badge className="w-auto border border-[#0A0F2908] py-1 px-3 rounded-full ring-1 ring-gray-200 flex items-center space-x-2 bg-[#e3eafe]">
        <p className="text-xs sm:text-sm text-[#133a99] font-medium">
          Blank 2.0
        </p>
      </Badge>

      <div className="max-w-4xl w-full pt-3 pb-8 sm:pb-14 flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center">
          Build your website with Blank
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center max-w-xl mx-auto leading-7 sm:leading-8 text-gray-500 pt-4 sm:pt-6">
          No matter what project you're working on, we've got you covered with
          the best wireframe kits for any platform.
        </p>
      </div>

      <div className="w-full max-w-screen-xl relative pt-6 sm:pt-10 min-h-[50vh] mx-auto bg-white ring-1 rounded-md ring-gray-200 shadow overflow-hidden">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col items-start justify-center space-y-4 sm:space-y-5 w-full md:w-1/2 p-8 md:p-12 z-10">
            <div className="bg-[#d1fae4] px-3 py-1 rounded-full text-center">
              <span className="text-sm sm:text-base text-[#207548]">New</span>
            </div>
            <h4 className="text-xl sm:text-2xl text-black font-medium">
              Huge wireframe layout library
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-6">
              No matter what project you're working on, we've got you covered
              with the best wireframe kits for any platform.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-6">
              Use a set of text and color styles, customize and apply changes to
              all pages at once. Create a unique look in just a few minutes.
            </p>
            <Button variant="outline" className="ring-gray-200 shadow">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="w-full md:w-1/2  md:h-auto relative">
            <img
              src="/assets/half-browser.png"
              alt="Blank Wireframe"
              className="w-full -mr-5 lg:mr-0 h-full md:float-none float-right object-cover object-center rounded-b-lg md:rounded-r-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl overflow-hidden relative grid grid-cols-1 lg:grid-cols-3 pt-6 sm:pt-10 gap-5 min-h-[50vh] mx-auto bg-[#f7f7f8] p-1">
        <div className="w-full flex flex-col overflow-hidden justify-between pt-6 sm:pt-10 px-4 sm:px-10 min-h-[60vh] mx-auto bg-white ring-1 rounded-md ring-gray-200 shadow lg:col-span-1">
          <div className="w-full space-y-3 flex flex-col items-start">
            <Box className="mb-4 w-6 h-6 sm:w-7 sm:h-7" />
            <h2 className="text-black text-xl sm:text-2xl">Design system</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
              Fully customizable and neatly organized components will help you
              work faster without limiting creative freedom.
            </p>
          </div>
          <div className="relative mt-6 lg:mb-0 -mb-4 sm:mt-0">
            <div className="">
              <img
                src="/assets/phone.png"
                alt="Design System"
                className="w-full h-auto scale-110 sm:scale-125 mb-5"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col pt-6 sm:pt-10 min-h-[50vh] justify-between px-4 sm:px-10 mx-auto bg-white ring-1 rounded-md ring-gray-200 shadow lg:col-span-2">
          <div className="w-full space-y-3 flex flex-col items-start max-w-lg">
            <Component className="mb-4 w-6 h-6 sm:w-7 sm:h-7" />
            <h2 className="text-black text-xl sm:text-2xl">Components</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
              Use a set of text and color styles, customize and apply changes to
              all pages at once. Create a unique look in just a few minutes.
            </p>
          </div>
          <div className="relative mt-16">
            <img
              src="/assets/list.png"
              alt="Design System"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
