"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Sparkle, Globe, Component, List, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  name?: string;
}

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: Feature[];
  isPopular: boolean;
}

const plans: Plan[] = [
  {
    name: "Basic",
    description: "Stunning pack of trendy 3D objects",
    monthlyPrice: 24,
    annualPrice: 216,
    features: [
      { icon: Globe, title: "Design System", description: "Description" },
      { icon: Component, title: "Component", description: "Description" },
      { icon: List, title: "Lifetime access", description: "Description" },
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    description: "Stunning pack of trendy 3D objects",
    monthlyPrice: 48,
    annualPrice: 432,
    features: [
      { icon: Globe, title: "Design System", description: "Description" },
      { icon: Component, title: "Component", description: "Description" },
      { icon: List, title: "Lifetime access", description: "Description" },
    ],
    isPopular: true,
  },
];

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="flex flex-col items-center justify-center w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <PricingHeader />
      <BillingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 sm:mt-10">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} isAnnual={isAnnual} />
        ))}
      </div>
    </section>
  );
};

const PricingHeader: React.FC = () => (
  <>
    <div className="w-auto border border-[#0A0F2908] py-1 px-3 rounded-full ring-1 ring-gray-200 flex items-center space-x-2 bg-[#e3eafe]">
      <p className="text-xs sm:text-sm text-[#133a99] font-medium">Pricing</p>
    </div>
    <div className="max-w-lg w-full text-center space-y-3 sm:space-y-5 mt-4 sm:mt-5">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800">
        Build your website with Blank
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600">
        No matter what project you're working on, we've got you covered with the
        best wireframe kits for any platform.
      </p>
    </div>
  </>
);

interface BillingToggleProps {
  isAnnual: boolean;
  setIsAnnual: React.Dispatch<React.SetStateAction<boolean>>;
}

const BillingToggle: React.FC<BillingToggleProps> = ({
  isAnnual,
  setIsAnnual,
}) => (
  <div className="flex justify-center my-6 sm:my-8">
    <div className="p-1 rounded-lg space-x-1 bg-[#e9eaec] flex items-center relative">
      <ToggleButton onClick={() => setIsAnnual(false)} isActive={!isAnnual}>
        Monthly
      </ToggleButton>
      <ToggleButton onClick={() => setIsAnnual(true)} isActive={isAnnual}>
        Annual
        <Badge className="bg-gray-100 ml-2 text-gray-600 hover:bg-white text-xs sm:text-sm">
          Save 25%
        </Badge>
      </ToggleButton>
    </div>
  </div>
);

interface ToggleButtonProps {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onClick,
  isActive,
  children,
}) => (
  <Button
    className={`text-sm sm:text-base h-10 sm:h-12 hover:bg-white w-40 sm:w-40 z-10 transition-colors duration-200 ${
      isActive ? "bg-white text-gray-600" : "bg-transparent text-gray-600"
    }`}
    onClick={onClick}
  >
    {children}
  </Button>
);

interface PricingCardProps extends Plan {
  isAnnual: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  monthlyPrice,
  annualPrice,
  features,
  isPopular,
  isAnnual,
}) => (
  <motion.div
    className={`rounded-2xl ring-1 ring-gray-200 shadow p-6 sm:p-8 md:p-10 w-full flex flex-col justify-between min-h-[600px] sm:min-h-[640px] relative ${
      isPopular ? "bg-[#ecdffb]" : ""
    }`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="space-y-4">
      {isPopular && <PopularBadge />}
      <PlanIcon isPopular={isPopular} />
      <h2 className="text-black text-2xl sm:text-3xl">{name}</h2>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
      <PricingDetails
        price={isAnnual ? annualPrice : monthlyPrice}
        isAnnual={isAnnual}
      />
      <hr className="border-gray-300" />
      <FeatureList name={name} features={features} />
    </div>
    <div className="mt-6">
      <hr className="border-gray-300 mb-6" />
      <Button
        variant={isPopular ? "default" : "outline"}
        className={`w-full h-10 sm:h-12 ${
          isPopular ? "bg-black" : "ring-1 ring-gray-200"
        }`}
      >
        Get lifetime access
      </Button>
    </div>
  </motion.div>
);

const PopularBadge: React.FC = () => (
  <Badge className="bg-white text-xs sm:text-sm right-2 sm:right-4 absolute top-2 sm:top-4 text-gray-600">
    Most Popular
  </Badge>
);

const PlanIcon: React.FC<{ isPopular: boolean }> = ({ isPopular }) => (
  <div
    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
      isPopular ? "bg-[#daceea]" : "ring-2 ring-gray-200"
    }`}
  >
    <Sparkle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
  </div>
);

const PricingDetails: React.FC<{ price: number; isAnnual: boolean }> = ({
  price,
  isAnnual,
}) => (
  <div className="py-2 sm:py-3">
    <AnimatePresence mode="wait">
      <motion.div
        key={price}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="flex items-end space-x-2"
      >
        <h3 className="text-3xl sm:text-4xl font-medium">
          <span className="text-gray-500">$</span>
          {price}
        </h3>
        <span className="text-gray-500 text-xs sm:text-sm pb-1 sm:pb-2">
          {isAnnual ? "/ per year" : "/ per month"}
        </span>
      </motion.div>
    </AnimatePresence>
  </div>
);

const FeatureList: React.FC<{ features: Feature[]; name: string }> = ({
  features,
  name,
}) => (
  <ul className="flex flex-col space-y-4 sm:space-y-6 py-2 sm:py-3 w-full">
    {features.map((feature, index) => (
      <PricingFeature key={index} {...feature} name={name} />
    ))}
  </ul>
);

const PricingFeature: React.FC<Feature> = ({
  icon: Icon,
  title,
  description,
  name,
}) => (
  <li className="flex space-x-3 sm:space-x-4 items-center">
    <div
      className={cn(
        "rounded-full shadow-sm w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center",
        name?.toLowerCase() === "pro" ? "bg-[#daceea]" : "ring-gray-200 ring-1"
      )}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
    </div>
    <div className="flex flex-col items-start space-y-0.5 sm:space-y-1">
      <p className="text-sm sm:text-md">{title}</p>
      <p className="text-xs sm:text-sm text-gray-600">{description}</p>
    </div>
  </li>
);

export default PricingSection;
