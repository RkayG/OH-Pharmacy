import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

interface Feature72Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

export const Feature72 = ({
  heading = "Powerful Features",
  description = "Discover the powerful features that make our platform stand out from the rest. Built with the latest technology and designed for maximum productivity.",
  linkUrl = "https://www.shadcnblocks.com",
  linkText = "Book a demo",
  features = [
    {
      id: "feature-1",
      title: "Modern Design",
      description:
        "Clean and intuitive interface built with the latest design principles. Optimized for the best user experience.",
      image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
    {
      id: "feature-2",
      title: "Responsive Layout",
      description:
        "Fully responsive design that works seamlessly across all devices and screen sizes. Perfect for any platform.",
      image: "https://www.shadcnblocks.com/images/block/placeholder-2.svg",
    },
    {
      id: "feature-3",
      title: "Easy Integration",
      description:
        "Simple integration process with comprehensive documentation and dedicated support team.",
      image: "https://www.shadcnblocks.com/images/block/placeholder-3.svg",
    },
    {
      id: "feature-4",
      title: "Advanced Analytics",
      description:
        "Powerful analytics tools to help you understand your users and make data-driven decisions.",
      image: "https://www.shadcnblocks.com/images/block/placeholder-4.svg",
    },
  ],
}: Feature72Props) => {
  return (
    <section className="py-32 mx-auto bg-white">
      <div className="flex flex-col gap-16 lg:px-16  mx-auto px-4 sm:px-6">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-[#111418]">
            {heading}
          </h2>
          <p className="mb-8 text-[#617589] lg:text-lg">{description}</p>
          {linkUrl && linkText && (
            <Link
              href={linkUrl}
              className="group flex items-center text-xs font-medium md:text-base lg:text-lg text-[#005A5B] hover:text-[#005A5B]/80 transition-colors"
            >
              {linkText}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-clip rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 flex flex-col flex-grow">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6 text-[#111418]">
                  {feature.title}
                </h3>
                <p className="text-[#617589] lg:text-lg mb-6 flex-grow">
                  {feature.description}
                </p>
                {feature.href && (
                  <Link
                    href={feature.href}
                    className="group inline-flex items-center text-sm font-semibold text-[#005A5B] hover:text-[#005A5B]/80 transition-colors mt-auto"
                  >
                    Learn More
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

