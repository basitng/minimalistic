import React from "react";

interface FeatureItemProps {
  title: string;
  subtitle: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  subtitle,
  description,
}) => (
  <div className="space-y-2 sm:space-y-3">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{title}</h2>
    <h3 className="mt-1 sm:mt-2 text-base sm:text-lg font-medium text-gray-800">
      {subtitle}
    </h3>
    <p className="mt-1 text-sm sm:text-base text-gray-500">{description}</p>
  </div>
);

const FeatureSection: React.FC = () => {
  const features: FeatureItemProps[] = [
    {
      title: "4x",
      subtitle: "Sharper, brighter macro shots",
      description:
        "Design better and spend less time without restricting creative freedom.",
    },
    {
      title: "3x",
      subtitle: "Sharper, brighter macro shots",
      description:
        "Design better and spend less time without restricting creative freedom.",
    },
    {
      title: "2x",
      subtitle: "Highest-quality video",
      description:
        "Design better and spend less time without restricting creative freedom.",
    },
    {
      title: "1.5x",
      subtitle: "Telephoto",
      description:
        "Design better and spend less time without restricting creative freedom.",
    },
    {
      title: "60",
      subtitle: "Frames per second",
      description:
        "Design better and spend less time without restricting creative freedom.",
    },
    {
      title: "4K HDR",
      subtitle: "The film industry standard",
      description:
        "Design better and spend less time without restricting creative freedom.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="w-auto py-1 px-3 border border-[#0A0F2908] rounded-full ring-1 ring-gray-200 flex items-center space-x-2 bg-[#e3eafe]">
        <p className="text-xs sm:text-sm text-[#133a99] font-medium">
          Blank 2.0
        </p>
      </div>
      <div className="max-w-lg w-full pt-3 text-center">
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-medium text-center text-gray-800">
          Build your website with Blank
        </h1>
        <p className="mt-2 text-base sm:text-lg text-center text-gray-600">
          No matter what project you're working on, we've got you covered with
          the best wireframe kits for any platform.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 sm:mt-16 text-center max-w-6xl">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
