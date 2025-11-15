"use client"

import * as React from "react"
import Link from "next/link"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const services = [
  {
    title: "Vitamin B12 Injections",
    href: "/Services/vitamin-b12",
    description: "Essential vitamin injections for energy and wellness.",
  },
  {
    title: "Earwax Removal",
    href: "/Services/earwax-removal-service",
    description: "Safe and professional earwax removal service.",
  },
  {
    title: "Private Prescriptions",
    href: "/Services/private-prescriptions",
    description: "Convenient private prescription services.",
  },
  {
    title: "Travel Vaccinations",
    href: "/Travel-Clinic/travel-vaccination",
    description: "Complete travel health protection.",
  },
  {
    title: "Minor Ailments Clinic",
    href: "/Services/minor-ailement-clinic",
    description: "Quick consultations for common health issues.",
  },
  {
    title: "Weight Loss Services",
    href: "/weight-loss-service",
    description: "Professional weight management support.",
  },
  {
    title: "Eye Care Services",
    href: "/eye-care",
    description: "Comprehensive eye care and optical services.",
  },
  {
    title: "Erectile Dysfunction",
    href: "/Services/erectile-dysfunction",
    description: "Discreet consultations and treatments.",
  },
  {
    title: "Hair Loss Treatments",
    href: "/Services/hair-loss",
    description: "Effective solutions for hair restoration.",
  },
]

export function PharmacyNavigation() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/Services/services"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      All Services
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Comprehensive healthcare services tailored to your needs.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {services.slice(0, 6).map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/Travel-Clinic/travel-vaccination">Travel Clinic</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/Services/services">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/Services/contact-us">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
